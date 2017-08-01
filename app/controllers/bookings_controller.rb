class BookingsController < ApplicationController
  # before_action :authenticate_user!

  def index
    user = current_user
    activity_ids = user.bookings.pluck(:activity_id)
    personal_bookings = Activity.where(id: activity_ids)
    render json: personal_bookings.map()
  end
end
