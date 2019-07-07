class CreateTournaments < ActiveRecord::Migration[5.2]
  def change
    create_table :tournaments do |t|
      t.integer :founder_id
      t.text :description
      t.string :name
      t.integer :type_id
      t.string :location
      t.float :lat
      t.float :lng
      t.datetime :date
      
      t.timestamps
    end
  end
end
