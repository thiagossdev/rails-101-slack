class ApplicationController < ActionController::Base
  include CanCan::ControllerAdditions
  
  before_action :authenticate_user!
end
