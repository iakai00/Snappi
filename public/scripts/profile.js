'use strict';

const postDP = async (fetchOptions) => {
  const response = await fetch(url + '/user/profile', fetchOptions);
  const result = await response.json();

  return result;
};

$(() => {
  // Eventlistner to catch when file added
  $('#profileImg').on('change', async (e) => {
    // Get the selected file
    const [file] = e.target.files;
    console.log('This is the file uploaded:-', file)
    if (file) {
      try {
        const fd = new FormData();
        fd.append('profile', file);
        fd.append('ownerId', userId);

        const fetchOptions = {
          method: 'POST',
          body: fd,
        };

        const upload = await postDP(fetchOptions);
        const response = await upload;

        if(response.status){
            console.log('this is the response upload:-', response);
            populateProfile(userId)
        }

      } catch (err) {
        console.log('Error while profile update', err);
      }
    }
  });
});