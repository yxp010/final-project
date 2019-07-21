class CreateGroups < ActiveRecord::Migration[5.2]
  def change
    create_table :groups do |t|
      t.string :name
      t.text :description
      t.integer :founder_id
      t.integer :type_id
      t.string :city
      t.string :state
      t.string :type_name
      t.string :img_url

      t.timestamps
    end
  end
end
