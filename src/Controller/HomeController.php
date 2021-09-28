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
     * @Route("/countdown", name="Décomptee")
     */
    public function countdown()
    {
        return $this->render('coming-soon-1.html');
    }
}