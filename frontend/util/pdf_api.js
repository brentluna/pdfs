export const fetchAllPdfs = (success) => (
  $.ajax({
    url: 'api/pdfs',
    method: 'GET',
    success,
    error: (e) => console.log('error in fetchAllPdfs:', e)
  })
);

export const getPresignedUrl = (data, success) => {
  const dataPassed = {upload: {prefix: 'file/pdf', filename: data.name}}
  return(
  $.ajax({
    url: 'api/upload',
    method: 'GET',
    data: dataPassed,
    success, 
    errors: (e) => console.log('error in getPresignedUrl:', e)
  })
  )
}

export const createPdf = (pdf, success) => (
  $.ajax({
    url: 'api/pdfs',
    method: 'POST',
    data: {pdf: {url: pdf}},
    success,
    error: e => console.log('error in createPdf:', e)
  })
)


export const uploadToS3 = (file, url, success) => {
  debugger
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
