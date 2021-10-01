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
     * @Route("/equipe", name="Notre équipe")
     */
    public function ourTeam()
    {
        return $this->render('our-team.html');
    }

}