<!DOCTYPE html>
<html lang="en" dir="ltr" class="light">
<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
		<link rel="shortcut icon" href="img/favicon.ico">
		<title>Dashboard</title>

		<!-- Core CSS -->
		<link rel="stylesheet" type="text/css" href="{{asset('assets/css/style.css')}}">
	</head>
    @routes
@viteReactRefresh
@vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
@inertiaHead
	<body>
        @inertia
		<!-- App Start-->

		<!-- Core Vendors JS -->
		<script src="{{asset('assets/js/vendors.min.js')}}"></script>

		<!-- Other Vendors JS -->
        <script src="{{asset('assets/vendors/apexcharts/apexcharts.js')}}"></script>

		<!-- Page js -->
        <script src="{{asset('assets/js/pages/sales-dashboard.js')}}"></script>

		<!-- Core JS -->
		<script src="{{asset('assets/js/app.min.js')}}"></script>
	</body>


<!-- Mirrored from www.themenate.net/elstar-html/modern-sales-dashboard.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 25 Oct 2023 07:22:42 GMT -->
</html>
