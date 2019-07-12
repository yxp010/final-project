class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :name
      t.text :description
      t.integer :founder_id
      t.string :location
      t.float :lat
      t.float :lng
      t.integer :type_id
      t.datetime :date
      t.string :city
      t.string :state
      t.string :zip_code
      t.string :type_name
      t.string :img_url

      t.timestamps
    end
  end
end
