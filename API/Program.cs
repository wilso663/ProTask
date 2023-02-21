var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
var app = builder.Build();

// Configure request pipeline
app.MapControllers();

app.Run();
