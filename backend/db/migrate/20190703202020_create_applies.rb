class CreateApplies < ActiveRecord::Migration[5.2]
  def change
    create_table :applies do |t|
      t.integer :applicant_id
      t.integer :group_id
      t.integer :times, :default => 1

      t.timestamps
    end
  end
end
