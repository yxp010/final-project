class CreateGroupEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :group_events do |t|
      t.string :name
      t.datetime :date
      t.text :description
      t.integer :group_id
      t.string :location
      t.float :lat
      t.float :lng
      t.integer :type_id

      t.timestamps
    end
  end
end
