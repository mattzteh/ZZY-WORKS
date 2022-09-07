class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :name, null: false, index: true, unique: true
      t.float :price, null: false
      t.string :color
      t.text :description, null: false
      t.string :size
      t.timestamps
    end
  end
end
