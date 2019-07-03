class CreateNotifications < ActiveRecord::Migration[5.2]
  def change
    create_table :notifications do |t|
      t.integer :sender_id
      t.integer :receiver_id
      t.boolean :has_read, :default => false

      t.timestamps
    end
  end
end
