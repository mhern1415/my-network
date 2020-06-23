# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

mark = User.create(
    first_name: "Mark",
    last_name: "Hernandez",
    email: "m.hern1415@gmail.com"
)

firsttest = Contact.create(
    contact_name: "Ingrid",
    relationship: "Acquaintance",
    current_company:"STARS",
    job_title: "MHS2",
    date: "5/12/2017",
    linkedin_url:"fart.com",
    other_url: "pee.com",
    user_id: 1
)