class CreateNotifications < ActiveRecord::Migration[5.2]
  def change
    create_table :notifications do |t|
      t.integer :user_id
      t.text :message
      t.boolean :has_read, :default => false
      t.string :notification_type
      t.boolean :has_check, :default => false
      t.integer :apply_group_id
      t.integer :applicant_id

      t.timestamps
    end
  end
end
