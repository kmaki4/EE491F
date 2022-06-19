from django.shortcuts import render
from django.views import generic
from .models import Movie
from django.urls import reverse_lazy
from django.shortcuts import render, get_object_or_404, redirect

# Create your views here.
class IndexView(generic.ListView):
    template_name = 'movies/index.html'
    context_object_name = 'movie_list'

    def get_queryset(self):
        """Return the all movies."""
        return Movie.objects.all()

class CreateView(generic.edit.CreateView):
    template_name = 'movies/create.html'
    model = Movie
    fields = ['movie', 'release_date', 'genre']
    success_url = reverse_lazy('movies:index') # more robust than hardcoding to /movies/; directs user to index view after creating a movie

class UpdateView(generic.edit.UpdateView):
    template_name = 'movies/update.html'
    model = Movie
    fields = ['movie', 'release_date', 'genre']
    success_url = reverse_lazy('movies:index')

class DeleteView(generic.edit.DeleteView):
    template_name = 'movies/delete.html' # override default of movies/movie_confirm_delete.html
    model = Movie
    success_url = reverse_lazy('movies:index')

def ViewView(request, pk):
    movie = get_object_or_404(Movie, pk=pk)
    return render(request, 'movies/view.html', {'movie': movie})