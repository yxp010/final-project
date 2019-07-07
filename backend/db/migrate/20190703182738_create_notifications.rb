class CreateNotifications < ActiveRecord::Migration[5.2]
  def change
    create_table :notifications do |t|
      t.integer :user_id
      t.boolean :has_read, :default => false

      t.timestamps
    end
  end
end
