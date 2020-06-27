class AddColumn < ActiveRecord::Migration[6.0]
  def change
    add_column :contacts, :userId, :string
  end
end
