class ActivitySerializer < ActiveModel::Serializer
  attributes :name, :start_date_time, :end_date_time, :price, :available_seats, :booked_full, :created_at, :updated_at
end
