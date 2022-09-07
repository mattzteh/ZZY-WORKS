# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require 'open-uri'

ApplicationRecord.transaction do 
  puts "Destroying tables..."
  # Unnecessary if using `rails db:seed:replant`
  User.destroy_all

  puts "Resetting primary keys..."
  # For easy testing, so that after seeding, the first `User` has `id` of 1
  ApplicationRecord.connection.reset_pk_sequence!('users')

  puts "Creating users..."
  # Create one user with an easy to remember username, email, and password:
  User.create!(
    first_name: 'Demo-lition',
    last_name: 'Last_name', 
    email: 'demo@user.io', 
    password: 'password'
  )

  # More users
  # 10.times do 
  #   User.create!({
  #     username: Faker::Internet.unique.username(specifier: 3),
  #     email: Faker::Internet.unique.email,
  #     password: 'password'
  #   }) 
  # end

# OFFICIAL SEED DATA------------------------------------------------------------
duck_switches = Product.create(
  name: 'Duck Switches',
  price: '$12',
  description: 'In development for over the past six months, we are excited to 
  introduce our latest innovation - the DUCK switch. Working closely with our 
  manufacturing partners, we have translated our MUTE mounting platform 
  (found in the KARA, M60-B, M65-B and U80-B) into an MX switch. 
  The implementation acts as an elastic medium between the top and bottom 
  housing, thereby creating tighter tolerances. This will allow the switch 
  to have a deeper and consistent sound profile whilst eliminating the need 
  for switch-films.'
  )
  
duck_switches.photos.attach(
  io: URI.open("https://zzyworks-dev.s3.us-west-1.amazonaws.com/M60_splash.webp"), 
  filename: "M60_splash.webp")

#-------------------------------------------------------------------------------
  
grid_set_a = Product.create(
  name: 'Grid Set A Keycaps',
  price: '$42',
  description: 'Injection moulded, low-profile keycaps produced by RAMA WORKS®. 
  Available in single colour sets (62 caps) or a mixed set (108 caps)'
)

grid_set_a.photos.attach(
  io: URI.open("https://zzyworks-dev.s3.us-west-1.amazonaws.com/GRID_SET_A_PHOTO_1.webp"),
  filename: "GRID_SET_A_PHOTO_1.webp"
)

grid_set_a.photos.attach(
  io: URI.open("https://zzyworks-dev.s3.us-west-1.amazonaws.com/GRID_SET_A_PHOTO_2.webp"),
  filename: "GRID_SET_A_PHOTO_2.webp"
)

grid_set_a.photos.attach(
  io: URI.open("https://zzyworks-dev.s3.us-west-1.amazonaws.com/GRID_SET_A_PHOTO_3.webp"),
  filename: "GRID_SET_A_PHOTO_3.webp"
)

#-------------------------------------------------------------------------------

grid_set_b = Product.create(
  name: 'Grid Set B Keycaps',
  price: '$42',
  description: 'Injection moulded, low-profile keycaps produced by RAMA WORKS®. 
  Available in single colour sets (62 caps) or a mixed set (100 caps)'
)

grid_set_b.photos.attach(
  io: URI.open("https://zzyworks-dev.s3.us-west-1.amazonaws.com/GRID_SET_B_PHOTO_1.webp"),
  filename: "GRID_SET_B_PHOTO_1.webp"
)

grid_set_b.photos.attach(
  io: URI.open("https://zzyworks-dev.s3.us-west-1.amazonaws.com/GRID_SET_B_PHOTO_2.webp"),
  filename: "GRID_SET_B_PHOTO_2.webp"
)

grid_set_b.photos.attach(
  io: URI.open("https://zzyworks-dev.s3.us-west-1.amazonaws.com/GRID_SET_B_PHOTO_3.webp"),
  filename: "GRID_SET_B_PHOTO_3.webp"
)

#-------------------------------------------------------------------------------

grid_set_c = Product.create(
  name: 'Grid Set C Keycaps',
  price: '$42',
  description: 'Injection moulded, low-profile keycaps produced by RAMA WORKS®. 
  Available in single colour sets (62 caps) or a mixed set of select 
  SET A / B / C caps (108 caps)'
)

grid_set_c.photos.attach(
  io: URI.open("https://zzyworks-dev.s3.us-west-1.amazonaws.com/GRID_SET_C_PHOTO_1.webp"),
  filename: "GRID_SET_C_PHOTO_1.webp"
)

grid_set_c.photos.attach(
  io: URI.open("https://zzyworks-dev.s3.us-west-1.amazonaws.com/GRID_SET_C_PHOTO_2.webp"),
  filename: "GRID_SET_C_PHOTO_2.webp"
)

grid_set_c.photos.attach(
  io: URI.open("https://zzyworks-dev.s3.us-west-1.amazonaws.com/GRID_SET_C_PHOTO_3.webp"),
  filename: "GRID_SET_C_PHOTO_3.webp"
)

#-------------------------------------------------------------------------------


  


puts "Done!"
end