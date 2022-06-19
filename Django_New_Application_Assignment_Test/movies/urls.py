from django.urls import path

from . import views


app_name = 'movies'
urlpatterns = [
    path('', views.IndexView.as_view(), name='index'),
    path('view/<int:pk>', views.ViewView, name='view'),
    path('new', views.CreateView.as_view(), name='create'),
    path('view/<int:pk>/update', views.UpdateView.as_view(), name='update'),
    path('view/<int:pk>/delete', views.DeleteView.as_view(), name='delete'),
]