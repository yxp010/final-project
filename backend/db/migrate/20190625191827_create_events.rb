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

      t.timestamps
    end
  end
end
