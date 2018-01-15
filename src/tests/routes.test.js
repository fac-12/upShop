const test = require('tape');
const request = require('supertest');
const app = require('../app');

const endpoints = ['/',
				   '/search',
				   '/search/:category',
				   '/place/:place',
				   '/search/:category/map',
				   '/add',
				   '/add/checkExists',
				   '/add/exists',
				   '/add/details',
				   'add/details/success'];

endpoints.forEach(endpoint => {
	test('All routes should return status code 200 and text/html', t => {
		request(app)
			.get(`${endpoint}`)
			.expect(200)
			.expect('Content-Type', 'text/html; charset=utf-8')
			.end(err => {
				t.error(err);
				t.end();
			})
	})
})
