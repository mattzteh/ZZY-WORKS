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
  name: 'DUCK Switches',
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
  filename: "M60_splash.webp"
)

#-------------------------------------------------------------------------------
  
grid_set_a = Product.create(
  name: 'GRID Set A Keycaps',
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
  name: 'GRID Set B Keycaps',
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
  name: 'GRID Set C Keycaps',
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

kara_backplate = Product.create(
  name: 'KARA Backplate (Extra)',
  price: '$26',
  description: 'NOTE: MATCHING BACKPLATE IS ALREADY INCLUDED WITH KARA. NOT COMPATIBLE WITH M60-A.'
)

kara_backplate.photos.attach(
  io: URI.open("https://zzyworks-dev.s3.us-west-1.amazonaws.com/KARA_BACKPLATE_PHOTO_1.webp"),
  filename: "KARA_BACKPLATE_PHOTO_1.webp"
)

kara_backplate.photos.attach(
  io: URI.open("https://zzyworks-dev.s3.us-west-1.amazonaws.com/KARA_BACKPLATE_PHOTO_2.webp"),
  filename: "KARA_BACKPLATE_PHOTO_2.webp"
)

kara_backplate.photos.attach(
  io: URI.open("https://zzyworks-dev.s3.us-west-1.amazonaws.com/KARA_BACKPLATE_PHOTO_3.webp"),
  filename: "KARA_BACKPLATE_PHOTO_3.webp"
)

#-------------------------------------------------------------------------------

kara_plate = Product.create(
  name: 'KARA Plate (Extra)',
  price: '$16',
  description: 'NOTE: THE ICED PLATE IS ALREADY INCLUDED WITH KARA. NOT COMPATIBLE WITH M60-A. 
  KARA SUB-ASSEMBLY REQUIRES ALL 3 PARTS (PCB, MUTE, PLATE)

  Product Name:
  RAMA WORKS® KARA PLATE

  Part Number:
  RW-KARA-A-PLATE

  Material:
  Polycarbonate (NOCT, SOYA, ICED, AZUR, HAZE)

  Aluminium (MIST)'
)

kara_plate.photos.attach(
  io: URI.open("https://zzyworks-dev.s3.us-west-1.amazonaws.com/KARA_PLATE.webp"),
  filename: "KARA_PLATE.webp"
)

#-------------------------------------------------------------------------------

keycap = Product.create(
  name: 'WAVE SEQ2 Br Matte',
  price: '$56',
  description: 'IN-STOCK - LIMITED RELEASE


  Product Name:

  RAMA WORKS® Br WAVE SEQ 2

  Part Number:

  RW-KC-Br-WAVE-SEQ2-01

  -------------------------------------------------------------------------------

  Product Description:

  The return of the LIQUID SERIES in the WAVE SEQ2 tactile keycap series by RAMA WORKS®.

  -------------------------------------------------------------------------------

  Product Color:
  GOLD / MOON

  Material:
  Brass

  Series:
  WAVE SEQ2

  Stem Type:
  Cherry MX

  Profile:
  Cherry Profile - Escape Row (R1)'
)

keycap.photos.attach(
  io: URI.open("https://zzyworks-dev.s3.us-west-1.amazonaws.com/KEYCAP_PHOTO_1.webp"),
  filename: "KEYCAP_PHOTO_1.webp"
)

keycap.photos.attach(
  io: URI.open("https://zzyworks-dev.s3.us-west-1.amazonaws.com/KEYCAP_PHOTO_2.webp"),
  filename: "KEYCAP_PHOTO_2.webp"
)
  
keycap.photos.attach(
  io: URI.open("https://zzyworks-dev.s3.us-west-1.amazonaws.com/KEYCAP_PHOTO_3.webp"),
  filename: "KEYCAP_PHOTO_3.webp"
)

#-------------------------------------------------------------------------------

m65_starter_kit = Product.create(
  name: 'M65-B Starter Kit',
  price: '$38',
  description: 'Everything you need sans keycaps to make this a complete kit 
  with Aliaz 60g.'
)

m65_starter_kit.photos.attach(
  io: URI.open("https://zzyworks-dev.s3.us-west-1.amazonaws.com/M65_B_STARTER_KIT.webp"),
  filename: "M65_B_STARTER_KIT.webp"
)

#-------------------------------------------------------------------------------

m65_mute = Product.create(
  name: 'M65-B Mute (Extra)',
  price: '$38',
  description: 'Extra MUTE mount for the M65-B, non-conductive silicone. 
  Need a spare? Making another plate? Moulded out of clear silicone to match 
  perfectly with the ICED variant.'
)

m65_mute.photos.attach(
  io: URI.open("https://zzyworks-dev.s3.us-west-1.amazonaws.com/M65_MUTE_PHOTO_1.webp"),
  filename: "M65_MUTE_PHOTO_1.webp"
)

#-------------------------------------------------------------------------------

m65_pcb = Product.create(
  name: 'M65-B PCB (Extra)',
  price: '$88',
  description: 'In an effort to provide the best end-user experience available, 
  this M65-B PCB requires no soldering to construct with any Cherry 
  MX-compatible switches. The M65-B offers a USB-C connection attached to the 
  USB Extension PCB. The board includes in-switch RGB LEDs under the PCB, which 
  require no installation. PCB design by Wilba.
  
  The M65-Bx variant is a solderable version without hot-swap sockets for those 
  who are discerning with their switch choice.'
)

m65_pcb.photos.attach(
  io: URI.open("https://zzyworks-dev.s3.us-west-1.amazonaws.com/M65_PCB_PHOTO_1.webp"),
  filename: "M65_PCB_PHOTO_1.webp"
)

#-------------------------------------------------------------------------------

m65_plate = Product.create(
  name: 'M65-B Plate (Extra)',
  price: '$52',
  description: 'Product Description:
  Extra plate for the M65-B, Mirror-finished PVD Coated Brass, Anodised Aluminium or Frosted Polycarbonate.

  -------------------------------------------------------------------------------

  Product Color Options:
  Brass: KURO (Black), MOON (Grey), MIST (Silver), ROSE
  Aluminium: KURO
  Polycarbonate: ICED

  Finish:
  Brass: Hand-polished Mirror finished PVD Coated Brass
  Aluminium: Beadblasted Anodised Aluminium
  Polycarbonate: Frosted

  -------------------------------------------------------------------------------

  Contents:

  1 x Plate (Brass OR Aluminium)

  6 x RW Black M2x3 T10 Fixtures

  6 x RW Black M2x3 CSK T6 Fixtures

  6 x RW Black M2x3.5 Spacer

  1 x Various Packaging

  -------------------------------------------------------------------------------'
)

m65_plate.photos.attach(
  io: URI.open("https://zzyworks-dev.s3.us-west-1.amazonaws.com/M65_PLATE_PHOTO_1.webp"),
  filename: "M65_PLATE_PHOTO_1.webp"
)

#-------------------------------------------------------------------------------

deskmat = Product.create(
  name: 'MAT',
  price: '$24',
  description: 'DESCRIPTION: 
  
  We are excited to introduce our new MATS, available exclusively through RAMA WORKS®. This improved desk mat comes in four different colourways, perfect for matching any keyboard and desk setup combination.

  MATS is made out of an ultra-smooth, soft & sound absorbent material, measuring 300mm (W) x 720mm (L)  and a perfect thickness of 4mm (H), which is the same size as our much loved CANVAS XL.

  Machine Washable (wash on cold/gentle - air dry)
  Rubber foam base to ensure stability
  Stitched edge around the border for durability and prevent frayed edges
  Cloth Top - 100% polyester, which is soft to touch and perfect for your mouse to glide on'
)

deskmat.photos.attach(
  io: URI.open("https://zzyworks-dev.s3.us-west-1.amazonaws.com/MATS_PHOTO_1.webp"),
  filename: "MATS_PHOTO_1.webp"
)



puts "Done!"
end