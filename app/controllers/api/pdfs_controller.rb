class Api::PdfsController < ApplicationController
  
  def new
    @pdf = Pdf.new
  end

  def create
    @pdf = Pdf.new(pdf_params)

    @pdf.user_id = current_user.id
    if @pdf.save
      render :show
    else 
      render :errors
    end
  end

  def index
    @pdfs = current_user.pdfs
  end

  def destroy 
    @pdf = Pdf.find(params[:id])
    
    @pdf.destroy
    delete_from_S3(@pdf)
    render :show 
  end 
  
  private 
  def delete_from_S3(pdf)
    pdf_key = pdf.url.split('amazonaws.com/').last
    puts pdf_key
    s3 = Aws::S3::Resource.new(region: 'us-west-1')  
    bucket = s3.bucket('brent-pdfs')
    obj = bucket.object(pdf_key)
    obj.delete
  end

  def pdf_params
    params.require(:pdf).permit(:url, :title)
  end

end
