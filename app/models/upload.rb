class Upload < ApplicationRecord

  def self.presign(prefix, filename, limit: limit)
    extname = File.extname(filename)
    filename = "#{SecureRandom.uuid}#{extname}"
    upload_key = Pathname.new(prefix).join(filename).to_s

    creds = Aws::Credentials.new(ENV['AWS_ACCESS_KEY_ID'], ENV['AWS_SECRET_ACCESS_KEY'])
    s3 = Aws::S3::Resource.new(region: 'us-west-1', credentials: creds)
    obj = s3.bucket('brent-pdfs').object(upload_key)

    params = {acl: 'public-read'}
    params[:content_length] = limit if limit
    
    {
      presigned_url: obj.presigned_url(:put, params),
      public_url: obj.public_url
    }

  end
end
