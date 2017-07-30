class ActivitiesController < ApplicationController
  # before_action :authenticate_user!

  def index
    activities = Activity.all.map()
    render json: activities
  end
end
