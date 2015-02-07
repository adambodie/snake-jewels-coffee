class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected
  def configure_permitted_parameters
    devise_parameter_sanitizer.for(:sign_in) { |u| u.permit(:firstname, :lastname, :email) }
  end
  
  before_filter :set_global_search_variable

  def set_global_search_variable
    @q = Product.search(params[:q])
  end
end
