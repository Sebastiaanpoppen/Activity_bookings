class CreateActivities < ActiveRecord::Migration[5.1]
  def change
    create_table  :activities do |t|
      t.string    :name
      t.datetime  :start_date_time
      t.datetime  :end_date_time
      t.decimal   :price
      t.integer   :available_seats
      t.timestamps
    end
  end
end
