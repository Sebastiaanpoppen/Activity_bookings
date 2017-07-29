Booking.destroy_all
Child.destroy_all
User.destroy_all
Activity.destroy_all

Activity.create(name: "Knutselen", start_date_time: DateTime.new(2017,8,26,12).to_datetime, end_date_time: DateTime.new(2017,8,26,13), price: 4.50, available_seats: 25, booked_full: false)
Activity.create(name: "Zingen", start_date_time: DateTime.new(2017,8,27,12).to_datetime, end_date_time: DateTime.new(2017,8,27,13), price: 3.50, available_seats: 25, booked_full: false)
Activity.create(name: "Dansen", start_date_time: DateTime.new(2017,8,28,12).to_datetime, end_date_time: DateTime.new(2017,8,28,13), price: 1.50, available_seats: 25, booked_full: false)
Activity.create(name: "Buiten spelen", start_date_time: DateTime.new(2017,8,29,12).to_datetime, end_date_time: DateTime.new(2017,8,29,13), price: 1.50, available_seats: 25, booked_full: false)
Activity.create(name: "Naar de speeltuin", start_date_time: DateTime.new(2017,8,30,12).to_datetime, end_date_time: DateTime.new(2017,8,30,13), price: 10.50, available_seats: 25, booked_full: false)
Activity.create(name: "Skelteren", start_date_time: DateTime.new(2017,8,31,12).to_datetime, end_date_time: DateTime.new(2017,8,31,13), price: 5.00, available_seats: 25, booked_full: false)
Activity.create(name: "Zandbak", start_date_time: DateTime.new(2017,9,1,12).to_datetime, end_date_time: DateTime.new(2017,9,1,13), price: 2.50, available_seats: 25, booked_full: false)
Activity.create(name: "Dierentuin", start_date_time: DateTime.new(2017,9,2,12).to_datetime, end_date_time: DateTime.new(2017,9,2,13), price: 22.50, available_seats: 25, booked_full: false)

User.create(firstname: 'Sebastiaan', email: 'sebastiaan@testmail.nl', password: 'abcdef', is_admin: true)
User.create(firstname: 'Hans', email: 'Hans@testmail.nl', password: 'abcdef', is_admin: false)
User.create(firstname: 'Joke', email: 'Joke@testmail.nl', password: 'abcdef', is_admin: false)
User.create(firstname: 'Fred', email: 'Fred@testmail.nl', password: 'abcdef', is_admin: false)
User.create(firstname: 'Henk', email: 'Henk@testmail.nl', password: 'abcdef', is_admin: false)
User.create(firstname: 'Truus', email: 'Truus@testmail.nl', password: 'abcdef', is_admin: false)

Child.create(name: "Peter", date_of_birth: Date.new(2015,9,2).to_date, is_male: true, user: User.first)
Child.create(name: "Jelle", date_of_birth: Date.new(2014,9,2).to_date, is_male: true, user: User.first)
Child.create(name: "Simone", date_of_birth: Date.new(2016,7,2).to_date, is_male: false, user: User.second)
Child.create(name: "Henkie", date_of_birth: Date.new(2013,4,2).to_date, is_male: true, user: User.third)
Child.create(name: "Jil", date_of_birth: Date.new(2016,1,2).to_date, is_male: false, user: User.fourth)
Child.create(name: "Daan", date_of_birth: Date.new(2013,8,2).to_date, is_male: true, user: User.fifth)

Booking.create(activity: Activity.first, user: User.first)
Booking.create(activity: Activity.first, user: User.first)
Booking.create(activity: Activity.second, user: User.second)
Booking.create(activity: Activity.third, user: User.third)
Booking.create(activity: Activity.fourth, user: User.fourth)
Booking.create(activity: Activity.fifth, user: User.fifth)
