<!DOCTYPE html>
<html lang="en" dir="ltr" data-nav-layout="vertical" class="light" data-header-styles="light" data-menu-styles="dark">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Synto - Tailwind Admin Template </title>
    <meta name="description" content="A Tailwind CSS admin template is a pre-designed web page for an admin dashboard. Optimizing it for SEO includes using meta descriptions and ensuring it's responsive and fast-loading.">
    <meta name="keywords" content="analytics dashboard,jobs dashboard,crm dashboard examples,personal dashboard,sales dashboard sample,best crm dashboard,crypto dashboard template,sales analytics dashboard,stocks dashboard,hrm dashboard,ecommerce admin panel template,sales admin dashboard,admin panel for ecommerce website,website template ecommerce,template dashboard,course dashboard,template ecommerce website">

    <!-- Favicon -->
    <link rel="shortcut icon" href="assets/img/brand-logos/favicon.ico">

    <!-- Main JS -->
    <script src="assets/js/main.js"></script>

    <!-- Style Css -->
    <link rel="stylesheet" href="assets/css/style.css">

    <!-- Simplebar Css -->
    <link rel="stylesheet" href="assets/libs/simplebar/simplebar.min.css">

    <!-- Color Picker Css -->
    <link rel="stylesheet" href="assets/libs/@simonwep/pickr/themes/nano.min.css">

    <link rel="stylesheet" href="assets/libs/jsvectormap/css/jsvectormap.min.css">
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>

<body class="">

    <div class="page">
        @inertia
     <!-- Start::app-sidebar -->
    </div>


    <!-- Apex Charts JS -->
    {{-- <script src="assets/libs/apexcharts/apexcharts.min.js"></script>

    <!-- Chartjs Chart JS -->
    <script src="assets/libs/chart.js/chart.min.js"></script> --}}

    <!-- Index JS -->
    <script src="assets/js/index.js"></script>

   <!-- Back To Top -->
<div class="scrollToTop">
    <span class="arrow"><i class="ri-arrow-up-s-fill text-xl"></i></span>
</div>

<div id="responsive-overlay"></div>

<!-- popperjs -->
<script src="assets/libs/@popperjs/core/umd/popper.min.js"></script>

<!-- Color Picker JS -->
<script src="assets/libs/@simonwep/pickr/pickr.es5.min.js"></script>

<!-- sidebar JS -->
<script src="{{asset('assets/js/defaultmenu.js')}}"></script>

<!-- sticky JS -->
{{-- <script src="assets/js/sticky.js"></script> --}}

<!-- Switch JS -->
<script src="assets/js/switch.js"></script>

<!-- Preline JS -->
<script src="assets/libs/preline/preline.js"></script>

<!-- Simplebar JS -->
<script src="assets/libs/simplebar/simplebar.min.js"></script>

<!-- Custom JS -->
{{-- <script src="assets/js/custom.js"></script> --}}



<!-- Custom-Switcher JS -->

  </body>
</html>
