class CreateGroupEventUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :group_events_users do |t|
      t.integer :user_id
      t.integer :group_event_id
      t.timestamps
    end
  end
end
