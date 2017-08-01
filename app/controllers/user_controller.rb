class UserController < ApplicationController
  def get_user
    render json: current_user
  end
end
