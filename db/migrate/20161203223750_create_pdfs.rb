class CreatePdfs < ActiveRecord::Migration[5.0]
  def change
    create_table :pdfs do |t|
      t.string :url, null: false
      t.string :title
      t.integer :user_id, null: false,  index: true

      t.timestamps
    end
  end
end
