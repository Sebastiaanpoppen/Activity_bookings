class Booking < ApplicationRecord
  belongs_to :activity
  belongs_to :user
  # belongs_to :schedule
end
