class Activity < ApplicationRecord
  has_many :bookings
  # validates :start_date_time, presence: :true
  # validates :end_date_time, presence: :true

end
