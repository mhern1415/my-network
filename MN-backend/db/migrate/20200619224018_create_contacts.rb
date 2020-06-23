class CreateContacts < ActiveRecord::Migration[6.0]
  def change
    create_table :contacts do |t|
      t.string :contact_name
      t.string :relationship
      t.string :current_company
      t.string :job_title
      t.string :date
      t.string :linkedin_url
      t.string :other_url
      t.integer :user_id
      t.timestamps
    end
  end
end
