class CreateGroups < ActiveRecord::Migration[5.2]
  def change
    create_table :groups do |t|
      t.string :name
      t.integer :founder_id
      t.integer :type_id
      
      t.timestamps
    end
  end
end
