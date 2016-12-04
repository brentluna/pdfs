class Api::PdfsController < ApplicationController
  
  def new
    @pdf = Pdf.new
  end

  def create
    @pdf = Pdf.new(pdf_params )

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

  def destory 
    @pdf = Pdf.find(params[:id])
    @pdf.destroy
    render :index
  end

end
