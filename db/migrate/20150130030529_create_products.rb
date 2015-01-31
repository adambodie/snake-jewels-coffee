class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
      t.string :title
      t.string :category
      t.integer :size
      t.text :description
      t.decimal :price

      t.timestamps
    end
  end
end
