<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class HomeController extends AbstractController
{
    
    /**
     * @Route("/", name="Home Page")
     */
    public function index()
    {
        return $this->render('index.html');
    }

    /**
     * @Route("/countdown", name="Décompte")
     */
    public function countdown()
    {
        return $this->render('coming-soon-1.html');
    }

    /**
     * @Route("/contact", name="contact")
     */
    public function contact()
    {
        return $this->render('contact-2.html');
    }

     /**
     * @Route("/prestations", name="Préstations")
     */
    public function nosPrestations()
    {
        return $this->render('all-service.html');
    }

    /**
     * @Route("/detailling", name="Detailling")
     */
    public function detailling()
    {
        return $this->render('brake-repair.html');
    }

    /**
     * @Route("/carwebshop", name="carwebshop")
     */
    public function carWebShop()
    {
        return $this->render('shop-grid-4.html');
    }

    /**
     * @Route("/product-details", name="Détail du produit")
     */
    public function productDetails()
    {
        return $this->render('shop-product-details.html');
    }

}