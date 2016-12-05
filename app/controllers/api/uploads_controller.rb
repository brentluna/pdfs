class Api::UploadsController < ApplicationController

  def upload
    render json: Upload.presign(params[:upload][:prefix], params[:upload][:filename], limit: 5.megabyte)
  end

  def upload_params
    params.require(:upload).permit(:prefix, :filename)
  end

end
