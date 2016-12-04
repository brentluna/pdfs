json.array!(@pdfs) do |pdf|
  json.extract! pdf, :id, :url, :title, :user_id
end
