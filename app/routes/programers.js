import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return ['Adam Adamski', 'Tomasz Tomaszewski', 'Karol Karolowski'];
      }
});
