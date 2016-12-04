export const fetchAllPdfs = (success) => (
  $.ajax({
    url: 'api/pdfs',
    method: 'GET',
    success,
    error: (e) => console.log('error in fetchAllPdfs:', e)
  })
);

export const getPresignedUrl = (data, success) => (
  $.ajax({
    url: 'api/upload',
    method: 'GET',
    data: {prefix: data.prefix, filename: data.filename},
    success, 
    errors: (e) => console.log('error in getPresignedUrl:', e)
  })
)

export const createPdf = pdf => (
  $.ajax({
    url: 'api/pdfs',
    method: 'POST',
    success,
    error: e => console.log('error in createPdf:', e);
  })
)


export const uploadToS3 = (file, url, success) => {
  let presignedUrl = url.presigned_url;
  let publicUrl = url.public_url;
  let filetype = file.type;

  let xhr = new XMLHttpRequest();
  xhr.open('PUT', presignedUrl, true);
  xhr.setRequestHeader('Content-Typ', filetype);

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      success(publicUrl) 
    }
  }
  xhr.send(file);
}
