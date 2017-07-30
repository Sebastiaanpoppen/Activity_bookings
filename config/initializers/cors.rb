Rails.application.config.middleware.insert_before 0, Rack::Cors, logger: (-> { Rails.logger }) do
  allow do
    origins '*'
    resource '*',
             headers: :any,
             expose: 'X-Pagination',
             methods: %i(get post delete put patch options head)
  end
end
