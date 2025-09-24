var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-3",
  "level": "1",
  "url": "frontmatter-3.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "frontmatter-4",
  "level": "1",
  "url": "frontmatter-4.html",
  "type": "Dedication",
  "number": "",
  "title": "Dedication",
  "body": " To the memory of William Taylor  "
},
{
  "id": "frontmatter-5",
  "level": "1",
  "url": "frontmatter-5.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " This text is intended for an undergraduate course in ordinary differential equations. The Ordinary Differential Equations Project began when the author was teaching the ordinary differential equations course at Harvard University. After arriving at Stephen F. Austin State University, the Harvard notes began to transform into the makings of a textbook. At the same time, the author was converting his abstract algebra book, Abstract Algebra: Theory and Applications ( http:\/\/abstract.pugetsound.edu\/index.html ) from LaTeX into MathBook XML. With MathBook XML, which is now PreTeXt ( https:\/\/pretextbook.org ), one can produce HTML, PDF, EPUB, and even braille versions of a textbook while only having to maintain the PreTeXt source. The Ordinary Differential Equations Project is now available on https:\/\/runestone.academy , a Learning Engineering and Analytics Portal (LEAP) for hosting textbooks, assignments, and interactive learning activities.  There has been a strong trend during the past few decades to incorporate both modeling and technology into undergraduate differential equations courses. Since it is easy to insert computational cells inside an HTML version of the textbook with PreTeXt, there is now an opportunity to seemlessly embed technology into the textbook. Sage ( sagemath.org ), our technolgy of choice, is a free, open source, software system for advanced mathematics. Sage is ideal for assisting with a study of ordinary differential equations, since it cannot only be embedded as computational cells in a textbook, it can also be used on a computer, a local server, or on CoCalc ( https:\/\/cocalc.com ). The Sage code in The Ordinary Differential Equations Project has been tested for accuracy with the most recent version available at this time: Sage Version 9.2 (released 2020 10 24).  There are additional projects at the end of each chapter. Many of the projects come from SIMIODE ( https:\/\/www.simiode.org ). SIMIODE provides a rich environment for learning and teaching differential equations through modeling. SIMIODE was founded by Dr. Brian Winkel, Emeritus Professor of Mathematics, United States Military Academy, West Point NY USA in 2013. Some of the projects may require a basic knowledge of programming. All of these exercises and projects are more substantial in nature and allow the exploration of new results and theory.  Another great source of problems and projects is the CODEE Journal , a peer-reviewed, open-access publication, distributed by the CODEE (Community of Ordinary Differential Equations Educators) and published by the Claremont Colleges Library ( https:\/\/scholarship.claremont.edu\/codee\/ ). The goal of the CODEE Journal is to advance the teaching and learning of ODEs through the dissemination of materials that will be useful to both educators and education researchers.  Each section in The Ordinary Differential Equations Project contains reading questions. Reading questions should be answered by students before they come to class. The questions serve two purposes: students will have a general knowledge of the section to be covered in class before the actual class and instructors will have a better idea of what their students actually know. If instructors use Runestone, students can answer the reading questions in the textbook, where instructors can read and grade the student responses.  The Ordinary Differential Equations Project contains classroom activities in each section. The classroom activities can used in a variety of ways. I divide my class into groups of three or four and have each group work on the activities on the board. This allows me to efficiently comment on student work. Groups can also easily present their work to the rest of the class.     Thomas W. Judson  Stephen F. Austin State University  Nacogdoches, Texas 75962   "
},
{
  "id": "frontmatter-6",
  "level": "1",
  "url": "frontmatter-6.html",
  "type": "Acknowledgements",
  "number": "",
  "title": "Acknowledgements",
  "body": " This book was written in PreTeXt. The open source version of this book has received support from the National Science Foundation (Awards #DUE–1625223, #DUE-1626455, #DUE-1821329).  "
},
{
  "id": "firstlook01",
  "level": "1",
  "url": "firstlook01.html",
  "type": "Section",
  "number": "1.1",
  "title": "Modeling with Differential Equations",
  "body": " Modeling with Differential Equations    To understand that a differential equation is an equation relating a function to one or more of its derivatives and that an initial value problem is a differential equation where the initial condition , , is specified.  To understand and be able to apply the three principle steps in modeling any phenomenon with differential equations.  Discovering the differential equation or equations that best describe a specified physical situation.  Finding either exactly or approximately the appropriate solution of the equation or equations.  Interpreting the solution in terms of the phenomenon.   To understand and be able to apply the differential equations that model exponential growth and logistic growth .  To understand that some phenomenon are best modeled by higher order differential equations or systems of differential equations.     Calculus tells us that the derivative of a function measures how the function changes. An equation relating a function to one or more of its derivatives is called a differential equation . The subject of differential equations is one of the most interesting and useful areas of mathematics. We can describe many interesting natural phenomena that involve change using differential equations. In addition, the theory of the subject has broad and important implications.    Exponential Growth  We begin our study of ordinary differential equations by modeling some real world phenomena. For a particular situation that we might wish to investigate, our first task is to write an equation (or equations) that best describes the phenomenon. Suppose that we wish to study how a population grows with time . We might make the assumption that a constant fraction of the population is having offspring at any particular time. If we also assume that the population has a constant death rate, the change in the population during a small time interval will be where is the fraction of the population having offspring during the interval and is the fraction of the population that dies during the interval. Equivalently, we can write where . Since the derivative of is the rate of change of the population is proportional to the size of the population, or  The equation is one of the simplest differential equations that we will consider. The equation tells us that the population grows in proportion to its current size. It is not too difficult to see that is a solution to this equation, where is an arbitrary constant. Indeed, if we differentiate , we obtain In addition, if we know the value of , say when , we can also determine the value of . For example, if the population at the time is , then or . The differential equation is an example of an initial value problem initial value problem or IVP IVP , and we say that is an initial condition initial condition . Since the solution to equation is , we say that the population grows exponentially exponential growth .  As an example, suppose that is a population of a colony of bacteria at time , whose initial population is 1000 at , where time is measured in hours. Then and our solution becomes . If the population grows at three percent per hour, then after one hour. Consequently, and the solution to our initial value problem is Of course, it is important to realize that this is only a model. If is small, our model might be reasonably accurate. However, if we let be very large, our colony of bacteria could very well exceed the mass of the earth. The growth rate of a population need not be positive. For example, both Germany and Japan have experienced negative growth in recent years. See . The equation can also be used to model phenomena such as radioactive decay and compound interest topics which we will explore later.  To summarize, we say that the function is a general solution general solution of the equation , and is a particular solution particular solution to the differential equation. The general solution to our equation graphs as an infinite family of curves, which we will call integral curves integral curves or solution curves solution curves ( ).  In general, given a differential equation , a solution to the differential equation is a function such that . Furthermore, if satisfies a given initial condition , then is a solution to the in initial value problem    first-order initial value problem       f1(x) = exp(x)\/10  f2(x) = exp(x)\/20  f3(x) = exp(x)\/30  f4(x) = -exp(x)\/10  f5(x) = -exp(x)\/20  f6(x) = -exp(x)\/30             x(t) = Ce^{kt}        Integral curves    Verifying Solutions   Use direct substitution to verify that is a solution of the given differential equation.     ;      ;      ; ,      ;      ; ,       Logistic Growth  Not all populations grow exponentially; otherwise, a bacteria culture in a petri dish would grow unbounded and soon be much larger than the size of the laboratory. To see what happens if there are limiting factors to population growth, let us consider the population of fish in a children's trout pond. The number of trout will be limited by the available resources such as food supply as well as by spawning habitat. A small population of fish might grow exponentially if the pond is large and food is abundant, but the growth rate will decline as the population increases and the availability of resources declines. We can use the logistic equation logistic equation to model population growth in a resource limited environment. The logistic model was first used by the Belgian mathematician and physician Pierre François Verhulst in 1836 to predict the populations of Belgium and France.  To see how the logistic model works, let us try to adjust our model of exponential growth to account for the limited resources of the pond. We will make the following assumptions.  If the population of trout is small and the pond is large with abundant resources, the rate of growth will be approximately exponential,  If is the maximum population of trout that the pond can support, then any population larger than will decrease. In other words, for . We say that is the carrying capacity carrying capacity for the population.  Our assumptions suggest that we might try an equation of the form where is a function of that is close to 1 if the population is small but negative if the population is greater than . The simplest function satisfying these conditions is Thus, the logistic population model logistic population model is given by the differential equation    logistic population model    Suppose we have a pond that will support 1000 fish, and the initial population is 100 fish. In order to determine the number of fish in the lake at any time , we must find a solution to the initial value problem It is easy to verify that is the solution to our initial value problem. Certainly , and if we differentiate , we will obtain the righthand side of the differential equation, In addition, if we know that the population is 200 fish after one year, then and we can determine that Consequently, the solution to our intial-value problem is The graph of our solution certainly fits the situation that we are modeling ( ). We will learn how to solve initial value problems such as the one described here in . For the time being, we will be satisfied with being able to verify the fact that we have a solution.      f(x) = 1000\/(9*exp(-0.8109 * x) + 1)          Logistic Growth     Modeling a Population with a Threshhold   We can modify the logistic growth model to understand how a population with a minimum threshold grows. The black rhinoceros, once the most numerous of all rhinoceros species, is now critically endangered. The black rhino, native to eastern and southern Africa, was estimated to have a population of about around 1900. Because of hunting, habitat changes, competing species, and most of all illegal poaching, the number of black rhinos today is estimated to be below . If the wild population becomes too low, the animals may not be able to find suitable mates and the black rhino will become extinct. There must be a minimum population for the species to survive. Suppose that this minimum or threshold population for the black rhino is animals and that remaining habitant in Africa will support no more that rhinos. How might we model the current population, of black rhinos?     For what values of is the rhino population increasing? What can be said about the value of for these values of ?    (a) The population is increasing if and .      For what values of is the rhino population decreasing? What can be said about the value of for these values of ?      For what values of is the rhino population in equilibrium? What can be said about the value of for these values of ?      Find a differential equation that models the population of rhinos at time .       A Spring-Mass Model  Sometimes it is necessary to consider the second derivative when modeling a phenomenon. Suppose that we have a mass lying on a flat, frictionless surface and that this mass is attached to one end of a spring with the other end of the spring attached to a wall. We will denote displacement of the spring by . If , then the spring is stretched. If , the spring is compressed. If , then the spring is in a state of equilibrium ( ). If we pull or push on the mass and release it, then the mass will oscillate back and forth across the table.                          \\text{mass}  \\text{mass}  \\text{wall}  \\text{wall}   \\text{Position at rest}    \\text{Position } x(t) \\text{ at time } t        A spring-mass system   We can construct a differential equation that models our oscillating mass. First, we must consider the restorative force on the spring. We will make the assumption that this force depends on the displacement of the spring, . Using Taylor's Theorem from calculus, we can expand to obtain where and . If the displacement is not too large, then will be small for , and we can ignore higher ordered terms. Thus, we can consider the restorative force on the spring to be proportional to displacement of the spring from its equilibrium length, This equation is known as Hooke's Law Hooke's Law . We can test this law experimentally, and it is reasonably accurate if the displacement of the spring is not too large.  By Newton's second law of motion, the force on the mass must be where is the acceleration. Setting the two forces equal, we have a second-order differential equation second-order differential equation , which describes our oscillating mass. The spring-mass system is an example of a harmonic oscillator harmonic oscillator . Harmonic oscillators are useful for modeling simple harmonic motion in mechanics.   Suppose that we have a spring-mass system where and . If the initial velocity of the spring is one unit per second and the initial position is at the equilibrium point, then we have the following initial value problem, Since for both the sine and cosine functions, we might guess that a general solution of our differential equation has the form Noting that and using our initial conditions, we can determine that and or The graph of the position of the mass as a function of time is given in .      f(t)=sin(t)          A undamped spring-mass system    Now let us add a damping force to our system. For example, we might add a dashpot, a mechanical device that resists motion, to our system. Think of a dashpot as that small cylinder that keeps your screen door from slamming shut. The simplest assumption would be to take the damping force of the dashpot to be proportional to the velocity of the mass, . In other words, the harder you try to slam the screen door, the more resistance you will feel. Thus, we have an additional force, acting on our mass, where . Our new equation for the spring-mass system is or where , , and are all positive constants. The equation models a simple damped harmonic oscillator . harmonic oscillator damped    simple damped harmonic oscillator    Suppose that we have a spring-mass system governed by the equation Here we let , , and , We will learn how to solve equations of the form in , but let us assume that the solution is of the form for now. In this case, Since is never zero, it must be the case that or , if is to be a solution to our equation. Thus, we might guess that is a general solution to our equation. If the initial velocity of our mass is one unit per second and the initial position is zero, then we have the initial value problem Using the fact that , our initial conditions give us the following system of linear equations, Thus, and , and our spring-mass system is modeled by the function Notice that the additional damping negates any oscillation in the system. In this case, we say that the harmonic oscillator is over-damped harmonic oscillator over-damped ( ).      f(t)=exp(-t) - exp(-2*t)          An over-damped spring-mass system   Of course, if we have a very strong spring and only add a small amount of damping to our spring-mass system, the mass would continue to oscillate, but the oscillations would become progressively smaller. In other words, our harmonic oscillator would be under-damped . harmonic oscillator under-damped For example, our spring-mass system might be described by the initial value problem It is easy to verify that is a solution to the initial value problem ( ).      f(t)=exp(-t)*sin(7*t)\/7          An under-damped spring-mass system    We will revisit harmonic oscillators and second-order differential equations more fully in .    A Predator-Prey System  Some situations require more than one differential equation to model a particular phenomenon. We might use a system of differential equations to model two interacting species, say where one species preys on the other. The predator-prey model was discovered independently by Lotka (1925) and Volterra (1926). For example, we can model how the population of Canadian lynx ( lynx canadenis ) interacts with a the population of snowshoe hare ( lepus americanis ) (see ).  We have good historical data for the populations of the lynx and snowshoe hare from the Hudson Bay Company, the oldest company in North America. This large Canadian retail company, which owns and operates a large number of retail stores in North America and Europe, including Saks Fifth Avenue, was originally founded in 1670 as a fur trading company. The Hudson Bay Company kept accurate records on the number of lynx pelts that were bought from trappers from 1821 to 1940. The company noticed that the number of pelts varied from year to year and that the number of lynx pelts reached a peak about every ten years . The ten year cycle for lynx can be best understood using a system of differential equations.  The primary prey for the Canadian lynx is the snowshoe hare. We will denote the population of hares by and the population of lynx by , where is the time measured in years. We will make the following assumptions for our predator-prey model.  If no lynx are present, we will assume that the hares reproduce at a rate proportional to their population and are not affected by overcrowding. That is, the hare population will grow exponentially,  Since the lynx prey on the hares, we can argue that the rate at which the hares are consumed by the lynx is proportional to the rate at which the hares and lynx interact. Thus, the equation that predicts the rate of change of the hare population becomes We are thinking of as the number of possible interactions between the lynx and the hare populations.  If there is no food, the lynx population will decline at a rate proportional to itself,  The lynx receive benefit from the hare population. The rate at which lynx are born is proportional to the number of hares that are eaten, and this is proportional to the rate at which the hares and lynx interact. Consequently, the growth rate of the lynx population can be described by  We now have a system of differential equations that describe how the two populations interact, We will learn how to analyze and find solutions of systems of differential equations in subsequent chapters; however, we will give a graphical solution in to the system Our graphical solution is obtained using a numerical algorithm (see and ). Notice that the predator population, , begins to grow and reaches a peak after the prey population, reaches its peak. As the prey population declines, the predator population also declines. Once the predator population is smaller, the prey population has a chance to recover, and the cycle begins again. An excellent account of the actual lynx and snowshoe hare data and model can be found in .      f(t,y) = (0.4*y[0] - 0.01*y[0]*y[1],-0.3*y[1] + 0.005*y[0]*y[1])        H(t)    L(t)        The predator-prey relationship between the lynx and the snowshoe hare     Modeling the HIV-1 Virus   The interaction of the HIV-1 virus with the body's immune system can be modeled by a system of differential equations similar to a predator-prey system. After an individual is infected with the HIV-1 virus, the amount of the virus in the bloodstream rises dramatically and the person will often suffer from flu-like symptoms. However, these symptoms will disappear after a period of weeks or months as the body begins to manufacture antibodies against the virus. Tests have been developed to determine the presence of HIV-1 antibodies. If an individual has such antibodies, then they are said to be HIV-1 positive. Once infected with the HIV-1 virus, it can be years before an HIV-positive patient exhibits the full symptoms of AIDS. The body's immune system fights the HIV-1 virus with white blood cells. The CD4-positive T-helper cell, a specific type of white blood cell, is especially important since it helps other cells fight the virus. However, the HIV-1 virus use the CD4-positive T-helper cells to create more virions, destroying the CD4-positive T-helper cells in the process.  We can develop a system of differential equations to better understand the dynamics of the HIV-1 virus . Let be the population of the HIV-1 virus at time . We will assume that the virus concentration is governed by the following differential equation, The first term, is some function of that determines the rate at which new viral particles are created. The term is the death rate for the virions. If someone discovers a drug that blocks the creation of new HIV-1 virions, then would be zero and the virions would clear the body at the following rate, and , where is the initial viral population.  Now let us consider a model for the concentration of (uninfected) CD4-positive T-helper cells, The constant represents the rate at which T-cells are created from sources in the body, such as the thymus. New CD4-positive T-helper cells can also be created from the proliferation of existing CD4-positive T-helper cells, and the second term in the equation represents the logistic growth of the T-cells, where is the maximum proliferation rate and is the T-cell population density where proliferation ceases. Finally, is the death rate of the T cells.  Like the influenza virus, the HIV-1 virus is an RNA virus. An RNA virus cannot reproduce on its own and must use the DNA from a host cell. To do this, the virus attaches itself to a CD4-positive T-helper cell and injects its RNA into the cell. This way the virus can use the T-cell's DNA to replicate itself using a process called reverse transcription, where a DNA copy of the virus's RNA is made. New virus particles are created, and the T-cell eventually bursts releasing the virions into the body. If we let be the concentration of infected T-cells, we can model this process with the following system of equations, where is the rate of loss of the virus producing T-cells and is the number of virions produced per infected T-cell during its lifetime. The term tells us the rate at which the HIV-1 virus infects T-cells. This is the same idea as modeling how predators interact with prey in a predator-prey model. Thus, our complete model becomes  One class of drugs that HIV infected patients receive are reverse transcriptase (RT) inhibitors. RT inhibitors block the action of reverse transcription and prevent the virus from duplicating. If one could find the perfect RT inhibitor, then and our system becomes Unfortunately, no one has discovered a perfect RT inhibitor, so we will need to modify the system to account for the effectiveness of the RT inhibitor. We can accomplish this by adding an effectiveness factor, , to the term. Our system now becomes If , then the RT inhibitor is completely effective. On the other hand, if , then the RT inhibitor is completely ineffective. We now have a model for how the HIV-1 virus interacts with the immune system. Researchers can use data to estimate the parameters and see exactly what types of solutions are possible.    Some Questions for Thought  In this section we have provided a general notion of what a differential equation is as well as several modeling situations where differential equations are useful; however, we have left many questions unanswered.  Can we find a more rigorous definition of a differential equation?  What is the proper way to define a system of differential equations?  Does a differential equation or a system of differential equations always have a solution?  Are solutions to differential equations unique?  If a unique solution to a differential equation exists, can we find it? If it is not possible to find a precise solution algebraically, can we estimate the solution numerically? If neither is possible, can we still say anything useful about the solution?  Of course, other questions will come to mind as we continue our study of differential equations.    Important Lessons   A differential equation is an equation relating a function to one or more of its derivatives.  An initial value problem is a differential equation where the initial condition , , is specified.  The three principle steps in modeling any phenomenon with differential equations are:  Discovering the differential equation or equations that best describe a specified physical situation.  Finding either exactly or approximately the appropriate solution of the equation or equations.  Interpreting the solution in terms of the phenomenon.   A population that is not affected by overcrowding can be modeled by the differential equation and is said to grow exponentially .  A population that must compete for limited resources can be modeled by the logistic equation , where is the carrying capacity of the population.  Some phenomenon, such as the relationship between a population of predators and a population of prey, are best modeled by systems of differential equations.      Textbooks are designed to be read. If you are student enrolled in a course, you should read each section before class. To help your understanding, answer the section's reading questions as preparation for class. If you communicate your answers to your instructor, it will aid your instructor when preparing for your class.     Explain what a differential equation is using your own words.       What does it mean to be a solution to a differential equation?       Exercises   Baking a Potato (Part 1)   Suppose that you bake a potato in your microwave. When you remove the potato from the microwave oven, you record the temperature every two minutes (see ). If room temperature is 73 degrees, write a differential equation that models the temperature of the potato, , at time .   Temperatures for a Baked Potato    (minutes) (temperature in degrees Fahrenheit)    0 197.2    2 191.6    4 187.1    6 182.8    8 178.7        Verifying Solutions  Use direct substitution to verify that is a solution of the given differential equation in .    ;      ;      ;      ;      ;      ;      ;      ;      Finding Solutions  Many differential equations have solutions of the form , where is some constant. For example, is a solution to the equation . Find all values of such that is a solution to the given equation in .                                  Initial Value Problems  Use direct substitution to verify that is a solution of the given differential equation in . Then use the initial conditions to determine the constants or and .    , ,      , ,      , , ,      , , ,      , , ,      , , ,      Boundary Value Problems  Use direct substitution to verify that is a solution of the given differential equation in . Then use the boundary conditions to determine the constants and (if possible).    , , ,      , , ,      , , ,      , , ,       Consider the differential equation .  Verify that is a solution to this equation.  Sketch solution curves for .  Verify that is a solution to the differential equation in part (a). Can you find a value for such that        Consider the differential equation .  Verify that is a solution to this equation.  Sketch solution curves for and .       The growth of a population of rabbits with unlimited resources and space can be modeled by the exponential growth equation, .  Write a differential equation to model a population of rabbits with unlimited resources, where hunting is allowed at a constant rate .  Write a differential equation to model a population of rabbits with unlimited resources, where hunting is allowed at a rate proportional to the population of rabbits.  Write a differential equation to model a population of rabbits with limited resources, where hunting is allowed at a constant rate .  Write a differential equation to model a population of rabbits with limited resources, where hunting is allowed at a rate proportional to the population of rabbits.       Given the equation , where is a constant and is a continuous function defined on an interval , show that is a solution of this equation, where is any constant and .    Rewriting the differential equation as and using the fact that we see that     Radiocarbon Dating   Carbon 14 is a radioactive isotope of carbon, the most common isotope of carbon being carbon 12. Carbon 14 is created when cosmic ray bombardment changes nitrogen 14 to carbon 14 in the upper atmosphere. The resulting carbon 14 combines with atmospheric oxygen to form radioactive carbon dioxide, which is incorporated into plants by photosynthesis. Animals acquire carbon 14 by eating plants. When an animal or plant dies, it ceases to take on carbon 14, and the amount of isotope in the organism begins to decay into the more common carbon 12. Carbon 14 has a very long half-life, about 5730 years. That is, given a sample of carbon 14, it will take 5730 years for half of the sample to decay to carbon 12. The long half-life is what makes carbon 14 dating very useful in dating objects from antiquity. radio carbon dating   Consider a sample of material that contains atoms of carbon 14 at time . During each unit of time a constant fraction of the radioactive atoms will spontaneously decay into another element or a different isotope of the same element. Thus, the sample behaves like a population with a constant death rate and a zero birth rate. Make use of the model of exponential growth to construct a differential equation that models radioactive decay for carbon 14.  Solve the equation that you proposed in (a) to find an explicit formula for .  The Chauvet-Pont-d'Arc Cave in the Ardèche department of southern France contains some of the best preserved cave paintings in the world. Carbon samples from torch marks and from the paintings themselves, as well as from animal bones and charcoal found on the cave floor, have been used to estimate the age of the cave paintings. If a particular sample taken from the Cauvet Cave contains 2% of the expected carbon 14, what is the approximate age of the sample?       Consider the following predator-prey systems of differential equations   Which equation models the prey population and which equation models the predator population?  How does the prey population grow if there are no predators present?  What happens if there are a lot of prey present?     Think about the limit of the interaction term as the number of prey becomes very large.      An Introduction to Sage  Technology can prove very useful when studying differential equations. Software packages such Maple, Mathematica, and Matlab each have their advantages and disadvantages. We will use Sage , a readily available open source computer algebra system, as our choice of software. Sage can be run on an individual computer or over the Internet on a server. You can even access Sage from your smart phone. For our purposes, Sage cells are embedded into the textbook, so there is nothing to install on your computer. Simply, evaluate the cell. You can even change the preloaded commands in the cell if you wish. For example, let us evaluate the derivative of .   Note that anything following a pound sign # is a comment.  We can use Sage to plot functions. For example, we can plot the function as well as its derivative on the same graph.   We can use Sage to solve differential equations. Suppose that we wish to solve the initial value problem We can use the following commands.   We will provide abundant examples of how to use Sage to solve and analyze differential equations throughout the book, and we encourage the reader to experiment by altering the Sage commands inside the individual Sage cells. If you make a mistake, you can simply reload the webpage and start again.  The reader will find plenty of resources to learn how to use Sage . A good place to start is , , or the UTMOST Sage Cell Repository ( ), which contains several hundred Sage cells that can be excuted right from the repository website. Although we will be using Sage as the technology of choice, much of this book can be read independently of Sage . Finally, we would like to emphasize once again that the reader who chooses not to use some sort of technology will be at a disadvantage.   Sage Exercises    In the Sage cell below enter 2 + 2 and then evaluate the cell. Your answer should be 4 of course. Next try entering 2^1000 . You should see a very large number.       "
},
{
  "id": "firstlook01-2",
  "level": "2",
  "url": "firstlook01.html#firstlook01-2",
  "type": "Objectives",
  "number": "1.1",
  "title": "",
  "body": "  To understand that a differential equation is an equation relating a function to one or more of its derivatives and that an initial value problem is a differential equation where the initial condition , , is specified.  To understand and be able to apply the three principle steps in modeling any phenomenon with differential equations.  Discovering the differential equation or equations that best describe a specified physical situation.  Finding either exactly or approximately the appropriate solution of the equation or equations.  Interpreting the solution in terms of the phenomenon.   To understand and be able to apply the differential equations that model exponential growth and logistic growth .  To understand that some phenomenon are best modeled by higher order differential equations or systems of differential equations.   "
},
{
  "id": "firstlook01-3-1",
  "level": "2",
  "url": "firstlook01.html#firstlook01-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "differential equation "
},
{
  "id": "firstlook01-subsection-exponential-growth-3",
  "level": "2",
  "url": "firstlook01.html#firstlook01-subsection-exponential-growth-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "initial value problem IVP initial condition exponentially "
},
{
  "id": "firstlook01-subsection-exponential-growth-5",
  "level": "2",
  "url": "firstlook01.html#firstlook01-subsection-exponential-growth-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "general solution particular solution integral curves solution curves "
},
{
  "id": "firstlook01-figure-integral-curves",
  "level": "2",
  "url": "firstlook01.html#firstlook01-figure-integral-curves",
  "type": "Figure",
  "number": "1.1.1",
  "title": "",
  "body": "    f1(x) = exp(x)\/10  f2(x) = exp(x)\/20  f3(x) = exp(x)\/30  f4(x) = -exp(x)\/10  f5(x) = -exp(x)\/20  f6(x) = -exp(x)\/30             x(t) = Ce^{kt}        Integral curves  "
},
{
  "id": "firstlook01-subsection-exponential-growth-9",
  "level": "2",
  "url": "firstlook01.html#firstlook01-subsection-exponential-growth-9",
  "type": "Activity",
  "number": "1.1.1",
  "title": "Verifying Solutions.",
  "body": " Verifying Solutions   Use direct substitution to verify that is a solution of the given differential equation.     ;      ;      ; ,      ;      ; ,    "
},
{
  "id": "firstlook01-subsection-logistic-growth-2",
  "level": "2",
  "url": "firstlook01.html#firstlook01-subsection-logistic-growth-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "logistic equation "
},
{
  "id": "firstlook01-subsection-logistic-growth-3",
  "level": "2",
  "url": "firstlook01.html#firstlook01-subsection-logistic-growth-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "carrying capacity logistic population model "
},
{
  "id": "firstlook01-example-logistic-growth",
  "level": "2",
  "url": "firstlook01.html#firstlook01-example-logistic-growth",
  "type": "Example",
  "number": "1.1.2",
  "title": "",
  "body": " Suppose we have a pond that will support 1000 fish, and the initial population is 100 fish. In order to determine the number of fish in the lake at any time , we must find a solution to the initial value problem It is easy to verify that is the solution to our initial value problem. Certainly , and if we differentiate , we will obtain the righthand side of the differential equation, In addition, if we know that the population is 200 fish after one year, then and we can determine that Consequently, the solution to our intial-value problem is The graph of our solution certainly fits the situation that we are modeling ( ). We will learn how to solve initial value problems such as the one described here in . For the time being, we will be satisfied with being able to verify the fact that we have a solution.      f(x) = 1000\/(9*exp(-0.8109 * x) + 1)          Logistic Growth   "
},
{
  "id": "firstlook01-subsection-logistic-growth-6",
  "level": "2",
  "url": "firstlook01.html#firstlook01-subsection-logistic-growth-6",
  "type": "Activity",
  "number": "1.1.2",
  "title": "Modeling a Population with a Threshhold.",
  "body": " Modeling a Population with a Threshhold   We can modify the logistic growth model to understand how a population with a minimum threshold grows. The black rhinoceros, once the most numerous of all rhinoceros species, is now critically endangered. The black rhino, native to eastern and southern Africa, was estimated to have a population of about around 1900. Because of hunting, habitat changes, competing species, and most of all illegal poaching, the number of black rhinos today is estimated to be below . If the wild population becomes too low, the animals may not be able to find suitable mates and the black rhino will become extinct. There must be a minimum population for the species to survive. Suppose that this minimum or threshold population for the black rhino is animals and that remaining habitant in Africa will support no more that rhinos. How might we model the current population, of black rhinos?     For what values of is the rhino population increasing? What can be said about the value of for these values of ?    (a) The population is increasing if and .      For what values of is the rhino population decreasing? What can be said about the value of for these values of ?      For what values of is the rhino population in equilibrium? What can be said about the value of for these values of ?      Find a differential equation that models the population of rhinos at time .    "
},
{
  "id": "firstlook01-figure-spring-mass",
  "level": "2",
  "url": "firstlook01.html#firstlook01-figure-spring-mass",
  "type": "Figure",
  "number": "1.1.4",
  "title": "",
  "body": "                        \\text{mass}  \\text{mass}  \\text{wall}  \\text{wall}   \\text{Position at rest}    \\text{Position } x(t) \\text{ at time } t        A spring-mass system  "
},
{
  "id": "firstlook01-subsection-spring-mass-4",
  "level": "2",
  "url": "firstlook01.html#firstlook01-subsection-spring-mass-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Hooke's Law "
},
{
  "id": "firstlook01-subsection-spring-mass-5",
  "level": "2",
  "url": "firstlook01.html#firstlook01-subsection-spring-mass-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "second-order differential equation harmonic oscillator "
},
{
  "id": "firstlook01-example-harmonic-oscillator",
  "level": "2",
  "url": "firstlook01.html#firstlook01-example-harmonic-oscillator",
  "type": "Example",
  "number": "1.1.5",
  "title": "",
  "body": " Suppose that we have a spring-mass system where and . If the initial velocity of the spring is one unit per second and the initial position is at the equilibrium point, then we have the following initial value problem, Since for both the sine and cosine functions, we might guess that a general solution of our differential equation has the form Noting that and using our initial conditions, we can determine that and or The graph of the position of the mass as a function of time is given in .      f(t)=sin(t)          A undamped spring-mass system   "
},
{
  "id": "firstlook01-subsection-spring-mass-7",
  "level": "2",
  "url": "firstlook01.html#firstlook01-subsection-spring-mass-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "simple damped harmonic oscillator "
},
{
  "id": "firstlook01-example-damped-harmonic-oscillator",
  "level": "2",
  "url": "firstlook01.html#firstlook01-example-damped-harmonic-oscillator",
  "type": "Example",
  "number": "1.1.7",
  "title": "",
  "body": " Suppose that we have a spring-mass system governed by the equation Here we let , , and , We will learn how to solve equations of the form in , but let us assume that the solution is of the form for now. In this case, Since is never zero, it must be the case that or , if is to be a solution to our equation. Thus, we might guess that is a general solution to our equation. If the initial velocity of our mass is one unit per second and the initial position is zero, then we have the initial value problem Using the fact that , our initial conditions give us the following system of linear equations, Thus, and , and our spring-mass system is modeled by the function Notice that the additional damping negates any oscillation in the system. In this case, we say that the harmonic oscillator is over-damped harmonic oscillator over-damped ( ).      f(t)=exp(-t) - exp(-2*t)          An over-damped spring-mass system   Of course, if we have a very strong spring and only add a small amount of damping to our spring-mass system, the mass would continue to oscillate, but the oscillations would become progressively smaller. In other words, our harmonic oscillator would be under-damped . harmonic oscillator under-damped For example, our spring-mass system might be described by the initial value problem It is easy to verify that is a solution to the initial value problem ( ).      f(t)=exp(-t)*sin(7*t)\/7          An under-damped spring-mass system   "
},
{
  "id": "firstlook01-subsection-predator-prey-4",
  "level": "2",
  "url": "firstlook01.html#firstlook01-subsection-predator-prey-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "system "
},
{
  "id": "firstlook01-figure-lynx-snowshoe-hare",
  "level": "2",
  "url": "firstlook01.html#firstlook01-figure-lynx-snowshoe-hare",
  "type": "Figure",
  "number": "1.1.10",
  "title": "",
  "body": "    f(t,y) = (0.4*y[0] - 0.01*y[0]*y[1],-0.3*y[1] + 0.005*y[0]*y[1])        H(t)    L(t)        The predator-prey relationship between the lynx and the snowshoe hare  "
},
{
  "id": "firstlook01-subsection-important-lessons-2",
  "level": "2",
  "url": "firstlook01.html#firstlook01-subsection-important-lessons-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "differential equation initial value problem initial condition exponentially logistic equation "
},
{
  "id": "rq-firstlook01-explain-de",
  "level": "2",
  "url": "firstlook01.html#rq-firstlook01-explain-de",
  "type": "Reading Question",
  "number": "1.1.8.1",
  "title": "",
  "body": "  Explain what a differential equation is using your own words.    "
},
{
  "id": "rq-firstlook01-explain-solution",
  "level": "2",
  "url": "firstlook01.html#rq-firstlook01-explain-solution",
  "type": "Reading Question",
  "number": "1.1.8.2",
  "title": "",
  "body": "  What does it mean to be a solution to a differential equation?    "
},
{
  "id": "firstlook01-exercise-baked-potato",
  "level": "2",
  "url": "firstlook01.html#firstlook01-exercise-baked-potato",
  "type": "Exercise",
  "number": "1.1.9.1",
  "title": "Baking a Potato (Part 1).",
  "body": " Baking a Potato (Part 1)   Suppose that you bake a potato in your microwave. When you remove the potato from the microwave oven, you record the temperature every two minutes (see ). If room temperature is 73 degrees, write a differential equation that models the temperature of the potato, , at time .   Temperatures for a Baked Potato    (minutes) (temperature in degrees Fahrenheit)    0 197.2    2 191.6    4 187.1    6 182.8    8 178.7      "
},
{
  "id": "firstlook01-exercise-verify-solution-1",
  "level": "2",
  "url": "firstlook01.html#firstlook01-exercise-verify-solution-1",
  "type": "Exercise",
  "number": "1.1.9.2",
  "title": "",
  "body": "  ;   "
},
{
  "id": "firstlook01-exercise-verify-solution-2",
  "level": "2",
  "url": "firstlook01.html#firstlook01-exercise-verify-solution-2",
  "type": "Exercise",
  "number": "1.1.9.3",
  "title": "",
  "body": "  ;   "
},
{
  "id": "firstlook01-exercise-verify-solution-3",
  "level": "2",
  "url": "firstlook01.html#firstlook01-exercise-verify-solution-3",
  "type": "Exercise",
  "number": "1.1.9.4",
  "title": "",
  "body": "  ;   "
},
{
  "id": "firstlook01-exercise-verify-solution-4",
  "level": "2",
  "url": "firstlook01.html#firstlook01-exercise-verify-solution-4",
  "type": "Exercise",
  "number": "1.1.9.5",
  "title": "",
  "body": "  ;   "
},
{
  "id": "firstlook01-exercise-verify-solution-5",
  "level": "2",
  "url": "firstlook01.html#firstlook01-exercise-verify-solution-5",
  "type": "Exercise",
  "number": "1.1.9.6",
  "title": "",
  "body": "  ;   "
},
{
  "id": "firstlook01-exercise-verify-solution-6",
  "level": "2",
  "url": "firstlook01.html#firstlook01-exercise-verify-solution-6",
  "type": "Exercise",
  "number": "1.1.9.7",
  "title": "",
  "body": "  ;   "
},
{
  "id": "firstlook01-exercise-verify-solution-7",
  "level": "2",
  "url": "firstlook01.html#firstlook01-exercise-verify-solution-7",
  "type": "Exercise",
  "number": "1.1.9.8",
  "title": "",
  "body": "  ;   "
},
{
  "id": "firstlook01-exercise-verify-solution-8",
  "level": "2",
  "url": "firstlook01.html#firstlook01-exercise-verify-solution-8",
  "type": "Exercise",
  "number": "1.1.9.9",
  "title": "",
  "body": "  ;   "
},
{
  "id": "firstlook01-exercise-find-solution-1",
  "level": "2",
  "url": "firstlook01.html#firstlook01-exercise-find-solution-1",
  "type": "Exercise",
  "number": "1.1.9.10",
  "title": "",
  "body": "    "
},
{
  "id": "firstlook01-exercise-find-solution-2",
  "level": "2",
  "url": "firstlook01.html#firstlook01-exercise-find-solution-2",
  "type": "Exercise",
  "number": "1.1.9.11",
  "title": "",
  "body": "    "
},
{
  "id": "firstlook01-exercise-find-solution-3",
  "level": "2",
  "url": "firstlook01.html#firstlook01-exercise-find-solution-3",
  "type": "Exercise",
  "number": "1.1.9.12",
  "title": "",
  "body": "    "
},
{
  "id": "firstlook01-exercise-find-solution-4",
  "level": "2",
  "url": "firstlook01.html#firstlook01-exercise-find-solution-4",
  "type": "Exercise",
  "number": "1.1.9.13",
  "title": "",
  "body": "    "
},
{
  "id": "firstlook01-exercise-find-solution-5",
  "level": "2",
  "url": "firstlook01.html#firstlook01-exercise-find-solution-5",
  "type": "Exercise",
  "number": "1.1.9.14",
  "title": "",
  "body": "    "
},
{
  "id": "firstlook01-exercise-find-solution-6",
  "level": "2",
  "url": "firstlook01.html#firstlook01-exercise-find-solution-6",
  "type": "Exercise",
  "number": "1.1.9.15",
  "title": "",
  "body": "    "
},
{
  "id": "firstlook01-exercise-ivp-1",
  "level": "2",
  "url": "firstlook01.html#firstlook01-exercise-ivp-1",
  "type": "Exercise",
  "number": "1.1.9.16",
  "title": "",
  "body": "  , ,   "
},
{
  "id": "firstlook01-exercise-ivp-2",
  "level": "2",
  "url": "firstlook01.html#firstlook01-exercise-ivp-2",
  "type": "Exercise",
  "number": "1.1.9.17",
  "title": "",
  "body": "  , ,   "
},
{
  "id": "firstlook01-exercise-ivp-3",
  "level": "2",
  "url": "firstlook01.html#firstlook01-exercise-ivp-3",
  "type": "Exercise",
  "number": "1.1.9.18",
  "title": "",
  "body": "  , , ,   "
},
{
  "id": "firstlook01-exercise-ivp-4",
  "level": "2",
  "url": "firstlook01.html#firstlook01-exercise-ivp-4",
  "type": "Exercise",
  "number": "1.1.9.19",
  "title": "",
  "body": "  , , ,   "
},
{
  "id": "firstlook01-exercise-ivp-5",
  "level": "2",
  "url": "firstlook01.html#firstlook01-exercise-ivp-5",
  "type": "Exercise",
  "number": "1.1.9.20",
  "title": "",
  "body": "  , , ,   "
},
{
  "id": "firstlook01-exercise-ivp-6",
  "level": "2",
  "url": "firstlook01.html#firstlook01-exercise-ivp-6",
  "type": "Exercise",
  "number": "1.1.9.21",
  "title": "",
  "body": "  , , ,   "
},
{
  "id": "firstlook01-exercise-bv-1",
  "level": "2",
  "url": "firstlook01.html#firstlook01-exercise-bv-1",
  "type": "Exercise",
  "number": "1.1.9.22",
  "title": "",
  "body": "  , , ,   "
},
{
  "id": "firstlook01-exercise-bv-2",
  "level": "2",
  "url": "firstlook01.html#firstlook01-exercise-bv-2",
  "type": "Exercise",
  "number": "1.1.9.23",
  "title": "",
  "body": "  , , ,   "
},
{
  "id": "firstlook01-exercise-bv-3",
  "level": "2",
  "url": "firstlook01.html#firstlook01-exercise-bv-3",
  "type": "Exercise",
  "number": "1.1.9.24",
  "title": "",
  "body": "  , , ,   "
},
{
  "id": "firstlook01-exercise-bv-4",
  "level": "2",
  "url": "firstlook01.html#firstlook01-exercise-bv-4",
  "type": "Exercise",
  "number": "1.1.9.25",
  "title": "",
  "body": "  , , ,   "
},
{
  "id": "firstlook01-exercise-yprime-yx2-y",
  "level": "2",
  "url": "firstlook01.html#firstlook01-exercise-yprime-yx2-y",
  "type": "Exercise",
  "number": "1.1.9.26",
  "title": "",
  "body": "  Consider the differential equation .  Verify that is a solution to this equation.  Sketch solution curves for .  Verify that is a solution to the differential equation in part (a). Can you find a value for such that     "
},
{
  "id": "firstlook01-exercise-y-double-prime-plus-9y",
  "level": "2",
  "url": "firstlook01.html#firstlook01-exercise-y-double-prime-plus-9y",
  "type": "Exercise",
  "number": "1.1.9.27",
  "title": "",
  "body": "  Consider the differential equation .  Verify that is a solution to this equation.  Sketch solution curves for and .    "
},
{
  "id": "firstlook01-exercise-rabbit-population",
  "level": "2",
  "url": "firstlook01.html#firstlook01-exercise-rabbit-population",
  "type": "Exercise",
  "number": "1.1.9.28",
  "title": "",
  "body": "  The growth of a population of rabbits with unlimited resources and space can be modeled by the exponential growth equation, .  Write a differential equation to model a population of rabbits with unlimited resources, where hunting is allowed at a constant rate .  Write a differential equation to model a population of rabbits with unlimited resources, where hunting is allowed at a rate proportional to the population of rabbits.  Write a differential equation to model a population of rabbits with limited resources, where hunting is allowed at a constant rate .  Write a differential equation to model a population of rabbits with limited resources, where hunting is allowed at a rate proportional to the population of rabbits.    "
},
{
  "id": "firstlook01-exercise-first-order-linear",
  "level": "2",
  "url": "firstlook01.html#firstlook01-exercise-first-order-linear",
  "type": "Exercise",
  "number": "1.1.9.29",
  "title": "",
  "body": "  Given the equation , where is a constant and is a continuous function defined on an interval , show that is a solution of this equation, where is any constant and .    Rewriting the differential equation as and using the fact that we see that   "
},
{
  "id": "firstlook01-exercise-radio-carbon-dating",
  "level": "2",
  "url": "firstlook01.html#firstlook01-exercise-radio-carbon-dating",
  "type": "Exercise",
  "number": "1.1.9.30",
  "title": "Radiocarbon Dating.",
  "body": " Radiocarbon Dating   Carbon 14 is a radioactive isotope of carbon, the most common isotope of carbon being carbon 12. Carbon 14 is created when cosmic ray bombardment changes nitrogen 14 to carbon 14 in the upper atmosphere. The resulting carbon 14 combines with atmospheric oxygen to form radioactive carbon dioxide, which is incorporated into plants by photosynthesis. Animals acquire carbon 14 by eating plants. When an animal or plant dies, it ceases to take on carbon 14, and the amount of isotope in the organism begins to decay into the more common carbon 12. Carbon 14 has a very long half-life, about 5730 years. That is, given a sample of carbon 14, it will take 5730 years for half of the sample to decay to carbon 12. The long half-life is what makes carbon 14 dating very useful in dating objects from antiquity. radio carbon dating   Consider a sample of material that contains atoms of carbon 14 at time . During each unit of time a constant fraction of the radioactive atoms will spontaneously decay into another element or a different isotope of the same element. Thus, the sample behaves like a population with a constant death rate and a zero birth rate. Make use of the model of exponential growth to construct a differential equation that models radioactive decay for carbon 14.  Solve the equation that you proposed in (a) to find an explicit formula for .  The Chauvet-Pont-d'Arc Cave in the Ardèche department of southern France contains some of the best preserved cave paintings in the world. Carbon samples from torch marks and from the paintings themselves, as well as from animal bones and charcoal found on the cave floor, have been used to estimate the age of the cave paintings. If a particular sample taken from the Cauvet Cave contains 2% of the expected carbon 14, what is the approximate age of the sample?    "
},
{
  "id": "firstlook01-exercise-predator-prey",
  "level": "2",
  "url": "firstlook01.html#firstlook01-exercise-predator-prey",
  "type": "Exercise",
  "number": "1.1.9.31",
  "title": "",
  "body": "  Consider the following predator-prey systems of differential equations   Which equation models the prey population and which equation models the predator population?  How does the prey population grow if there are no predators present?  What happens if there are a lot of prey present?     Think about the limit of the interaction term as the number of prey becomes very large.   "
},
{
  "id": "firstlook01-sage-exercise-evaluate",
  "level": "2",
  "url": "firstlook01.html#firstlook01-sage-exercise-evaluate",
  "type": "Exercise",
  "number": "1.1.10.1",
  "title": "",
  "body": "  In the Sage cell below enter 2 + 2 and then evaluate the cell. Your answer should be 4 of course. Next try entering 2^1000 . You should see a very large number.    "
},
{
  "id": "firstlook02",
  "level": "1",
  "url": "firstlook02.html",
  "type": "Section",
  "number": "1.2",
  "title": "Separable Differential Equations",
  "body": " Separable Differential Equations    To understand that a differential equation of order  is an equation that can be put in the form where is a function of variables, and to understand that a solution to the equation on an interval is a function such that the first derivatives of are defined on , and  To understand that a first-order differential equation is an equation that can be written in the form  To understand that a differential equation is separable if it can be written in the form and by rewriting the equation in the form the equation can be solved by integrating both sides.     We will define a differential equation differential equation of order differential equation order  to be an equation that can be put in the form where is a function of variables. A solution differential equation solution to this equation on an interval is a function such that the first derivatives of are defined on , and We will concentrate on first-order differential equations in this chapter. That is, we will only consider equations of the form    Separable Differential Equations  In general, we cannot find such a formula for an arbitrary first-order differential equation. We can, however, solve a differential equation if we can write the equation in the form Such equations are called separable differential equation separable . We can solve separable equations by integrating the first term with respect to and the second term with respect to . Notice that we have used the variables and in place of and . This really is of no consequence as long as we are careful to keep track of the dependent and independent variables in the differential equation.    separable differential equation    Suppose that we wish to solve the initial value problem We can rewrite this equation in the form or in the alternate form Integrating both sides of the equation, we have where is an arbitrary constant. Using the initial condition, to find , we see that Thus, the solution to our initial value problem can be given implicitly by . In this example, we can actually write down an explicit solution that is defined everywhere, The Sage commands for solving our initial value problem are below.    If we ask Sage to solve a differential equation that it cannot solve analytically, the computation will return an error. Sage will not solve the initial value problem    Consider the initial value problem First, we separate the variables of the equations and write Integrating both sides of the equation, we have Using the initial condition, , we can determine the value of , Notice that the solution does not make sense for all values of . In fact, the solution is only defined on the interval , if we require that our solution be continuous. Let us see what Sage has to say.   Sage does return a solution even if it looks a bit different than the one that we arrived at above. Notice that we have an imaginary term in our solution, where . We will examine the role of complex numbers and how useful they are in the study of ordinary differential equations in a later chapter, but for the moment complex numbers will just muddy the situation.    The initial value problem in is a good example of a separable differential equation, Using partial fractions, we can rewrite this equation as Integrating both sides of , we obtain Taking the exponential of both sides yields Since is an arbitrary constant, we know that is an arbitrary positive constant, which we will also call . So we can rewrite this last equation as Solving for yields Using our initial condition , we can determine that .    Solving Separable Differential Equations   Solve each of the following differential equations using the separation of variables technique.                    ,      ,       Newton's Law of Cooling  Separable equations arise in a wide range of application problems. One does not have to watch too many crime dramas to realize that the time of death of a murder victim is an important question in many criminal investigations. How does a forensic scientist or a medical examiner determine the time of death? Human beings have a temperature of F. If the surrounding temperature is cooler, then the body will cool down after death. Eventually, the temperature of the body will match the temperature of the environment. We should not expect the body to cool at a constant rate either. Think of how a hot cup of coffee or tea cools. The liquid will cool quite quickly during the first few minutes but will remain relatively warm for quite a long period.  The answer to our forensic question can be found by using Newton's law of cooling Newton's law of cooling , which tells us that the rate of change of the temperature of an object is proportional to the difference between the temperature of the object and the temperature of the surrounding medium. Newton's law of cooling can be easily stated as a differential equation, where is the temperature of the object, is the temperature of the surrounding medium, and is the proportionality constant.  Suppose that the temperature of the surrounding environment is F, and we know from experience that a body under these conditions cools off approximately F during the first hour after death. In order to determine a formula for the time of death, we must solve the initial value problem where . If we rewrite the equation as we see that this equation is separable. Integrating both sides of the last equation, we obtain . Since we are assuming that , we can write instead of . Thus, we have Letting , the solution becomes The initial condition, , tells us that . Thus, Since we can determine the constant to be and The graph of the seems appropriate to our model ( ).      f(x) = 28.6 * exp(-0.0725 * x) + 70            Newton's law of cooling   Let us solve our differential equation using Sage .   We can use Sage to plot our solution.    Coffee Temperature   The brewing temperature of the water used is very important. It should be between F and F. The closer to F the better. Boiling water ( F) should never be used, as it will burn the coffee. Water that is less than F will not extract properly. On the other hand, coffee that has a temperature of F is too hot to drink. Google the famous MacDonald's lawsuit. Coffee is best when it is served at a temperature of F to F (the Goldilocks range).     Suppose coffee is initially brewed at F. If room temperature is F, set up an initial value problem to model the temperature of the coffee at time , where is the time in minutes after brewing has finished.      Solve the initial value problem from      If the temperature of the coffee drops from F to F in the first two minutes after brewing, how long before the coffee reaches a temperature of F?       Mixing Problems  There is a large class of problems in modeling known as mixing problems mixing problems . These problems refer to situations where two or more substances are mixed together in a container or containers. For example, we might wish to model how chemicals are mixed together in a refinery, how pollutants are mixed together in a pond or a lake, how ingredients are mixed together when brewing beer, or even how various greenhouse gases mix together across different layers of the atmosphere.   Suppose that we have a large tank containing 1000 gallons of pure water and that water containing 0.5 pounds of salt per gallon flows into the tank at a rate of 10 gallons per minute. If the tank is also draining at a rate of 10 gallons per minute, the water level in the tank will remain constant. We will assume that the water in the tank is constantly stirred so that the mixture of salt and water is uniform in the tank.  We can model the amount of salt in the tank using differential equations. If is the amount of salt in the tank at time , then the rate at which the salt is changing in the tank is the difference between the rate at which salt is flowing into the tank and the rate at which it is leaving the tank, or Of course, the salt flows into the tank at the rate of pounds of salt per minute. However, the rate at which the salt leaves the tank depends on , the amount salt in the tank at time . At time , there is pounds of salt in one gallon. Therefore, salt flows out of the tank at a rate of pounds per minute. Equation now becomes This equation is separable, Integrating both sides of the equation, we have or Consequently, where . From our initial condition, we can quickly determine that and models the amount of salt in the tank at time . Notice that as , as expected.    A Brewery Problem   The vast majority of beers from around the world have alcohol contents of 4 to 6 percent alcohol by volume (for example, Heineken Lager Beer has a 5 percent alcohol content). Suppose a local brewery has produced two beers with different alcohol contents, one 4 percent and one 7 percent. The master brewer would like to add some of the 7 percent beer to the 4 percent beer to obtain a beer with 5 percent alcohol.     A vat contains 500 gallons of 4% alcohol (by volume). Beer with 7% alcohol is pumped into the tank at a rate of 5 gallons per minute. Beer is also pumped out of the vat at a rate of 5 gallons per minute, so there is always 500 gallons in the tank. Set up an initial value problem to model the percentage of alcohol in the vat at time , where is the elapsed time in minutes.      Solve the initial value problem from      What is the percentage of alcohol in the vat after one hour?      At what time will the beer reach 5% alcohol?       A Retirement Model  Differential equations have many applications in economics and finance. For example, Dr. J., a college professor, wisely started saving for his retirement as soon as he entered the workforce, and he now has $500,000 in a retirement account earning an interest of 5% compounded continuously. retirement model The initial value problem, provides a nice model of Dr. J.'s investment, where is the amount in thousands of dollars in the fund at time . The solution to our initial value problem is If Dr. J. plans to retire in 10 years, he can expect a nest egg of or about $824,360.  Of course, Dr. J. still plans to make contributions to his retirement fund during his next ten years of employment. His annual contribution will be $5,000, which his employer will generously match. If we assume that these contributions will spread out evenly over the course of the year, we can incorporate this information into our original initial value problem, This differential equation is separable, so we have Integrating both sides of this equation, we have where is an arbitrary constant. Since , we have This last equation is equivalent to If we let and solve for , we obtain Using our initial condition, we have . Thus, the solution that we seek is Dr. J.'s nest egg is now or about $954,105.  Once Dr. J. retires, he will need to begin withdrawing money from his account. He estimates that he will need to withdraw $60,000 a year for living expenses if he wishes to travel and enjoy his golden years. Of course, whatever remains in his account at any given time will still collect interest. We describe J.'s retirement situation with the initial value problem, If , then Hence, the rate of withdrawal exceeds the rate at which Dr. J.'s account is earning interest. Eventually, Dr. J.'s retirement fund will disappear. This may pose a problem, if Dr. J. plans to retire early and live a long life.  Again, the differential equation is separable, and we have Intergrating both sides of this equation yields Since , and Consequently, or where . Now, we can apply our initial condition to determine that . Therefore, describes how much money Dr. J.has after he retires ( ).  If Dr. J. wants to know how long his retirement fund will last, he must solve the equation In this case, This means that if Dr. J. retires in 10 years at the early age of 55, he can expect his retirement to last into his mid 90s.   A Sports Contract   In December 2023, Shohei Ohtani announced he was signing with the Los Angeles Dodgers. The contract terms were staggering: 10 years and $700 million. To date, this was the largest contract in sports history, eclipsing Lionel Messi's $673 million contract with FC Barcelona. Ohtani will receive $20 million of his $700 million contract with the Los Angeles Dodgers over the next 10 years or $2 million each year. The $680 million remaining will be paid out at $68 million a year over the following 10 years. Clearly, the Los Angeles Dodgers do not have to pay out the entire $700 million at the signing of the contract.     How much is Otani's contract worth in December 2023? You may assume that the interest rate over the next 20 years will be 6% (adjusted for inflation).       Some Theory  We now give a theoretical basis for solving first-order separable differential equations. A differential equation is called separable differential equation separable if it can be written in the form We now will prove that such an equation can be solved by integrating each term. If then we can rewrite equation as Applying the chain rule to the second term, we obtain Hence, equation now becomes Integrating, we obtain where is any arbitrary constant.  Now suppose that is an initial condition for Then . By the Fundamental Theorem of Calculus Consequently, we can replace equation with the integral equation integral equation  In other words, we simply need to integrate each term to solve the differential equation.    What Can Go Wrong   It is not always possible to explicitly solve a separable differential equation. Consider the equation This equation can be rewritten in the form Integrating both sides of the equation, we have However, we have no method of solving this last equation explicitly for .    Another difficulty arises if we consider the equation This equation is separable since we can rewrite it in the form Although the Fundamental Theorem of Calculus guarantees that every continuous function has an antiderivative, we cannot find an antiderivative for the function in terms of elementary functions. Thus, we are forced to write our solution as    Even if we have a separable differential equation, we are not guaranteed a unique solution. Consider the initial value problem with and . Separating the variables, Thus, or If , the initial condition is satisfied and is a solution for . However, we can find at least two additional solutions for : In we will learn sufficient conditions for a first-order initial value problem to have a unique solution.    Suppose that with . Separating the variables, we see that or Therefore, a continuous solution also exists on if . In the case that , the solution is and a continuous solution exists on .     Important Lessons   A differential equation of order  is an equation that can be put in the form where is a function of variables. A solution to the equation on an interval is a function such that the first derivatives of are defined on , and  In , we study first-order differential equations that can be written in the form  A differential equation is separable if it can be written in the form In this case we can rewrite the equation in the form or and solve by integrating both sides.       Does a differential equation always have a solution? Explain.       Is the differential equation separable? Why or why not?       Exercises   Baking a Potato (Part 2)   Solve the differential equation that you used to model the temperature of a baked potato in .     Finding General Solutions  Find the general solution for each equation in .                                                      Solving Initial Value Problems  Solve the initial value problems in .    ,      ,      ,      ,      ,      ,      ,      ,      ,      ,       Solve the initial value problems in using Sage.      Homogeneous Equations   A first-order differential equation, , is homogeneous if .  Show that the equation is homogeneous.  Let and show that the equation in part (a) can be written as Use the fact that this new equation is separable to solve for .  Show that any homogeneous equation can be transformed into a separable differential equation by making the substitution .  A function is said to homogeneous of degree if for . Show that differential equation where and are both homogeneous of degree , can be transformed into a separable differential equation using the substitution .  Solve the differential equation  Solve the differential equation       Mr. Ratchett, an elderly American, was found murdered in his train compartment on the Orient Express at 7 AM. When his body was discovered, the famous detective Hercule Poirot noted that Ratchett had a body temperature of 28 degrees. The body had cooled to a temperature of 27 degrees one hour later. If the normal temperature of a human being is 37 degrees and the air temperature in the train is 22 degrees, estimate the time of Ratchett's death using Newton's Law of Cooling.      You are starting a new position, and your employer has a generous retirement plan. If you put $500 a month into a 401(k) plan, your employer will match your contributions.  Assume that you are 25 years old and plan to retire at age 65, how large can you expect your 401(k) pension to be when you retire? Assume that your 401(k) plan will collect interest at a rate of 5%.  If you begin withdrawing $60,000 every year at age 65, how long will your retirement fund last?        Sage Quick Start Guide to Solving Ordinary Differential Equations  Sage has powerful algorithms for finding exact and numerical solutions of differential equations. In addition, we can plot solutions and direction fields. Although some differential equations have an exact solution and can be solved using analytic techniques with calculus, many differential equations can only be solved using numerical techniques. This should not be too surprising if we consider how we solve polynomials. It is quite easy to find the roots of any equation of the form by either factoring or using the quadratic equation, but solving an equation such as is a much more difficult problem. Unlike the situation for quadratic equations, there does not exist a general formula for solving seventh degree equations. We can even encounter difficulties when using a numerical method such as the Newton-Raphson algorithm.  In general, Sage needs three things to solve a differential equation:  An abstract function  A differential equation  A Sage command to solve the equation.  Suppose we wish to solve the equation We can use the following sequence of Sage commands.   The first command defines the abstract function. The second describes the actual differential equation. Finally, we use the Sage command desolve to find the actual solution. Try replacing the solution.show() command with solution or latex(solution) .  We can also specify an initial condition for our differential equation, say .   There are many other commands and packages to solve ordinary differential equations using Sage. For more information, see . An empty Sage cell is below for practice and exploration.    "
},
{
  "id": "firstlook02-2",
  "level": "2",
  "url": "firstlook02.html#firstlook02-2",
  "type": "Objectives",
  "number": "1.2",
  "title": "",
  "body": "  To understand that a differential equation of order  is an equation that can be put in the form where is a function of variables, and to understand that a solution to the equation on an interval is a function such that the first derivatives of are defined on , and  To understand that a first-order differential equation is an equation that can be written in the form  To understand that a differential equation is separable if it can be written in the form and by rewriting the equation in the form the equation can be solved by integrating both sides.   "
},
{
  "id": "firstlook02-3-1",
  "level": "2",
  "url": "firstlook02.html#firstlook02-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "differential equation order solution "
},
{
  "id": "firstlook02-subsection-separable-de-2",
  "level": "2",
  "url": "firstlook02.html#firstlook02-subsection-separable-de-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "separable "
},
{
  "id": "firstlook02-subsection-separable-de-4",
  "level": "2",
  "url": "firstlook02.html#firstlook02-subsection-separable-de-4",
  "type": "Example",
  "number": "1.2.1",
  "title": "",
  "body": " Suppose that we wish to solve the initial value problem We can rewrite this equation in the form or in the alternate form Integrating both sides of the equation, we have where is an arbitrary constant. Using the initial condition, to find , we see that Thus, the solution to our initial value problem can be given implicitly by . In this example, we can actually write down an explicit solution that is defined everywhere, The Sage commands for solving our initial value problem are below.   "
},
{
  "id": "firstlook02-subsection-separable-de-7",
  "level": "2",
  "url": "firstlook02.html#firstlook02-subsection-separable-de-7",
  "type": "Example",
  "number": "1.2.2",
  "title": "",
  "body": " Consider the initial value problem First, we separate the variables of the equations and write Integrating both sides of the equation, we have Using the initial condition, , we can determine the value of , Notice that the solution does not make sense for all values of . In fact, the solution is only defined on the interval , if we require that our solution be continuous. Let us see what Sage has to say.   Sage does return a solution even if it looks a bit different than the one that we arrived at above. Notice that we have an imaginary term in our solution, where . We will examine the role of complex numbers and how useful they are in the study of ordinary differential equations in a later chapter, but for the moment complex numbers will just muddy the situation.  "
},
{
  "id": "firstlook02-subsection-separable-de-8",
  "level": "2",
  "url": "firstlook02.html#firstlook02-subsection-separable-de-8",
  "type": "Example",
  "number": "1.2.3",
  "title": "",
  "body": " The initial value problem in is a good example of a separable differential equation, Using partial fractions, we can rewrite this equation as Integrating both sides of , we obtain Taking the exponential of both sides yields Since is an arbitrary constant, we know that is an arbitrary positive constant, which we will also call . So we can rewrite this last equation as Solving for yields Using our initial condition , we can determine that .  "
},
{
  "id": "firstlook02-subsection-separable-de-9",
  "level": "2",
  "url": "firstlook02.html#firstlook02-subsection-separable-de-9",
  "type": "Activity",
  "number": "1.2.1",
  "title": "Solving Separable Differential Equations.",
  "body": " Solving Separable Differential Equations   Solve each of the following differential equations using the separation of variables technique.                    ,      ,    "
},
{
  "id": "firstlook02-subsection-newtons-law-cooling-3",
  "level": "2",
  "url": "firstlook02.html#firstlook02-subsection-newtons-law-cooling-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Newton's law of cooling "
},
{
  "id": "firstlook02-figure-newton-cooling",
  "level": "2",
  "url": "firstlook02.html#firstlook02-figure-newton-cooling",
  "type": "Figure",
  "number": "1.2.4",
  "title": "",
  "body": "    f(x) = 28.6 * exp(-0.0725 * x) + 70            Newton's law of cooling  "
},
{
  "id": "firstlook02-subsection-newtons-law-cooling-10",
  "level": "2",
  "url": "firstlook02.html#firstlook02-subsection-newtons-law-cooling-10",
  "type": "Activity",
  "number": "1.2.2",
  "title": "Coffee Temperature.",
  "body": " Coffee Temperature   The brewing temperature of the water used is very important. It should be between F and F. The closer to F the better. Boiling water ( F) should never be used, as it will burn the coffee. Water that is less than F will not extract properly. On the other hand, coffee that has a temperature of F is too hot to drink. Google the famous MacDonald's lawsuit. Coffee is best when it is served at a temperature of F to F (the Goldilocks range).     Suppose coffee is initially brewed at F. If room temperature is F, set up an initial value problem to model the temperature of the coffee at time , where is the time in minutes after brewing has finished.      Solve the initial value problem from      If the temperature of the coffee drops from F to F in the first two minutes after brewing, how long before the coffee reaches a temperature of F?    "
},
{
  "id": "firstlook02-subsection-mixing-problem-2",
  "level": "2",
  "url": "firstlook02.html#firstlook02-subsection-mixing-problem-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "mixing problems "
},
{
  "id": "firstlook02-subsection-mixing-problem-3",
  "level": "2",
  "url": "firstlook02.html#firstlook02-subsection-mixing-problem-3",
  "type": "Example",
  "number": "1.2.5",
  "title": "",
  "body": " Suppose that we have a large tank containing 1000 gallons of pure water and that water containing 0.5 pounds of salt per gallon flows into the tank at a rate of 10 gallons per minute. If the tank is also draining at a rate of 10 gallons per minute, the water level in the tank will remain constant. We will assume that the water in the tank is constantly stirred so that the mixture of salt and water is uniform in the tank.  We can model the amount of salt in the tank using differential equations. If is the amount of salt in the tank at time , then the rate at which the salt is changing in the tank is the difference between the rate at which salt is flowing into the tank and the rate at which it is leaving the tank, or Of course, the salt flows into the tank at the rate of pounds of salt per minute. However, the rate at which the salt leaves the tank depends on , the amount salt in the tank at time . At time , there is pounds of salt in one gallon. Therefore, salt flows out of the tank at a rate of pounds per minute. Equation now becomes This equation is separable, Integrating both sides of the equation, we have or Consequently, where . From our initial condition, we can quickly determine that and models the amount of salt in the tank at time . Notice that as , as expected.  "
},
{
  "id": "firstlook02-subsection-mixing-problem-4",
  "level": "2",
  "url": "firstlook02.html#firstlook02-subsection-mixing-problem-4",
  "type": "Activity",
  "number": "1.2.3",
  "title": "A Brewery Problem.",
  "body": " A Brewery Problem   The vast majority of beers from around the world have alcohol contents of 4 to 6 percent alcohol by volume (for example, Heineken Lager Beer has a 5 percent alcohol content). Suppose a local brewery has produced two beers with different alcohol contents, one 4 percent and one 7 percent. The master brewer would like to add some of the 7 percent beer to the 4 percent beer to obtain a beer with 5 percent alcohol.     A vat contains 500 gallons of 4% alcohol (by volume). Beer with 7% alcohol is pumped into the tank at a rate of 5 gallons per minute. Beer is also pumped out of the vat at a rate of 5 gallons per minute, so there is always 500 gallons in the tank. Set up an initial value problem to model the percentage of alcohol in the vat at time , where is the elapsed time in minutes.      Solve the initial value problem from      What is the percentage of alcohol in the vat after one hour?      At what time will the beer reach 5% alcohol?    "
},
{
  "id": "firstlook02-subsection-retirement-7",
  "level": "2",
  "url": "firstlook02.html#firstlook02-subsection-retirement-7",
  "type": "Activity",
  "number": "1.2.4",
  "title": "A Sports Contract.",
  "body": " A Sports Contract   In December 2023, Shohei Ohtani announced he was signing with the Los Angeles Dodgers. The contract terms were staggering: 10 years and $700 million. To date, this was the largest contract in sports history, eclipsing Lionel Messi's $673 million contract with FC Barcelona. Ohtani will receive $20 million of his $700 million contract with the Los Angeles Dodgers over the next 10 years or $2 million each year. The $680 million remaining will be paid out at $68 million a year over the following 10 years. Clearly, the Los Angeles Dodgers do not have to pay out the entire $700 million at the signing of the contract.     How much is Otani's contract worth in December 2023? You may assume that the interest rate over the next 20 years will be 6% (adjusted for inflation).    "
},
{
  "id": "firstlook02-subsection-some-theory-2",
  "level": "2",
  "url": "firstlook02.html#firstlook02-subsection-some-theory-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "separable "
},
{
  "id": "firstlook02-subsection-some-theory-3",
  "level": "2",
  "url": "firstlook02.html#firstlook02-subsection-some-theory-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "integral equation "
},
{
  "id": "firstlook02-subsection-what-can-go-wrong-2",
  "level": "2",
  "url": "firstlook02.html#firstlook02-subsection-what-can-go-wrong-2",
  "type": "Example",
  "number": "1.2.6",
  "title": "",
  "body": " It is not always possible to explicitly solve a separable differential equation. Consider the equation This equation can be rewritten in the form Integrating both sides of the equation, we have However, we have no method of solving this last equation explicitly for .  "
},
{
  "id": "firstlook02-subsection-what-can-go-wrong-3",
  "level": "2",
  "url": "firstlook02.html#firstlook02-subsection-what-can-go-wrong-3",
  "type": "Example",
  "number": "1.2.7",
  "title": "",
  "body": " Another difficulty arises if we consider the equation This equation is separable since we can rewrite it in the form Although the Fundamental Theorem of Calculus guarantees that every continuous function has an antiderivative, we cannot find an antiderivative for the function in terms of elementary functions. Thus, we are forced to write our solution as  "
},
{
  "id": "firstlook02-subsection-what-can-go-wrong-4",
  "level": "2",
  "url": "firstlook02.html#firstlook02-subsection-what-can-go-wrong-4",
  "type": "Example",
  "number": "1.2.8",
  "title": "",
  "body": " Even if we have a separable differential equation, we are not guaranteed a unique solution. Consider the initial value problem with and . Separating the variables, Thus, or If , the initial condition is satisfied and is a solution for . However, we can find at least two additional solutions for : In we will learn sufficient conditions for a first-order initial value problem to have a unique solution.  "
},
{
  "id": "firstlook02-subsection-what-can-go-wrong-5",
  "level": "2",
  "url": "firstlook02.html#firstlook02-subsection-what-can-go-wrong-5",
  "type": "Example",
  "number": "1.2.9",
  "title": "",
  "body": " Suppose that with . Separating the variables, we see that or Therefore, a continuous solution also exists on if . In the case that , the solution is and a continuous solution exists on .  "
},
{
  "id": "firstlook02-subsection-important-lessons-2",
  "level": "2",
  "url": "firstlook02.html#firstlook02-subsection-important-lessons-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "order solution first-order differential equations "
},
{
  "id": "rq-firstlook02-always-solution",
  "level": "2",
  "url": "firstlook02.html#rq-firstlook02-always-solution",
  "type": "Reading Question",
  "number": "1.2.8.1",
  "title": "",
  "body": "  Does a differential equation always have a solution? Explain.    "
},
{
  "id": "rq-firstlook02-separable",
  "level": "2",
  "url": "firstlook02.html#rq-firstlook02-separable",
  "type": "Reading Question",
  "number": "1.2.8.2",
  "title": "",
  "body": "  Is the differential equation separable? Why or why not?    "
},
{
  "id": "firstlook02-exercise-baked-potato",
  "level": "2",
  "url": "firstlook02.html#firstlook02-exercise-baked-potato",
  "type": "Exercise",
  "number": "1.2.9.1",
  "title": "Baking a Potato (Part 2).",
  "body": " Baking a Potato (Part 2)   Solve the differential equation that you used to model the temperature of a baked potato in .   "
},
{
  "id": "firstlook02-exercise-find-solution-1",
  "level": "2",
  "url": "firstlook02.html#firstlook02-exercise-find-solution-1",
  "type": "Exercise",
  "number": "1.2.9.2",
  "title": "",
  "body": "    "
},
{
  "id": "firstlook02-exercise-find-solution-2",
  "level": "2",
  "url": "firstlook02.html#firstlook02-exercise-find-solution-2",
  "type": "Exercise",
  "number": "1.2.9.3",
  "title": "",
  "body": "    "
},
{
  "id": "firstlook02-exercise-find-solution-3",
  "level": "2",
  "url": "firstlook02.html#firstlook02-exercise-find-solution-3",
  "type": "Exercise",
  "number": "1.2.9.4",
  "title": "",
  "body": "    "
},
{
  "id": "firstlook02-exercise-find-solution-4",
  "level": "2",
  "url": "firstlook02.html#firstlook02-exercise-find-solution-4",
  "type": "Exercise",
  "number": "1.2.9.5",
  "title": "",
  "body": "    "
},
{
  "id": "firstlook02-exercise-find-solution-5",
  "level": "2",
  "url": "firstlook02.html#firstlook02-exercise-find-solution-5",
  "type": "Exercise",
  "number": "1.2.9.6",
  "title": "",
  "body": "    "
},
{
  "id": "firstlook02-exercise-find-solution-6",
  "level": "2",
  "url": "firstlook02.html#firstlook02-exercise-find-solution-6",
  "type": "Exercise",
  "number": "1.2.9.7",
  "title": "",
  "body": "    "
},
{
  "id": "firstlook02-exercise-find-solution-7",
  "level": "2",
  "url": "firstlook02.html#firstlook02-exercise-find-solution-7",
  "type": "Exercise",
  "number": "1.2.9.8",
  "title": "",
  "body": "    "
},
{
  "id": "firstlook02-exercise-find-solution-8",
  "level": "2",
  "url": "firstlook02.html#firstlook02-exercise-find-solution-8",
  "type": "Exercise",
  "number": "1.2.9.9",
  "title": "",
  "body": "    "
},
{
  "id": "firstlook02-exercise-find-solution-9",
  "level": "2",
  "url": "firstlook02.html#firstlook02-exercise-find-solution-9",
  "type": "Exercise",
  "number": "1.2.9.10",
  "title": "",
  "body": "    "
},
{
  "id": "firstlook02-exercise-find-solution-10",
  "level": "2",
  "url": "firstlook02.html#firstlook02-exercise-find-solution-10",
  "type": "Exercise",
  "number": "1.2.9.11",
  "title": "",
  "body": "    "
},
{
  "id": "firstlook02-exercises-solve-ivps-3",
  "level": "2",
  "url": "firstlook02.html#firstlook02-exercises-solve-ivps-3",
  "type": "Exercise",
  "number": "1.2.9.12",
  "title": "",
  "body": "  ,   "
},
{
  "id": "firstlook02-exercises-solve-ivps-4",
  "level": "2",
  "url": "firstlook02.html#firstlook02-exercises-solve-ivps-4",
  "type": "Exercise",
  "number": "1.2.9.13",
  "title": "",
  "body": "  ,   "
},
{
  "id": "firstlook02-exercises-solve-ivps-5",
  "level": "2",
  "url": "firstlook02.html#firstlook02-exercises-solve-ivps-5",
  "type": "Exercise",
  "number": "1.2.9.14",
  "title": "",
  "body": "  ,   "
},
{
  "id": "firstlook02-exercises-solve-ivps-6",
  "level": "2",
  "url": "firstlook02.html#firstlook02-exercises-solve-ivps-6",
  "type": "Exercise",
  "number": "1.2.9.15",
  "title": "",
  "body": "  ,   "
},
{
  "id": "firstlook02-exercises-solve-ivps-7",
  "level": "2",
  "url": "firstlook02.html#firstlook02-exercises-solve-ivps-7",
  "type": "Exercise",
  "number": "1.2.9.16",
  "title": "",
  "body": "  ,   "
},
{
  "id": "firstlook02-exercises-solve-ivps-8",
  "level": "2",
  "url": "firstlook02.html#firstlook02-exercises-solve-ivps-8",
  "type": "Exercise",
  "number": "1.2.9.17",
  "title": "",
  "body": "  ,   "
},
{
  "id": "firstlook02-exercises-solve-ivps-9",
  "level": "2",
  "url": "firstlook02.html#firstlook02-exercises-solve-ivps-9",
  "type": "Exercise",
  "number": "1.2.9.18",
  "title": "",
  "body": "  ,   "
},
{
  "id": "firstlook02-exercises-solve-ivps-10",
  "level": "2",
  "url": "firstlook02.html#firstlook02-exercises-solve-ivps-10",
  "type": "Exercise",
  "number": "1.2.9.19",
  "title": "",
  "body": "  ,   "
},
{
  "id": "firstlook02-exercises-solve-ivps-11",
  "level": "2",
  "url": "firstlook02.html#firstlook02-exercises-solve-ivps-11",
  "type": "Exercise",
  "number": "1.2.9.20",
  "title": "",
  "body": "  ,   "
},
{
  "id": "firstlook02-exercises-solve-ivps-12",
  "level": "2",
  "url": "firstlook02.html#firstlook02-exercises-solve-ivps-12",
  "type": "Exercise",
  "number": "1.2.9.21",
  "title": "",
  "body": "  ,   "
},
{
  "id": "firstlook02-exercises--5",
  "level": "2",
  "url": "firstlook02.html#firstlook02-exercises--5",
  "type": "Exercise",
  "number": "1.2.9.22",
  "title": "",
  "body": "  Solve the initial value problems in using Sage.    "
},
{
  "id": "firstlook02-exercises--6",
  "level": "2",
  "url": "firstlook02.html#firstlook02-exercises--6",
  "type": "Exercise",
  "number": "1.2.9.23",
  "title": "Homogeneous Equations.",
  "body": " Homogeneous Equations   A first-order differential equation, , is homogeneous if .  Show that the equation is homogeneous.  Let and show that the equation in part (a) can be written as Use the fact that this new equation is separable to solve for .  Show that any homogeneous equation can be transformed into a separable differential equation by making the substitution .  A function is said to homogeneous of degree if for . Show that differential equation where and are both homogeneous of degree , can be transformed into a separable differential equation using the substitution .  Solve the differential equation  Solve the differential equation    "
},
{
  "id": "firstlook02-exercises--7",
  "level": "2",
  "url": "firstlook02.html#firstlook02-exercises--7",
  "type": "Exercise",
  "number": "1.2.9.24",
  "title": "",
  "body": "  Mr. Ratchett, an elderly American, was found murdered in his train compartment on the Orient Express at 7 AM. When his body was discovered, the famous detective Hercule Poirot noted that Ratchett had a body temperature of 28 degrees. The body had cooled to a temperature of 27 degrees one hour later. If the normal temperature of a human being is 37 degrees and the air temperature in the train is 22 degrees, estimate the time of Ratchett's death using Newton's Law of Cooling.   "
},
{
  "id": "firstlook02-exercises--8",
  "level": "2",
  "url": "firstlook02.html#firstlook02-exercises--8",
  "type": "Exercise",
  "number": "1.2.9.25",
  "title": "",
  "body": "  You are starting a new position, and your employer has a generous retirement plan. If you put $500 a month into a 401(k) plan, your employer will match your contributions.  Assume that you are 25 years old and plan to retire at age 65, how large can you expect your 401(k) pension to be when you retire? Assume that your 401(k) plan will collect interest at a rate of 5%.  If you begin withdrawing $60,000 every year at age 65, how long will your retirement fund last?     "
},
{
  "id": "firstlook03",
  "level": "1",
  "url": "firstlook03.html",
  "type": "Section",
  "number": "1.3",
  "title": "Geometric and Quantitative Analysis",
  "body": " Geometric and Quantitative Analysis    To understand that direction fields are a useful way of analyzing a differential equation from a geometric point of view, especially since not all differential equations can be solved analytically.  To understand that an autonomous equation is a differential equation of the form and that phase lines can be used to analyze autonomous differential equations.  To understand equilibrium solutions to a differential equation . are those solutions given by for all . In particular, an equilibrium solution is either a sink , source , or node .     If we view the differential equation as a formula for the slope of a tangent line to a solution curve, we can approximate the graph of a solution curve. For example, if we consider the equation , then a solution curve will have a slope of at the point . We can use this information to obtain a geometric description of the solutions to the equation.    RC Circuits  Suppose that we wish to analyze how an electric current flows through a circuit. An RC circuit RC circuit is a very simple circuit might contain a voltage source, a capacitor, and a resistor ( ). A battery or generator is an example of a voltage source. The glowing red heating element in a toaster or an electric stove is an example of something that provides resistance in a circuit. A capacitor stores an electrical charge and can be made by separating two metal plates with an insulating material. Capacitors are used to power the electronic flashes for cameras. Current, , is the rate at which a charge flows through this circuit and is measured in amperes or amps (A). We assign a direction to the current. A current flowing in the opposite direction will be given negative values.             power=(0,3.5)     C  R  E(t)  +  -  I(t)       An RC circuit   The source voltage, , is measured in volts (V). Kirchhoff's Second Law Kirchhoff's Second Law tells us that the impressed voltage in a closed circuit is equal to the sum of the voltage drops in the rest of the circuit. Thus, we need only compute the voltage drop across the resistor, , and the voltage drop across the capacitor, . According to Kirchhoff's Law, this is  Resistance, , to the current is measured in ohms ( ). Ohm's Law Ohm's Law tells us that the voltage drop across a resistor is given by Finally, capacitance, , is measured in farads (F). Coulomb's Law Coulomb's Law tells us how current flows across a capacitor, Thus, if we combine the equations and , our equation becomes  We will now investigate how our circuit reacts under different voltage sources. For example, we might have a zero voltage source (the capacitor could still hold a charge). We could also have a constant nonzero source of voltage such as a battery or a fluctuating source of voltage such as a generator. We might even have a series of pulses of voltage where the current is periodically turned on and off. We would like to be able to understand the solutions to the equation for different voltage sources . If we view the differential equation as an expression for computing how fast current is flowing across the capacitor, we can analyze our circuit from a geometric point of view and can actually say a great deal about circuits without solving a differential equation.    Direction Fields  Any differential equation can be viewed as a formula for the slope of a function . Geometrically, the equation tells us that, at any point , the slope of a solution curve is given by . Suppose that our differential equation is defined on the rectangle , and let be a solution curve for that passes through the point . Then the differential equation tells us the slope of this solution curve at . We can indicate this on the -plane by drawing a short line segment at the point with slope . Thus, we can obtain a direction field direction field or slope field slope field for the differential equation. A solution curve must be tangent to its direction field at every point.  For example, consider the differential equation . The direction field for this equation is given in along with several solution curves.      f(t,y) = y^2\/2 - t      t    y(t)   gap = 1            The direction field for   Although direction fields can be tedious to compute using pencil and paper, we can easily generate direction fields for any differential equation with the use of computer software. Most computer algebra systems, including Sage , have facilities for generating and graphing direction fields. For example, the following Sage cell will generate the direction field for using the command plot_slope_field . We will learn how to add solution curves at the end of this section.    Plotting Direction Fields   Plot the direction field and the solution curves for each of the following initial conditions.     , , .      , , , .      , .      , , , .      , , , .     In each case comment on anything that you notice about the direction field and the solutions.      RC Circuits Revisited  Now let us return to our RC circuit and consider different functions for the differential equation with and . First suppose that there is no voltage source in the circuit. If we let for all , we will get the direction field of given in . The direction field agrees with our analytic solution where .      E(t) = 0  f(t,y) = (E(t)-y)      t    E(t)   gap = 1\/2   colors=['blue','red','green','magenta','orange']          The direction field for no current   If we assume that we have a nonzero constant source of voltage, , in our circuit such as a battery, then we obtain the separable differential equation The direction field for this differential equation for is given in .      E(t) = 1  f(t,y) = (E(t)-y)       t    E(t)   gap = 1\/2   colors=['blue','red','green','magenta','orange']          The direction field for a constant current   If we attach a battery to our circuit at time and then disconnect the battery at , then we obtain a different solution. For example, if we will obtain a different direction field ( ).       f(t,y)=chi_oc(-inf,4,t)*10-y     t    E(t)   gap = 1\/2         The direction field for a single pulse   If our voltage source emits a series of pulses, say then the direction field for our differential equation is given in .       f(t,y)=chi_oc(-inf,4,t)*20-y + chi_oc(8,12,t)*20-y    gap = 1     t    E(t)        The direction field for a series of pulses   Finally, if we use a generator for a voltage source, the voltage source might be given by a function such as . The direction field for this circuit is given in .      R=1  C=1  E(t) = sin(pi*t\/2)  f(t,y) = (E(t) - y)\/(R*C)      t    E(t)                 The direction field for an oscillating voltage     Plotting Direction Fields with Sage  The Sage interact below will help you plot direction fields for a given initial value problem. A Sage interact is a menu driven Sage applet. All of the Sage code is under the hood. You can then change each field in the cell output to solve a particular initial value problem.   A Sage applet for plotting direction fields    Of course, it is quite easy to give the interact an initial value problem that yield unitelligible results.    Autonomous Differential Equations  An autonomous differential equation differential equation autonomous is one of the form In other words, a differential equation is autonomous if the variable does not appear on the righthand side of the equation. Since an autonomous differential equation only depends on the variable , its direction field is particularly easy to graph. The slope only depends on and is the same for all values of .   A Logistic Model with Harvesting  Let us consider a trout pond that has a carrying capacity of 200 fish. Suppose that the trout population can be modeled according to the logistic equation harvesting  where is the time in years. If we allow the fish to be harvested at a constant rate of 32 per year, our equation becomes The direction field for this equation is given in .      N = 200  H = 32  f(t, P) = P*(1 - P\/N) - H     gap = 3\/2     t    P(t)            Logistic growth with harvesting   One of the basic questions that we can ask of our model is whether or not we have a sustainable population in our trout pond given this harvest rate. If so, under what conditions for sustainablility?   Since is an autonomous differential equation, the direction field does not depend on . Consequently, we need only keep track of what happens on the vertical axis. We can do this with a phase line phase line . Instead of drawing the entire direction field, we can draw a single line containing the same information ( ).             P = 160 is a sink  P = 40 is a source       Phase line diagram   Notice that when or . Thus, the two constant solutions and are the same for all values of the independent variable . We say that such a solution is an equilibrium solution equilibrium solution . Equilibrium solutions graph as horizontal lines on the direction field. We can identify equilibrium solutions by setting the derivative of the function equal to zero. On our phase line we will represent these solutions as equilibrium points. For values of between 40 and 160, we know that . Thus, any solution curve must be increasing. We denote this property on the phase line by drawing an upward pointing arrow. On the other hand, we know that when or . In this case any solution curve will be decreasing, and we will indicate this by a downward pointing arrow.  Let and suppose that is an equilibrium solution. We say this solution is a sink equilibrium solution sink if for any solution with initial condition sufficiently close to , we have We say that an equilibrium point is a source equilibrium solution source if all solutions that start sufficiently close to tend toward as . An equilibrium solution that is neither a sink or a source is called a node equilibrium solution node ( ). When , we have a source, and when , we have a sink.  An equilibrium solution is stable equilibrium solution stable if a small change in the initial conditions gives a solution which tends toward the equilibrium as the independent variable tends towards positive infinity. An equilibrium solution is unstable equilibrium solution unstable if a small change in the initial conditions gives a solution which veers away from the equilibrium as the independent variable tends towards positive infinity.  Consider the differential equation The graph of is given in . If , we have a sink. If , we have a source. Finally, if , we have a node.      f(x) = x^2*(x + 2)*(x - 2)            Sinks, sources, and nodes   It is easy to generate a phase line diagram for equation from the graph of ( ). If the graph is above the -axis, then is increasing. If the graph is below the -axis, then is decreasing. Therefore, the phase line is easy to sketch ( ).               P = 2 is a source  P = 0 is a node  P = -2 is a sink       Phase line diagram for    Autonomous Equations and Phase Lines   For each of the differential equations below, draw the phase line and classify each equilibrium solution as a sink, a source, or a node.     .      .      .      .     In each case comment on anything that you notice about the phase line and the equilibrium solutions.    One of the reasons why autonomous equations are so important is Taylor's theorem, which tells us that any function can be approximated near a point by an th degree polynomial, near . For example, if with , then we may approximate this initial value problem near with Of course, this strategy might not work very well if or .    Important Lessons   Direction fields and phase lines are a useful way of analyzing a differential equation from a geometric point of view, especially since not all differential equations can be solved analytically.  An autonomous equation is a differential equation of the form . We can use a phase line to analyze autonomous differential equations.  Equilibrium solutions to a differential equation are those solutions given by for all . In this case, any solution must be constant. We can classify equilibrium solutions according to whether they are stable or unstable. In particular, an equilibrium solution is either a sink, source, or node.       Explain why we do not expect solution curves to intersect for a differential equation.       Explain in your own words what an autonomous differential equation is.       Exercises   Plotting direction fields by hand  For each of the differential equations in , plot the direction field on the integer coordinates of the rectangle and by drawing a short line of the appropriate slope.                                   Use Sage to plot the direction fields of each differential equation in .      Equilibrium solutions and phase lines  Find the equilibrium solutions for each of the differential equations in . Draw the phase line for each equation and classify each equilibrium solution as a sink, a source, or a node.                                  Sketching solutions  Each of the differential equations in has several initial conditions specified. Sketch the solution curves that satisfy the initial conditions. Sketch your solutions for each equation on the same pair of axes.    , , , .      , , , .      , , , .      , , , .      , , , .      , , , .      Phase lines from graphs of the derivative  Consider the differential equation , where the graph of is given in . Draw the phase line for each equation and classify each equilibrium solution as a sink, a source, or a node.        f(x) = (x + 2)*(x - 2)                   f(x) = (1\/3)*(x + 3\/2)*(x - 1)*(x - 5\/2)^2                   f(x) = -x^2*(x + 2)*(x - 2)\/2+3                   f(x) = (x + 2)*(x + 1)*(x - 1)^2*(x-5\/2)\/2                What happens if we increase the harvest rate to 100 in ? What should be our strategy to maintain a viable population in the trout pond and still permit fishing?      Sage Plotting Direction Fields and Solutions   Plotting direction fields  If we wish to plot a direction field for a differential equation, we can use the command plot_slope_field . Let us plot the direction field for the equation .   There are a few extra commands to specify the size of the arrows in the plot and to label the axes. Try changing or omitting these commands and see what happens.   For more examples and options, see    Plotting solutions  Now let us find a numerical solution to the equation using the command desolve_rk4 . This is a fourth-order Runge-Kutta method, and returns a numerical solution (a table of values). Here, we must supply the dependent variable and initial conditions.   Of course, we can combine the two plots.   There are many other commands and packages to solve ordinary differential equations using Sage. For more information, see . Below is an empty Sage cell, where you can practice.     Sage Exercises    Suppose that the population of a trout pond can be accurately modeled by the logistic equation At time , a disease is introduced into the population that kills 10% of the population per year. To see how the disease affects the fish population, we will change our original model to the following:   Plot the direction field for this equation using Sage .   Plot the graphs of two or three representative solutions to this equation on the direction field.  Find formulas for the solutions of this equation for initial conditions .  Give a qualitative description of how the disease affects the population.       "
},
{
  "id": "firstlook03-2",
  "level": "2",
  "url": "firstlook03.html#firstlook03-2",
  "type": "Objectives",
  "number": "1.3",
  "title": "",
  "body": "  To understand that direction fields are a useful way of analyzing a differential equation from a geometric point of view, especially since not all differential equations can be solved analytically.  To understand that an autonomous equation is a differential equation of the form and that phase lines can be used to analyze autonomous differential equations.  To understand equilibrium solutions to a differential equation . are those solutions given by for all . In particular, an equilibrium solution is either a sink , source , or node .   "
},
{
  "id": "firstlook03-subsection-rc-circuits-2",
  "level": "2",
  "url": "firstlook03.html#firstlook03-subsection-rc-circuits-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "RC circuit "
},
{
  "id": "firstlook03-figure-rc-circuit",
  "level": "2",
  "url": "firstlook03.html#firstlook03-figure-rc-circuit",
  "type": "Figure",
  "number": "1.3.1",
  "title": "",
  "body": "           power=(0,3.5)     C  R  E(t)  +  -  I(t)       An RC circuit  "
},
{
  "id": "firstlook03-subsection-rc-circuits-4",
  "level": "2",
  "url": "firstlook03.html#firstlook03-subsection-rc-circuits-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Kirchhoff's Second Law "
},
{
  "id": "firstlook03-subsection-rc-circuits-5",
  "level": "2",
  "url": "firstlook03.html#firstlook03-subsection-rc-circuits-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Ohm's Law Coulomb's Law "
},
{
  "id": "firstlook03-subsection-direction-fields-2",
  "level": "2",
  "url": "firstlook03.html#firstlook03-subsection-direction-fields-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "direction field slope field "
},
{
  "id": "firstlook03-figure-direction-field",
  "level": "2",
  "url": "firstlook03.html#firstlook03-figure-direction-field",
  "type": "Figure",
  "number": "1.3.2",
  "title": "",
  "body": "    f(t,y) = y^2\/2 - t      t    y(t)   gap = 1            The direction field for  "
},
{
  "id": "firstlook03-subsection-direction-fields-7",
  "level": "2",
  "url": "firstlook03.html#firstlook03-subsection-direction-fields-7",
  "type": "Activity",
  "number": "1.3.1",
  "title": "Plotting Direction Fields.",
  "body": " Plotting Direction Fields   Plot the direction field and the solution curves for each of the following initial conditions.     , , .      , , , .      , .      , , , .      , , , .     In each case comment on anything that you notice about the direction field and the solutions.   "
},
{
  "id": "firstlook03-figure-no-current",
  "level": "2",
  "url": "firstlook03.html#firstlook03-figure-no-current",
  "type": "Figure",
  "number": "1.3.3",
  "title": "",
  "body": "    E(t) = 0  f(t,y) = (E(t)-y)      t    E(t)   gap = 1\/2   colors=['blue','red','green','magenta','orange']          The direction field for no current  "
},
{
  "id": "firstlook03-figure-constant-current",
  "level": "2",
  "url": "firstlook03.html#firstlook03-figure-constant-current",
  "type": "Figure",
  "number": "1.3.4",
  "title": "",
  "body": "    E(t) = 1  f(t,y) = (E(t)-y)       t    E(t)   gap = 1\/2   colors=['blue','red','green','magenta','orange']          The direction field for a constant current  "
},
{
  "id": "firstlook03-figure-single-pulse-current",
  "level": "2",
  "url": "firstlook03.html#firstlook03-figure-single-pulse-current",
  "type": "Figure",
  "number": "1.3.5",
  "title": "",
  "body": "     f(t,y)=chi_oc(-inf,4,t)*10-y     t    E(t)   gap = 1\/2         The direction field for a single pulse  "
},
{
  "id": "firstlook03-figure-series-pulses",
  "level": "2",
  "url": "firstlook03.html#firstlook03-figure-series-pulses",
  "type": "Figure",
  "number": "1.3.6",
  "title": "",
  "body": "     f(t,y)=chi_oc(-inf,4,t)*20-y + chi_oc(8,12,t)*20-y    gap = 1     t    E(t)        The direction field for a series of pulses  "
},
{
  "id": "firstlook03-figure-oscillating-voltage",
  "level": "2",
  "url": "firstlook03.html#firstlook03-figure-oscillating-voltage",
  "type": "Figure",
  "number": "1.3.7",
  "title": "",
  "body": "    R=1  C=1  E(t) = sin(pi*t\/2)  f(t,y) = (E(t) - y)\/(R*C)      t    E(t)                 The direction field for an oscillating voltage  "
},
{
  "id": "firstlook03-figure-interactive-direction-fields",
  "level": "2",
  "url": "firstlook03.html#firstlook03-figure-interactive-direction-fields",
  "type": "Figure",
  "number": "1.3.8",
  "title": "",
  "body": " A Sage applet for plotting direction fields   "
},
{
  "id": "firstlook03-subsection-autonomous-equations-2",
  "level": "2",
  "url": "firstlook03.html#firstlook03-subsection-autonomous-equations-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "autonomous differential equation "
},
{
  "id": "firstlook03-example-harvesting",
  "level": "2",
  "url": "firstlook03.html#firstlook03-example-harvesting",
  "type": "Example",
  "number": "1.3.9",
  "title": "A Logistic Model with Harvesting.",
  "body": " A Logistic Model with Harvesting  Let us consider a trout pond that has a carrying capacity of 200 fish. Suppose that the trout population can be modeled according to the logistic equation harvesting  where is the time in years. If we allow the fish to be harvested at a constant rate of 32 per year, our equation becomes The direction field for this equation is given in .      N = 200  H = 32  f(t, P) = P*(1 - P\/N) - H     gap = 3\/2     t    P(t)            Logistic growth with harvesting   One of the basic questions that we can ask of our model is whether or not we have a sustainable population in our trout pond given this harvest rate. If so, under what conditions for sustainablility?  "
},
{
  "id": "firstlook03-subsection-autonomous-equations-4",
  "level": "2",
  "url": "firstlook03.html#firstlook03-subsection-autonomous-equations-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "phase line "
},
{
  "id": "firstlook03-figure-phase-line",
  "level": "2",
  "url": "firstlook03.html#firstlook03-figure-phase-line",
  "type": "Figure",
  "number": "1.3.11",
  "title": "",
  "body": "           P = 160 is a sink  P = 40 is a source       Phase line diagram  "
},
{
  "id": "firstlook03-subsection-autonomous-equations-6",
  "level": "2",
  "url": "firstlook03.html#firstlook03-subsection-autonomous-equations-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "equilibrium solution "
},
{
  "id": "firstlook03-subsection-autonomous-equations-7",
  "level": "2",
  "url": "firstlook03.html#firstlook03-subsection-autonomous-equations-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sink source node "
},
{
  "id": "firstlook03-subsection-autonomous-equations-8",
  "level": "2",
  "url": "firstlook03.html#firstlook03-subsection-autonomous-equations-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "stable unstable "
},
{
  "id": "firstlook03-figure-sinks-sources-nodes",
  "level": "2",
  "url": "firstlook03.html#firstlook03-figure-sinks-sources-nodes",
  "type": "Figure",
  "number": "1.3.12",
  "title": "",
  "body": "    f(x) = x^2*(x + 2)*(x - 2)            Sinks, sources, and nodes  "
},
{
  "id": "firstlook03-figure-phase-line-1",
  "level": "2",
  "url": "firstlook03.html#firstlook03-figure-phase-line-1",
  "type": "Figure",
  "number": "1.3.13",
  "title": "",
  "body": "             P = 2 is a source  P = 0 is a node  P = -2 is a sink       Phase line diagram for  "
},
{
  "id": "firstlook03-subsection-autonomous-equations-13",
  "level": "2",
  "url": "firstlook03.html#firstlook03-subsection-autonomous-equations-13",
  "type": "Activity",
  "number": "1.3.2",
  "title": "Autonomous Equations and Phase Lines.",
  "body": " Autonomous Equations and Phase Lines   For each of the differential equations below, draw the phase line and classify each equilibrium solution as a sink, a source, or a node.     .      .      .      .     In each case comment on anything that you notice about the phase line and the equilibrium solutions.   "
},
{
  "id": "rq-firstlook03-intersect",
  "level": "2",
  "url": "firstlook03.html#rq-firstlook03-intersect",
  "type": "Reading Question",
  "number": "1.3.7.1",
  "title": "",
  "body": "  Explain why we do not expect solution curves to intersect for a differential equation.    "
},
{
  "id": "rq-firstlook03-autonomous",
  "level": "2",
  "url": "firstlook03.html#rq-firstlook03-autonomous",
  "type": "Reading Question",
  "number": "1.3.7.2",
  "title": "",
  "body": "  Explain in your own words what an autonomous differential equation is.    "
},
{
  "id": "firstlook03-exercise-sketching-direction-field-1",
  "level": "2",
  "url": "firstlook03.html#firstlook03-exercise-sketching-direction-field-1",
  "type": "Exercise",
  "number": "1.3.8.1",
  "title": "",
  "body": "    "
},
{
  "id": "firstlook03-exercise-sketching-direction-field-2",
  "level": "2",
  "url": "firstlook03.html#firstlook03-exercise-sketching-direction-field-2",
  "type": "Exercise",
  "number": "1.3.8.2",
  "title": "",
  "body": "    "
},
{
  "id": "firstlook03-exercise-sketching-direction-field-3",
  "level": "2",
  "url": "firstlook03.html#firstlook03-exercise-sketching-direction-field-3",
  "type": "Exercise",
  "number": "1.3.8.3",
  "title": "",
  "body": "    "
},
{
  "id": "firstlook03-exercise-sketching-direction-field-4",
  "level": "2",
  "url": "firstlook03.html#firstlook03-exercise-sketching-direction-field-4",
  "type": "Exercise",
  "number": "1.3.8.4",
  "title": "",
  "body": "    "
},
{
  "id": "firstlook03-exercise-sketching-direction-field-5",
  "level": "2",
  "url": "firstlook03.html#firstlook03-exercise-sketching-direction-field-5",
  "type": "Exercise",
  "number": "1.3.8.5",
  "title": "",
  "body": "    "
},
{
  "id": "firstlook03-exercise-sketching-direction-field-6",
  "level": "2",
  "url": "firstlook03.html#firstlook03-exercise-sketching-direction-field-6",
  "type": "Exercise",
  "number": "1.3.8.6",
  "title": "",
  "body": "    "
},
{
  "id": "firstlook03-exercise-sketching-direction-field-w-sage",
  "level": "2",
  "url": "firstlook03.html#firstlook03-exercise-sketching-direction-field-w-sage",
  "type": "Exercise",
  "number": "1.3.8.7",
  "title": "",
  "body": "  Use Sage to plot the direction fields of each differential equation in .    "
},
{
  "id": "firstlook03-exercise-phaseline-1",
  "level": "2",
  "url": "firstlook03.html#firstlook03-exercise-phaseline-1",
  "type": "Exercise",
  "number": "1.3.8.8",
  "title": "",
  "body": "    "
},
{
  "id": "firstlook03-exercise-phaseline-2",
  "level": "2",
  "url": "firstlook03.html#firstlook03-exercise-phaseline-2",
  "type": "Exercise",
  "number": "1.3.8.9",
  "title": "",
  "body": "    "
},
{
  "id": "firstlook03-exercise-phaseline-3",
  "level": "2",
  "url": "firstlook03.html#firstlook03-exercise-phaseline-3",
  "type": "Exercise",
  "number": "1.3.8.10",
  "title": "",
  "body": "    "
},
{
  "id": "firstlook03-exercise-phaseline-4",
  "level": "2",
  "url": "firstlook03.html#firstlook03-exercise-phaseline-4",
  "type": "Exercise",
  "number": "1.3.8.11",
  "title": "",
  "body": "    "
},
{
  "id": "firstlook03-exercise-phaseline-5",
  "level": "2",
  "url": "firstlook03.html#firstlook03-exercise-phaseline-5",
  "type": "Exercise",
  "number": "1.3.8.12",
  "title": "",
  "body": "    "
},
{
  "id": "firstlook03-exercise-phaseline-6",
  "level": "2",
  "url": "firstlook03.html#firstlook03-exercise-phaseline-6",
  "type": "Exercise",
  "number": "1.3.8.13",
  "title": "",
  "body": "    "
},
{
  "id": "firstlook03-exercise-sketching-solution-1",
  "level": "2",
  "url": "firstlook03.html#firstlook03-exercise-sketching-solution-1",
  "type": "Exercise",
  "number": "1.3.8.14",
  "title": "",
  "body": "  , , , .   "
},
{
  "id": "firstlook03-exercise-sketching-solution-2",
  "level": "2",
  "url": "firstlook03.html#firstlook03-exercise-sketching-solution-2",
  "type": "Exercise",
  "number": "1.3.8.15",
  "title": "",
  "body": "  , , , .   "
},
{
  "id": "firstlook03-exercise-sketching-solution-3",
  "level": "2",
  "url": "firstlook03.html#firstlook03-exercise-sketching-solution-3",
  "type": "Exercise",
  "number": "1.3.8.16",
  "title": "",
  "body": "  , , , .   "
},
{
  "id": "firstlook03-exercise-sketching-solution-4",
  "level": "2",
  "url": "firstlook03.html#firstlook03-exercise-sketching-solution-4",
  "type": "Exercise",
  "number": "1.3.8.17",
  "title": "",
  "body": "  , , , .   "
},
{
  "id": "firstlook03-exercise-sketching-solution-5",
  "level": "2",
  "url": "firstlook03.html#firstlook03-exercise-sketching-solution-5",
  "type": "Exercise",
  "number": "1.3.8.18",
  "title": "",
  "body": "  , , , .   "
},
{
  "id": "firstlook03-exercise-sketching-solution-6",
  "level": "2",
  "url": "firstlook03.html#firstlook03-exercise-sketching-solution-6",
  "type": "Exercise",
  "number": "1.3.8.19",
  "title": "",
  "body": "  , , , .   "
},
{
  "id": "firstlook03-exercises-derivative-graphs-3",
  "level": "2",
  "url": "firstlook03.html#firstlook03-exercises-derivative-graphs-3",
  "type": "Exercise",
  "number": "1.3.8.20",
  "title": "",
  "body": "      f(x) = (x + 2)*(x - 2)            "
},
{
  "id": "firstlook03-exercises-derivative-graphs-4",
  "level": "2",
  "url": "firstlook03.html#firstlook03-exercises-derivative-graphs-4",
  "type": "Exercise",
  "number": "1.3.8.21",
  "title": "",
  "body": "      f(x) = (1\/3)*(x + 3\/2)*(x - 1)*(x - 5\/2)^2            "
},
{
  "id": "firstlook03-exercises-derivative-graphs-5",
  "level": "2",
  "url": "firstlook03.html#firstlook03-exercises-derivative-graphs-5",
  "type": "Exercise",
  "number": "1.3.8.22",
  "title": "",
  "body": "      f(x) = -x^2*(x + 2)*(x - 2)\/2+3            "
},
{
  "id": "firstlook03-exercises-derivative-graphs-6",
  "level": "2",
  "url": "firstlook03.html#firstlook03-exercises-derivative-graphs-6",
  "type": "Exercise",
  "number": "1.3.8.23",
  "title": "",
  "body": "      f(x) = (x + 2)*(x + 1)*(x - 1)^2*(x-5\/2)\/2            "
},
{
  "id": "firstlook03-exercises-7",
  "level": "2",
  "url": "firstlook03.html#firstlook03-exercises-7",
  "type": "Exercise",
  "number": "1.3.8.24",
  "title": "",
  "body": "  What happens if we increase the harvest rate to 100 in ? What should be our strategy to maintain a viable population in the trout pond and still permit fishing?   "
},
{
  "id": "firstlook03-subsection-sage-4-2",
  "level": "2",
  "url": "firstlook03.html#firstlook03-subsection-sage-4-2",
  "type": "Exercise",
  "number": "1.3.9.3.1",
  "title": "",
  "body": "  Suppose that the population of a trout pond can be accurately modeled by the logistic equation At time , a disease is introduced into the population that kills 10% of the population per year. To see how the disease affects the fish population, we will change our original model to the following:   Plot the direction field for this equation using Sage .   Plot the graphs of two or three representative solutions to this equation on the direction field.  Find formulas for the solutions of this equation for initial conditions .  Give a qualitative description of how the disease affects the population.    "
},
{
  "id": "firstlook04",
  "level": "1",
  "url": "firstlook04.html",
  "type": "Section",
  "number": "1.4",
  "title": "Analyzing Equations Numerically",
  "body": " Analyzing Equations Numerically    To understand that numerical algorithms such as Euler's method allow the approximation of solutions to the initial value problems and that there are more efficient algorithms than Euler's method such as those algorithms that use the Runge-Kutta methods .  To understand that Taylor's Theorem is a very useful tool for studying differential equations.  To understand that error analysis of the rate of convergence is very important for any numerical algorithm.     Just as numerical algorithms are useful when finding the roots of polynomials, numerical methods will prove very useful in our study of ordinary differential equations. Consider the polynomial . We do not need a numerical algorithm to see that the roots of this polynomial are and . However, a numerical method such as the Newton-Raphson Algorithm is very useful for approximating as a decimal. See any calculus text for a description of the Newton-Raphson Algorithm. Similarly, it may be easier to generate a numerical solution for differential equations if our goal is simply to plot a solution. In addition, there will be differential equations for which it is impossible to find a solution in terms of elementary functions such as polynomials, trigonometric functions, and exponential functions.    Euler's Method  Suppose that we wish to solve the initial value problem The equation is not separable, which currently is the only analytic technique at our disposal. However, we can try to find a numerical approximation for the solution. A numerical approximation is simply a table (possibly very large) of and values.  We will attempt to find a numerical solution for on the interval . Even with the use of a computer, we cannot approximate the solution at every single point on an interval. For the initial value problem we might be able to find approximations at in at best. If we choose to be equally spaced on , we can write where and . We say that is the step size Euler's method step size for our approximation.  Given an approximation for the solution , the question is how to find an approximate solution at . To generate the second approximation, we will construct a tangent line to the solution at . If we use the slope of the solution curve at , then Making use of the fact that or equivalently the estimate for our solution at is Similarly, the approximation at will be Our general algorithm is The idea is to compute tangent lines at each step and use this information to get our next approximation.  The algorithm that we have described is known as Euler's method Euler's method . Let us estimate a solution to on the interval with step size . Since , we can make our first approximation exact, To generate the second approximation, we will construct a tangent line to the solution at . If we use the slope of the solution curve at , and make use of the fact that the estimate for our solution at is Similarly, the approximation at will be Our general algorithm is  The initial value problem is, in fact, solvable analytically with solution . We can compare our approximation to the exact solution in . We can also see graphs of the approximate and exact solutions in . Notice that the error grows as we get further away from our initial value. In fact, the graph of the approximation for is obscured by the graph of the exact solution. In addition, a smaller step size gives us a more accurate approximation ( ).   Euler's approximation for    Percent Error    0 0.0 1.0000 1.0000 0.0000 0.00%    1 0.1 1.1000 1.1103 0.0103 0.93%    2 0.2 1.2200 1.2428 0.0228 1.84%    3 0.3 1.3620 1.3997 0.0377 2.69%    4 0.4 1.5282 1.5836 0.0554 3.50%    5 0.5 1.7210 1.7974 0.0764 4.25%    6 0.6 1.9431 2.0442 0.1011 4.95%    10 1.0 3.1875 3.4366 0.2491 7.25%           g(x) = 2*exp(x) -x - 1   f(t,y) = t + y  N=4*10  points = eulers_method(f,0,1,bbox[2],N)   N=4*50  points = eulers_method(f,0,1,bbox[2],N)    exact  h = 0.1  h=0.02        Euler's approximation for    Step sizes for Euler's approximation    Exact Solution    0.1 1.1000 1.1082 1.1102 1.1103    0.2 1.2200 1.2380 1.2426 1.2428    0.3 1.3620 1.3917 1.3993 1.3997    0.4 1.5282 1.5719 1.5831 1.5836    0.5 1.7210 1.7812 1.7966 1.7974    0.6 1.9431 2.0227 2.0431 2.0442    0.7 2.1974 2.2998 2.3261 2.3275    0.8 2.4872 2.6161 2.6493 2.6511    0.9 2.8159 2.9757 3.0170 3.1092    1.0 3.1875 3.3832 3.4238 3.4366      Euler's Method and Error   Consider the initial value problem     Use separation of variables to solve the initial value problem.      Compute for .      Use Euler's method to approximate solutions to the initial value problem for .      Compare the exact values of the solution ( ) to the approximate values of the solution ( ) and comment on what happens as varies from to .       Finding an Error Bound  To fully understand Euler's method, we will need to recall Taylor's theorem from calculus.    If , then where . Taylor's theorem    Given the initial value problem choose to be equally spaced on , we can write where and . Taylor's Theorem tells us that If we know the values of and its derivatives at , then we can determine the value of at .  The simplest approximation can be obtained by taking the first two terms of the Taylor series. That is, we will use a linear approximation, This gives us Euler's method, The terms that we are omitting, all contain powers of of at least degree two. If is small, then for will be very small and these terms will not matter much.  We can actually estimate the error incurred by Euler's method if we make use of Taylor's Theorem.    Let be the unique solution to the initial value problem Euler's method error bound  where . Suppose that is continuous and there exists a constant such that whenever and are in . Also assume that there exists an such that for all . If are the approximations generated by Euler's method for some positive integer , then    The condition that there exists a constant such that whenever and are in is called a Lipschitz condition Lipschitz condition . Many of the functions that we will consider satisfy such a condition. If the condition is satisfied, we can usually say a great deal about the function.   Error bound and actual error    Estimated Error    0 0.0 1.0000 1.0000 0.0000 0.0000    1 0.1 1.1000 1.1103 0.0103 0.0286    2 0.2 1.2200 1.2428 0.0228 0.0602    3 0.3 1.3620 1.3997 0.0377 0.0951    4 0.4 1.5282 1.5836 0.0554 0.1337    5 0.5 1.7210 1.7974 0.0764 0.1763    6 0.6 1.9431 2.0442 0.1011 0.2235    7 0.7 2.1974 2.3275 0.1301 0.2756    8 0.8 2.4872 2.6511 0.1639 0.3331    9 0.9 2.8159 3.1092 0.2033 0.3968    10 1.0 3.1875 3.4366 0.2491 0.4671     We can now compare the estimated error from our theorem to the actual error of our example. We first need to determine and . Since we can take to be one. Since , we can bound on the interval by . Thus, we can bound the error by for . Our results are in .    Improving Euler's Method  If we wish to improve upon Euler's method, we could add more terms of Taylor series. For example, we can obtain a more accurate approximation by using a quadratic Taylor polynomial, Euler's method improved  However, we need to know in order to use this approximation. Using the chain rule from multivariable calculus, we can differentiate both sides of to obtain Thus, our approximation becomes  The problem is that some preliminary analytic work must be done. That is, before we can write a program to compute our solution, we must find and , although this is less of a problem with the availability of computer algebra systems such as Sage .  Around 1900, two German mathematicians, Carle Runge and Martin Kutta, independently invented several numerical algorithms to solve differential equations. These methods, known as Runge-Kutta methods Runge-Kutta method , estimate the higher-order terms of the Taylor series to find an approximation that does not depend on computing derivatives of .  If we consider the initial value problem then or by the Fundamental Theorem of Calculus. In Euler's method, we approximate the right-hand side of by In terms of the definite integral, this is simply a left-hand sum. In the improved Euler's method Euler's method improved or the second-order Runge-Kutta method Runge-Kutta method second-order we will estimate the right-hand side of using the trapezoid rule from calculus, Thus, our algorithm becomes However, we have a problem since appears in the right-hand side of our approximation. To get around this difficulty, we will replace in the right-hand side of with the Euler approximation for . Thus,  To understand that the second-order Runge-Kutta method is actually an improvement over the traditional Euler's method, we will need to use the Taylor approximation for a function of two variables. Let us assume that is defined on some rectangle and that all of the derivatives of are continuously differentiable. Then As in the case of the single variable Taylor series, we can write a Taylor polynomial if the Taylor series is truncated, where the second term is the remainder term and lies on the line segment joining and .  In the Improved Euler's Method, we adopt a formula where That is, The idea is to choose the constants , , , and as accurately as possible in order to duplicate as many terms as possible in the Taylor series We can make equations and agree if we choose and . Since , we obtain Euler's method.  If we are more careful about choosing our parameters, we can obtain agreement up through the term. If we use the two variable Taylor series to expand , we have where means that of the subsequent terms have a factor of with . Using this expression, we obtain a new form for , Since by the chain rule, we can rewrite as We can make equations and agree up through the quadratic terms if we require that If we choose and , these equations are satisfied, and we obtain the improved Euler's method  The improved Euler's method or the second-order Runge-Kutta method is a more sophisticated algorithm that is less prone to error due to the step size . Euler's method is based on truncating the Taylor series after the linear term. Since we know that the error depends on . On the other hand, the error for the improved Euler's method depends on , since  If we use Simpson's rule to estimate the integral in we can improve our accuracy up to . The idea is exactly the same, but the algebra becomes much more tedious. This method is known as the Runge-Kutta method of order 4 and is given by Runge-Kutta method order 4  where    Important Lessons   We can use Euler's method to find an approximate solution to the initial value problem on an interval . If we wish to find approximations at equally spaced points , where and , our approximations should be In practice, no one uses Euler's method. The Runge-Kutta methods are better algorithms.  Taylor's Theorem is a very useful tool for studying differential equations. If , then where .  Error analysis rate of convergence is very important for any numerical algorithm. Our approximation is more accurate for smaller values of . Under reasonable conditions we can also bound the error by where is the unique solution to the initial value problem  The condition that there exists a constant such that whenever and are in is called a Lipschitz condition .  Using Taylor series, we can develop better numerical algorithms to compute solutions of differential equations. The Runge-Kutta methods are an important class of these algorithms.  The improved Euler's method is given by with the error bound depending on .  The Runge-Kutta method of order 4 is given by where with the error bound depending on .       We can use Taylor polynomials to approximate a function near a point . Explain why this approximation can only be expected to be accurate near .       Should we always use Euler's method when approximating a solution to an initial value problem? Why or why not?       Exercises   Finding Solutions  For each of the initial value problem in ,  Write the Euler's method iteration for the given problem, identifying the values and .  Using a step size of , compute the approximations for , , and .  Solve the problem analytically if possible. If it is not possible for you to find the analytic solution, use Sage .  Use the results of (c) and (d), to construct a table of errors for for .     ,      ,      ,      ,      ,    This equation is a first-order linear equation ( ), but it is possible to find the analytic solution using Sage ( ).      ,       Consider the differential equation with initial value .  Find the exact solution of the initial value problem.  Use Euler's method with step size to approximate the solution to the initial value problem on the interval Your solution should include a table of approximate values of the dependent variable as well as the exact values of the dependent variable. Make sure that your approximations are accurate to four decimal places.  Sketch the graph of the approximate and exact solutions.  Use the error bound theorem ( ) to estimate the error at each approximation. Your solution should include a table of approximate values of the dependent variable the exact values of the dependent variable, the error estimates, and the actual error. Make sure that your approximations are accurate to four decimal places.       In this series of exercises, we will prove the error bound theorem for Euler's method ( ).  Use Taylor's Theorem to show that for all and any positive ,  Use part (1) and geometric series to prove the following statement: If and are positive real numbers, and is a sequence satisfying then  When , and the theorem is true. Use Euler's method and Taylor's Theorem to show that where and .  Show that  Let for , , and and apply part (2) to show and derive that for each .     Hints for part (2):  For fixed show that  Now use a geometric sum to show that  Apply part (1) to derive       Sage Numerical Routines for solving ODEs  Not all differential equations can be solved using algebra and calculus even if we are very clever. If we encounter an equation that we cannot solve or use Sage to solve, we must resort to numerical algorithms like Euler's method or one of the Runge-Kutta methods, which are best implemented using a computer. Fortunately, Sage has some very good numerical solvers. Sage will need to know the following to solve a differential equation:  An abstract function,  A differential equation, including an initial condition ,  A Sage command to solve the equation.   Suppose we wish to solve the initial value problem , . We can use Sage to find an algebraic solution.   We can also use Euler's method to find a solution for our initial value problem.   The syntax of eulers_method for the inital value problem with step size on the interval is eulers_method(f, x0, y0, h, x1) Notice that we obtained a table of values. However, we can use the line command from Sage to plot the values .   As we pointed out, eulers_method is not very sophisticated. We have to use a very small step size to get good accuracy, and the method can generate errors if we are not careful. Fortunately, Sage has much better algorithms for solving initial value problems. One such algorithm is desolve_rk4 , which implements the fourth order Runge-Kutta method.   Again, we just get a list of points. However, desolve_rk4 has some nice built-in graphing utilities.   Write the Sage commands to compare the graphs obtained using eulers_method and desolve with the exact solution.   Not only is desolve_rk4 more accurate, it is much easier to use. For more information, see .   "
},
{
  "id": "firstlook04-2",
  "level": "2",
  "url": "firstlook04.html#firstlook04-2",
  "type": "Objectives",
  "number": "1.4",
  "title": "",
  "body": "  To understand that numerical algorithms such as Euler's method allow the approximation of solutions to the initial value problems and that there are more efficient algorithms than Euler's method such as those algorithms that use the Runge-Kutta methods .  To understand that Taylor's Theorem is a very useful tool for studying differential equations.  To understand that error analysis of the rate of convergence is very important for any numerical algorithm.   "
},
{
  "id": "firstlook04-subsection-eulers-method-3",
  "level": "2",
  "url": "firstlook04.html#firstlook04-subsection-eulers-method-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "step size "
},
{
  "id": "firstlook04-subsection-eulers-method-5",
  "level": "2",
  "url": "firstlook04.html#firstlook04-subsection-eulers-method-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Euler's method "
},
{
  "id": "firstlook04-table-euler-approximation",
  "level": "2",
  "url": "firstlook04.html#firstlook04-table-euler-approximation",
  "type": "Table",
  "number": "1.4.1",
  "title": "Euler’s approximation for <span class=\"process-math\">\\(y' = y + t\\)<\/span>",
  "body": " Euler's approximation for    Percent Error    0 0.0 1.0000 1.0000 0.0000 0.00%    1 0.1 1.1000 1.1103 0.0103 0.93%    2 0.2 1.2200 1.2428 0.0228 1.84%    3 0.3 1.3620 1.3997 0.0377 2.69%    4 0.4 1.5282 1.5836 0.0554 3.50%    5 0.5 1.7210 1.7974 0.0764 4.25%    6 0.6 1.9431 2.0442 0.1011 4.95%    10 1.0 3.1875 3.4366 0.2491 7.25%    "
},
{
  "id": "firstlook04-figure-euler-approximation",
  "level": "2",
  "url": "firstlook04.html#firstlook04-figure-euler-approximation",
  "type": "Figure",
  "number": "1.4.2",
  "title": "",
  "body": "      g(x) = 2*exp(x) -x - 1   f(t,y) = t + y  N=4*10  points = eulers_method(f,0,1,bbox[2],N)   N=4*50  points = eulers_method(f,0,1,bbox[2],N)    exact  h = 0.1  h=0.02        Euler's approximation for  "
},
{
  "id": "firstlook04-table-euler-approximation-step-size",
  "level": "2",
  "url": "firstlook04.html#firstlook04-table-euler-approximation-step-size",
  "type": "Table",
  "number": "1.4.3",
  "title": "Step sizes for Euler’s approximation",
  "body": " Step sizes for Euler's approximation    Exact Solution    0.1 1.1000 1.1082 1.1102 1.1103    0.2 1.2200 1.2380 1.2426 1.2428    0.3 1.3620 1.3917 1.3993 1.3997    0.4 1.5282 1.5719 1.5831 1.5836    0.5 1.7210 1.7812 1.7966 1.7974    0.6 1.9431 2.0227 2.0431 2.0442    0.7 2.1974 2.2998 2.3261 2.3275    0.8 2.4872 2.6161 2.6493 2.6511    0.9 2.8159 2.9757 3.0170 3.1092    1.0 3.1875 3.3832 3.4238 3.4366    "
},
{
  "id": "firstlook04-subsection-eulers-method-10",
  "level": "2",
  "url": "firstlook04.html#firstlook04-subsection-eulers-method-10",
  "type": "Activity",
  "number": "1.4.1",
  "title": "Euler’s Method and Error.",
  "body": " Euler's Method and Error   Consider the initial value problem     Use separation of variables to solve the initial value problem.      Compute for .      Use Euler's method to approximate solutions to the initial value problem for .      Compare the exact values of the solution ( ) to the approximate values of the solution ( ) and comment on what happens as varies from to .    "
},
{
  "id": "firstlook04-theorem-taylor",
  "level": "2",
  "url": "firstlook04.html#firstlook04-theorem-taylor",
  "type": "Theorem",
  "number": "1.4.4",
  "title": "",
  "body": "  If , then where . Taylor's theorem   "
},
{
  "id": "firstlook04-theorem-euler-error-bound",
  "level": "2",
  "url": "firstlook04.html#firstlook04-theorem-euler-error-bound",
  "type": "Theorem",
  "number": "1.4.5",
  "title": "",
  "body": "  Let be the unique solution to the initial value problem Euler's method error bound  where . Suppose that is continuous and there exists a constant such that whenever and are in . Also assume that there exists an such that for all . If are the approximations generated by Euler's method for some positive integer , then   "
},
{
  "id": "firstlook04-subsection-error-bound-8",
  "level": "2",
  "url": "firstlook04.html#firstlook04-subsection-error-bound-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Lipschitz condition "
},
{
  "id": "firstlook04-table-euler-approximation-error-bound",
  "level": "2",
  "url": "firstlook04.html#firstlook04-table-euler-approximation-error-bound",
  "type": "Table",
  "number": "1.4.6",
  "title": "Error bound and actual error",
  "body": " Error bound and actual error    Estimated Error    0 0.0 1.0000 1.0000 0.0000 0.0000    1 0.1 1.1000 1.1103 0.0103 0.0286    2 0.2 1.2200 1.2428 0.0228 0.0602    3 0.3 1.3620 1.3997 0.0377 0.0951    4 0.4 1.5282 1.5836 0.0554 0.1337    5 0.5 1.7210 1.7974 0.0764 0.1763    6 0.6 1.9431 2.0442 0.1011 0.2235    7 0.7 2.1974 2.3275 0.1301 0.2756    8 0.8 2.4872 2.6511 0.1639 0.3331    9 0.9 2.8159 3.1092 0.2033 0.3968    10 1.0 3.1875 3.4366 0.2491 0.4671    "
},
{
  "id": "firstlook04-subsection-improving-euler-4",
  "level": "2",
  "url": "firstlook04.html#firstlook04-subsection-improving-euler-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Runge-Kutta methods "
},
{
  "id": "firstlook04-subsection-improving-euler-5",
  "level": "2",
  "url": "firstlook04.html#firstlook04-subsection-improving-euler-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "improved Euler's method second-order Runge-Kutta method "
},
{
  "id": "firstlook04-subsection-important-lessons-2",
  "level": "2",
  "url": "firstlook04.html#firstlook04-subsection-important-lessons-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Lipschitz condition "
},
{
  "id": "rq-firstlook04-taylor",
  "level": "2",
  "url": "firstlook04.html#rq-firstlook04-taylor",
  "type": "Reading Question",
  "number": "1.4.5.1",
  "title": "",
  "body": "  We can use Taylor polynomials to approximate a function near a point . Explain why this approximation can only be expected to be accurate near .    "
},
{
  "id": "rq-firstlook04-euler",
  "level": "2",
  "url": "firstlook04.html#rq-firstlook04-euler",
  "type": "Reading Question",
  "number": "1.4.5.2",
  "title": "",
  "body": "  Should we always use Euler's method when approximating a solution to an initial value problem? Why or why not?    "
},
{
  "id": "firstlook04-exercises-euler-3",
  "level": "2",
  "url": "firstlook04.html#firstlook04-exercises-euler-3",
  "type": "Exercise",
  "number": "1.4.6.1",
  "title": "",
  "body": "  ,   "
},
{
  "id": "firstlook04-exercises-euler-4",
  "level": "2",
  "url": "firstlook04.html#firstlook04-exercises-euler-4",
  "type": "Exercise",
  "number": "1.4.6.2",
  "title": "",
  "body": "  ,   "
},
{
  "id": "firstlook04-exercises-euler-5",
  "level": "2",
  "url": "firstlook04.html#firstlook04-exercises-euler-5",
  "type": "Exercise",
  "number": "1.4.6.3",
  "title": "",
  "body": "  ,   "
},
{
  "id": "firstlook04-exercises-euler-6",
  "level": "2",
  "url": "firstlook04.html#firstlook04-exercises-euler-6",
  "type": "Exercise",
  "number": "1.4.6.4",
  "title": "",
  "body": "  ,   "
},
{
  "id": "firstlook04-exercises-euler-7",
  "level": "2",
  "url": "firstlook04.html#firstlook04-exercises-euler-7",
  "type": "Exercise",
  "number": "1.4.6.5",
  "title": "",
  "body": "  ,    This equation is a first-order linear equation ( ), but it is possible to find the analytic solution using Sage ( ).   "
},
{
  "id": "firstlook04-exercises-euler-8",
  "level": "2",
  "url": "firstlook04.html#firstlook04-exercises-euler-8",
  "type": "Exercise",
  "number": "1.4.6.6",
  "title": "",
  "body": "  ,   "
},
{
  "id": "exercises-firstlook04-3",
  "level": "2",
  "url": "firstlook04.html#exercises-firstlook04-3",
  "type": "Exercise",
  "number": "1.4.6.7",
  "title": "",
  "body": "  Consider the differential equation with initial value .  Find the exact solution of the initial value problem.  Use Euler's method with step size to approximate the solution to the initial value problem on the interval Your solution should include a table of approximate values of the dependent variable as well as the exact values of the dependent variable. Make sure that your approximations are accurate to four decimal places.  Sketch the graph of the approximate and exact solutions.  Use the error bound theorem ( ) to estimate the error at each approximation. Your solution should include a table of approximate values of the dependent variable the exact values of the dependent variable, the error estimates, and the actual error. Make sure that your approximations are accurate to four decimal places.    "
},
{
  "id": "exercises-firstlook04-4",
  "level": "2",
  "url": "firstlook04.html#exercises-firstlook04-4",
  "type": "Exercise",
  "number": "1.4.6.8",
  "title": "",
  "body": "  In this series of exercises, we will prove the error bound theorem for Euler's method ( ).  Use Taylor's Theorem to show that for all and any positive ,  Use part (1) and geometric series to prove the following statement: If and are positive real numbers, and is a sequence satisfying then  When , and the theorem is true. Use Euler's method and Taylor's Theorem to show that where and .  Show that  Let for , , and and apply part (2) to show and derive that for each .     Hints for part (2):  For fixed show that  Now use a geometric sum to show that  Apply part (1) to derive    "
},
{
  "id": "firstlook05",
  "level": "1",
  "url": "firstlook05.html",
  "type": "Section",
  "number": "1.5",
  "title": "First-Order Linear Equations",
  "body": " First-Order Linear Equations    To understand that any first-order linear differential equation  can be solved by multiplying each side of the equation by an integrating factor .  To understand the existence and uniqueness of solutions to first-order initial value problems.     A first-order differential equation differential equation first-order linear is an equation of the form This equation will not be separable provided is nonzero. We shall have to find a new approach to solving such an equation. We could, of course, use a numerical algorithm to solve ; however, we can always find an algebraic solution to a first-order linear differential equation. Moreover, the fact that we can obtain such a solution analytically will prove very useful when we investigate more complicated equations and systems of equations.    Mine Tailings  In any mining operation, tailings are what is left after everything of value has been extracted. For example, in a hard rock mining operation, ore is often pulverized and then processed using chemicals to extract certain minerals of value. Soft rock mining operations such as coal mining or extracting oil from tar sands might use solvents or water to extract any commodity of value. The material that is left over after the minerals, coal, or oil is extracted can often present huge environmental challenges. There are different ways of processing mine tailings, but one way is to store them in a pond, especially if water is used in the mining operation. This method allows any particles that are suspended in the water to settle to the bottom of the pond. The water can then be treated and recycled.  Suppose that we have a gold mining operation and we are storing our tailings in a pond that has an initial volume of 20,000 cubic meters. When we begin our operation, the tailings pond is filled with clean water. The pond has a stream flowing into it, and water is also pumped out of the pond. Chemicals are used in processing gold ore. These chemicals such as sodium cyanide can be highly poisonous and dangerous to the environment, and the water must be treated before it is released into the watershed. Suppose that 1000 cubic meters per day flow into the pond from stream and 1000 cubic meters are pumped from the pond each day to be processed and recycled. Thus, the water level of the pond remains constant.  At time , the water from stream becomes contaminated with chemicals from the mining operation, say at a rate of 5 kilograms of chemicals per 1000 cubic meters. We will assume that water in our tailings pond is well mixed so that the concentration of chemicals through out the pond is fairly uniform. In addition, any particulate matter pumped into the pond from the stream settles to the bottom of the pond at a rate of 50 cubic meters per day. Thus, the volume of our tailings pond is reduced by 50 cubic meters each day, and our tailings pond will become full after 400 days of operation. We shall assume that the particulate matter and the chemicals are included in the 1000 cubic meters that flow into the pond from the stream each day.  We wish to find a differential equation that will model the amount of chemicals in the tailings pond at any particular time. Let be the amount of chemicals in the pond at time . Then is the difference between the rate at which the chemicals are entering the pond and the rate at which the chemicals leave the pond. Since water flows into the pond from the stream at a rate of 1000 cubic meters per day, the rate at which the chemicals enter the pond is 5 kilograms per day. On the other hand, the rate at which the chemicals leave the pond will depend on the amount of chemicals in the pond at time . The volume of the pond is decreasing due to sediment, and at time it is . Thus, the concentration of chemicals in the pond at time is , and the rate at which the chemicals are flowing out of the pond to be recycled is Hence, the differential equation that models the amount of chemical in the tailings pond at time is Of course, we will have to cease mining operations once the pond is full, since there will only be water in the pond if ; that is, when .  Notice that equation is not autonomous. In fact, it is not even separable. We will have to use a different approach to find a solution. First, we will rewrite the equation in the form If we multiply both sides of this equation by , we obtain We now make the crucial observation that the product rule applies to the lefthand side of our equation, Thus, equation becomes Integrating both sides of this equation, we have where is an arbitrary constant. Solving for , we obtain Since , we can quickly determine that and that the solution to our initial value problem is The graph of the solution to our differential equation ( ) fits the situation. Initially, there are no chemicals in the pond, but quickly increases. However, the amount of chemicals decreases as the pond begins to fill with sediment. Eventually, there are no chemicals at .      f(x) = (5\/19)*(400 - x)*(1 - ((400 - x)\/400)^19)          Chemical waste in a tailings pond     First-Order Linear Equations  The differential equation is an example of a first-order linear differential equation. More specifically, a first-order linear differential equation differential equation first-order linear is an equation that can be written in the form Let us first show how to solve first-order linear equations when the coefficient functions are constant. If then we first multiply both sides of the equation by to obtain The left-hand side of the equation is exact differential equation exact . That is, If we integrate both sides of then If we apply the initial condition, we can determine , Thus, the solution that we seek is    first-order linear differential equation    Suppose we wish to solve the initial value problem Multiplying both sides of equation by , we obtain Integrating both sides of this last equation, gives us the following Applying the initial condition , we can conclude that , and    Now let us solve a first-order linear differential equation where the coefficients are not constant. Suppose that where . We will multiply both sides of the equation by and use the product rule to obtain Integrating both sides, we get Thus, the general solution is Using the initial condition to solve for , we find that and We can use Sage to check our solution.    Surprisingly, the strategy in will always work. Suppose that If we choose such that and multiply both sides of the equation by , then Integrating both sides, or The Fundamental Theorem of Calculus tells us that . We say that is an integrating factor integrating factor for the differential equation .   Consider the initial value problem Our integrating factor is Multiplying both of our differential equation by , we obtain or We can now integrate this equation to get The initial condition allows us to find . Therefore, the solution to our initial value problem is    Finding Solutions to First-Order Linear Differential Equations   Solve each of the following initial value problems.     ;      ;      ;      ;      ;       Mixing Models  Many applications involve the mixing of two or more substances together. As we mentioned previously, we can model how petroleum products are mixed together in a refinery, how various ingredients are mixed together in a brewery, or how greenhouse gases move across various layers of the earth's atmosphere.   Suppose that a 100-gallon tank initially contains 50 gallons of salt water containing five pounds of salt. A brine mixture containing one pound of salt per gallon flows into the top of the tank at a rate of 5 gallons per minute. A well mixed solution leaves the tank at rate of 4 gallons per minute. We wish to know how much salt is in the tank, when the tank is full.  To construct our model, we will let be the time (measured in minutes) and set up a differential equation that will measure how fast the amount of salt at time , , is changing. We have the initial condition , and where is the volume at time . The expression is the amount of salt in one gallon at time . We have , since the tank starts with 50 gallons and five gallons are pumped into the tank per minute while four gallons leave the tank during the same time interval. Thus, our differential equation becomes Our equation is linear since we can rewrite it as  An integrating factor for this differential equation is Therefore, if we multiply both sides of equation by , we get We can now apply the product rule to obtain Integrating both sides and simplifying gives us Our initial condition, tells us that and Thus, when the tank is full, and the amount of salt in the tank is pounds. We can use Sage to easily check the solution of our initial value problem.     A Mixing Problem   Suppose that a tank contains 1000 gallons of a solution consisting of 200 pounds of salt dissolved in water. Pure water is pumped into the tank at a rate of 6 gallons per minute. At the same time, the tank is drained at the same rate. Assume that the brine mixture is kept well stirred.     Set up an initial value problem to model the amount of salt in the tank at time .      How long will it take until there is only 20 pounds of salt left in the tank?.       Finance Models  There are a number of problems in finance that can be modeled using differential equations. Let be the balance of an account at time and suppose that the account pays interest at a rate of percent per year compounded continuously. Suppose that we also allow withdrawals of dollars per year. The net increase in the balance between times and can now be described as Thus,  We can solve the equation by multiplying both sides of the equation by the integrating factor to obtain Integrating both sides of this equation, we have or If we know the initial balance in the account, say , we can determine . That is, or Thus, the solution to our initial value problem is   Suppose that your parents have established a money market account with a balance of $50,000 that they will use to help you pay for your college education. The account receives an average annual interest of 4%. You estimate that your tuition, room and board, and other college expenses to be $20,000 per year.  We model this financial situation with the differential equation Rewriting the differential equation as , our integrating factor becomes , and Thus, The solution to this initial value problem is  Your parents have been quite generous but have told you that you must be responsible for the balance of the cost of your education.    Paying for College   Suppose that new parents want to start a college fund for their child. They are willing to invest $2000 per year at a rate of 4%.     Find an initial value problem that models the parents' investment.      How much will be in the college fund when their child turns 18?      What would they need to invest per year to have $80,000 in the college fund when their child turns 18?       Existence and Uniqueness of Solutions  Several questions about the existence and uniqueness of solutions to first-order linear differential equations now arise.  Does an initial value problem always have a solution?  Is the solution unique?  Is the solution globally defined or does it only hold for a small interval?  We can use the following theorem to answer these questions.    If is a differential equation such that , and and are continuous on the open interval , then there exists a unique function satisfying the differential equation and the initial condition on .    If then Integrating both sides of this equation and solving for , we have Since , the constant is uniquely determined. Notice that we have used continuity to guarantee that the integrals exist. We leave it as an exercise to show that is a solution to .      Important Lessons   Any first-order linear differential equation can be solved by multiplying each side of the equation by an integrating factor In this case, we get Integrating both sides, or  If is a differential equation such that , and and are continuous on the open interval , then there exists a unique function satisfying the differential equation and the initial condition on .       Explain in your own words what a first-order linear differential equation is.       What important rule from differential calculus do we use when solving a first-order differential equation?       Exercises   Finding General Solutions  Find the general solution for each equation in .                                                      Solving Initial Value Problems  Solve the initial value problems in .    ,      ,      ,      ,      ,      ,         ,         ,      ,         ,          A 600-liter tank initially contains 200 liters of water containing 10 kilograms of salt. Supposed that water containing 0.1 kilograms of salt per liter flows into the top of the tank at a rate of 10 liters per minute. The water in the tank is kept well mixed, and 5 liters per minute are removed from the bottom of the tank. How much salt is in the tank when the tank is full?    If is the amount of salt in the tank at time , we know that . The volume of the tank is . We can model the amount of salt in the tank at time with a differential equation, The resulting equation is a first order linear differential equation. An integrating factor for this equation is given by Multiplying both sides of the differential equation by , we have Integrating both sides of this equation, we obtain Using the intial condition , we can determine that or The tank is full at time , and the tank contains kilograms of salt when the tank is full.      A manager in a communications company contributes $2400 per year into her retirement fund by making many small deposits throughout the year. The fund grows at a rate of 3.5% per year compounded continuously. After 35 years, she retires and begins and begins withdrawing from the retirement fund at a rate of $3500 per month. If she does not make any deposits after she retires, how long will her retirement fund last? [ Hint : Divide the problem into two smaller problems one that deals with the situation before retirement and one that deals with the problem after retirement.]      Lake Baikal, located in southern Siberia, is only the seventh largest lake in the world in terms of surface area; however, it is the world's deepest lake. The lake has a depth of 1,642 meters, and the bottom lies 1,186.5 meters below sea level. Lake Baikal has a volume of 23,600 cubic kilometers and contains 20% of the world's unfrozen fresh water. In contrast, Lake Superior, the largest of the Great Lakes, has a volume of only 12,100 cubic kilometers. Although 544 rivers flow into Lake Baikal, there is only a single outlet, the Angara River. The outflow of the lake is pretty constant at 60.4 cubic kilometers per year.  Pollution is an increasing concern in Lake Baikal. One of the major polluters has been Baykalsk Pulp and Paper Mill. The mill was constructed in 1966 on the shoreline of Lake Baikal and regularly discharged waste into the lake. The plant was closed in November 2008 due to unprofitability, but production resumed in January 2010. The mill underwent a final bankruptcy in September 2013, but the longterm fate of the mill is still undecided. Levy, Clifford J. (November 8, 2010). Last Gasp for Factory Bequeathed by Soviets. The New York Times. Retrieved March 14, 2014 from .  Suppose that we wish to understand how the pollution level changes in Lake Baikal over a period of years. Hypothetically, let us assume that the Baykalsk Pulp and Paper Mill has been responsible for most of the pollution in Lake Baikal for the last several decades. Suppose that at years the mill ceases operation and there are no longer any pollutants discharged into the lake from the mill although there are still other sources of pollution. Let us assume that the lake is currently 6 times more polluted than these other sources of contaminants. We wish to know how long it will take for the pollution level to reduce to half of its current level of lake. Lake Baikal's waters are well-mixed and well-oxygenated in spite of its great depth, so we can model this situation as a simple mixing problem.  The volume of water in Lake Baikal is , and be the rates of inflow from the numerous rivers that feed the lake and outflow to the Angara River. Assume that is the pollutant concentration flowing into Lake Baikal and is the concentration of the outflow into the Angara River (measured in metric tons per cubic km). If is the amount of solute at time in Lake Baikal, then is the initial amount of solute in the lake. Estimate during the time interval , where is small.  From your estimate of in part (1), write an initial value problem that describes the amount of pollutants in the lake at time .  The equation that you found in part (2) is a first-order linear equation. Solve this equation.  Using part (3), predict how many years it will take to reduce the pollution in Lake Baikal to half of its current level.       Show that is a solution to .     Exact Differential Equations   A first-order differential equation, , is exact if there exists a function such that   If and and have continuous first-order partial derivatives on some rectangle in the -plane, then prove that is exact if and only if  Show that the differential equation is exact.  Solve the differential equation .  In general, the differential equation is not exact. However, we can sometimes transform this equation into an exact equation by multiplying the equation by an integrating factor   Show that is integrating factor for .  Show that is integrating factor for .  Show that is integrating factor for .  Show that is integrating factor for .   Solve the differential equation .     For (e), rewrite the equation as and consider the integrating factor .     Variation of Parameters   Consider the following method of solving the general linear equation of the first order,   If is identically zero, show that the solution is where is a constant.  If is not identically zero, assume that the solution is of the form where is now a function of . By substituting for in the given differential equation , show that must satisfy the condition  Find from Equation . Then substitute for in equation and determine . Verify that the solution obtain in this manner agrees with the solution given in the proof of Theorem . That is, show that this solution is equivalent to the solution where  This technique is know as variation of parameters , which we will revisit when we study second order linear differential equations.     Bernoulli's Equation   Bernoulli's equation is an equation of the form where or 1. Bernoulli's equation is nonlinear and cannot be solved by the techniques that we have used to solve first order linear equations. Polking p. 63   Using the substitution , show that we can transform Bernoulli's equation into the linear equation  Solve the equation .       The first-order nonlinear differential equation is known as the Ricatti equation Ricatti equation and has some useful applications in control theory. If one solution of the Ricatti equation is known, then a more general solution containing an arbitrary constant can be found by substituting into equation to find a first-order linear equation in and , which we can solve to find a general solution to the Ricatti equation.  Show that this first-order linear equation is .  Find the solution to the Ricatti equation given the particular solution .  Find the solution to the Ricatti equation given the particular solution .  Find the solution to the Ricatti equation given the particular solution .      If , then . Substituting into our original equation, we obtain On the other hand, Therefore, which is just the first-order linear equation          Suppose that we have a population that not only grows logistically but also requires a minimum threshold population to survive. For example, the case of the North Pacific right whale, a species now very much on the endangered list. If the population drops too low, whales might not be able to find suitable mates and the species will eventually go extinct. In other words, the population will die out if it drops below a certain threshold. We can model this with the following equation, where is the population of the whales at time and is the carrying capacity. The constants and are positive with .  Find the equilibrium solutions of this equation.  Since equation is autonomous, we can find a solution using separation of variables. Find this solution.  Equation is also a Ricatti equation . Since we know an equilibrium solution from part (1), we can use the method of the previous problem to find a general solution to . Find the general solution using the fact that we have a Ricatti equation and show that your solution agrees with the solution that you found in part (2).       The differential equation is not autonomous, separable, or linear; however, we can solve this equation with a change of variable.  Transform this equation into a new differential equation of the form by letting .  Sketch the phase line for this new equation, , and sketch several solutions.  Find the solutions of the original differential equation that correspond to the equilibrium solutions of . Graph these solutions in -plane. Also, sketch the graphs of the solutions that you plotted in part (b).  Solve the differential new equation and use this information to solve the original differential equation.      "
},
{
  "id": "firstlook05-2",
  "level": "2",
  "url": "firstlook05.html#firstlook05-2",
  "type": "Objectives",
  "number": "1.5",
  "title": "",
  "body": "  To understand that any first-order linear differential equation  can be solved by multiplying each side of the equation by an integrating factor .  To understand the existence and uniqueness of solutions to first-order initial value problems.   "
},
{
  "id": "firstlook05-3-1",
  "level": "2",
  "url": "firstlook05.html#firstlook05-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "first-order differential equation "
},
{
  "id": "firstlook05-figure-tailings-pond",
  "level": "2",
  "url": "firstlook05.html#firstlook05-figure-tailings-pond",
  "type": "Figure",
  "number": "1.5.1",
  "title": "",
  "body": "    f(x) = (5\/19)*(400 - x)*(1 - ((400 - x)\/400)^19)          Chemical waste in a tailings pond  "
},
{
  "id": "firstlook05-subsection-first-order-linear-de-2",
  "level": "2",
  "url": "firstlook05.html#firstlook05-subsection-first-order-linear-de-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "first-order linear differential equation exact "
},
{
  "id": "firstlook05-subsection-first-order-linear-de-4",
  "level": "2",
  "url": "firstlook05.html#firstlook05-subsection-first-order-linear-de-4",
  "type": "Example",
  "number": "1.5.2",
  "title": "",
  "body": " Suppose we wish to solve the initial value problem Multiplying both sides of equation by , we obtain Integrating both sides of this last equation, gives us the following Applying the initial condition , we can conclude that , and  "
},
{
  "id": "firstlook05-example-nonconstant-coeff",
  "level": "2",
  "url": "firstlook05.html#firstlook05-example-nonconstant-coeff",
  "type": "Example",
  "number": "1.5.3",
  "title": "",
  "body": " Now let us solve a first-order linear differential equation where the coefficients are not constant. Suppose that where . We will multiply both sides of the equation by and use the product rule to obtain Integrating both sides, we get Thus, the general solution is Using the initial condition to solve for , we find that and We can use Sage to check our solution.  "
},
{
  "id": "firstlook05-subsection-first-order-linear-de-7",
  "level": "2",
  "url": "firstlook05.html#firstlook05-subsection-first-order-linear-de-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "integrating factor "
},
{
  "id": "firstlook05-subsection-first-order-linear-de-8",
  "level": "2",
  "url": "firstlook05.html#firstlook05-subsection-first-order-linear-de-8",
  "type": "Example",
  "number": "1.5.4",
  "title": "",
  "body": " Consider the initial value problem Our integrating factor is Multiplying both of our differential equation by , we obtain or We can now integrate this equation to get The initial condition allows us to find . Therefore, the solution to our initial value problem is  "
},
{
  "id": "firstlook05-subsection-first-order-linear-de-9",
  "level": "2",
  "url": "firstlook05.html#firstlook05-subsection-first-order-linear-de-9",
  "type": "Activity",
  "number": "1.5.1",
  "title": "Finding Solutions to First-Order Linear Differential Equations.",
  "body": " Finding Solutions to First-Order Linear Differential Equations   Solve each of the following initial value problems.     ;      ;      ;      ;      ;    "
},
{
  "id": "firstlook05-subsection-mixing-models-3",
  "level": "2",
  "url": "firstlook05.html#firstlook05-subsection-mixing-models-3",
  "type": "Example",
  "number": "1.5.5",
  "title": "",
  "body": " Suppose that a 100-gallon tank initially contains 50 gallons of salt water containing five pounds of salt. A brine mixture containing one pound of salt per gallon flows into the top of the tank at a rate of 5 gallons per minute. A well mixed solution leaves the tank at rate of 4 gallons per minute. We wish to know how much salt is in the tank, when the tank is full.  To construct our model, we will let be the time (measured in minutes) and set up a differential equation that will measure how fast the amount of salt at time , , is changing. We have the initial condition , and where is the volume at time . The expression is the amount of salt in one gallon at time . We have , since the tank starts with 50 gallons and five gallons are pumped into the tank per minute while four gallons leave the tank during the same time interval. Thus, our differential equation becomes Our equation is linear since we can rewrite it as  An integrating factor for this differential equation is Therefore, if we multiply both sides of equation by , we get We can now apply the product rule to obtain Integrating both sides and simplifying gives us Our initial condition, tells us that and Thus, when the tank is full, and the amount of salt in the tank is pounds. We can use Sage to easily check the solution of our initial value problem.  "
},
{
  "id": "firstlook05-subsection-mixing-models-5",
  "level": "2",
  "url": "firstlook05.html#firstlook05-subsection-mixing-models-5",
  "type": "Activity",
  "number": "1.5.2",
  "title": "A Mixing Problem.",
  "body": " A Mixing Problem   Suppose that a tank contains 1000 gallons of a solution consisting of 200 pounds of salt dissolved in water. Pure water is pumped into the tank at a rate of 6 gallons per minute. At the same time, the tank is drained at the same rate. Assume that the brine mixture is kept well stirred.     Set up an initial value problem to model the amount of salt in the tank at time .      How long will it take until there is only 20 pounds of salt left in the tank?.    "
},
{
  "id": "firstlook05-subsection-finance-models-4",
  "level": "2",
  "url": "firstlook05.html#firstlook05-subsection-finance-models-4",
  "type": "Example",
  "number": "1.5.6",
  "title": "",
  "body": " Suppose that your parents have established a money market account with a balance of $50,000 that they will use to help you pay for your college education. The account receives an average annual interest of 4%. You estimate that your tuition, room and board, and other college expenses to be $20,000 per year.  We model this financial situation with the differential equation Rewriting the differential equation as , our integrating factor becomes , and Thus, The solution to this initial value problem is  Your parents have been quite generous but have told you that you must be responsible for the balance of the cost of your education.  "
},
{
  "id": "firstlook05-subsection-finance-models-5",
  "level": "2",
  "url": "firstlook05.html#firstlook05-subsection-finance-models-5",
  "type": "Activity",
  "number": "1.5.3",
  "title": "Paying for College.",
  "body": " Paying for College   Suppose that new parents want to start a college fund for their child. They are willing to invest $2000 per year at a rate of 4%.     Find an initial value problem that models the parents' investment.      How much will be in the college fund when their child turns 18?      What would they need to invest per year to have $80,000 in the college fund when their child turns 18?    "
},
{
  "id": "theorem-firstlook05-first-order-linear-existence",
  "level": "2",
  "url": "firstlook05.html#theorem-firstlook05-first-order-linear-existence",
  "type": "Theorem",
  "number": "1.5.7",
  "title": "",
  "body": "  If is a differential equation such that , and and are continuous on the open interval , then there exists a unique function satisfying the differential equation and the initial condition on .    If then Integrating both sides of this equation and solving for , we have Since , the constant is uniquely determined. Notice that we have used continuity to guarantee that the integrals exist. We leave it as an exercise to show that is a solution to .   "
},
{
  "id": "rq-firstlook05-first-order",
  "level": "2",
  "url": "firstlook05.html#rq-firstlook05-first-order",
  "type": "Reading Question",
  "number": "1.5.7.1",
  "title": "",
  "body": "  Explain in your own words what a first-order linear differential equation is.    "
},
{
  "id": "rq-firstlook05-product-rule",
  "level": "2",
  "url": "firstlook05.html#rq-firstlook05-product-rule",
  "type": "Reading Question",
  "number": "1.5.7.2",
  "title": "",
  "body": "  What important rule from differential calculus do we use when solving a first-order differential equation?    "
},
{
  "id": "firstlook05-exercises-find-solutions-3",
  "level": "2",
  "url": "firstlook05.html#firstlook05-exercises-find-solutions-3",
  "type": "Exercise",
  "number": "1.5.8.1",
  "title": "",
  "body": "    "
},
{
  "id": "firstlook05-exercises-find-solutions-4",
  "level": "2",
  "url": "firstlook05.html#firstlook05-exercises-find-solutions-4",
  "type": "Exercise",
  "number": "1.5.8.2",
  "title": "",
  "body": "    "
},
{
  "id": "firstlook05-exercises-find-solutions-5",
  "level": "2",
  "url": "firstlook05.html#firstlook05-exercises-find-solutions-5",
  "type": "Exercise",
  "number": "1.5.8.3",
  "title": "",
  "body": "    "
},
{
  "id": "firstlook05-exercises-find-solutions-6",
  "level": "2",
  "url": "firstlook05.html#firstlook05-exercises-find-solutions-6",
  "type": "Exercise",
  "number": "1.5.8.4",
  "title": "",
  "body": "    "
},
{
  "id": "firstlook05-exercises-find-solutions-7",
  "level": "2",
  "url": "firstlook05.html#firstlook05-exercises-find-solutions-7",
  "type": "Exercise",
  "number": "1.5.8.5",
  "title": "",
  "body": "    "
},
{
  "id": "firstlook05-exercises-find-solutions-8",
  "level": "2",
  "url": "firstlook05.html#firstlook05-exercises-find-solutions-8",
  "type": "Exercise",
  "number": "1.5.8.6",
  "title": "",
  "body": "    "
},
{
  "id": "firstlook05-exercises-find-solutions-9",
  "level": "2",
  "url": "firstlook05.html#firstlook05-exercises-find-solutions-9",
  "type": "Exercise",
  "number": "1.5.8.7",
  "title": "",
  "body": "    "
},
{
  "id": "firstlook05-exercises-find-solutions-10",
  "level": "2",
  "url": "firstlook05.html#firstlook05-exercises-find-solutions-10",
  "type": "Exercise",
  "number": "1.5.8.8",
  "title": "",
  "body": "    "
},
{
  "id": "firstlook05-exercises-find-solutions-11",
  "level": "2",
  "url": "firstlook05.html#firstlook05-exercises-find-solutions-11",
  "type": "Exercise",
  "number": "1.5.8.9",
  "title": "",
  "body": "    "
},
{
  "id": "firstlook05-exercises-find-solutions-12",
  "level": "2",
  "url": "firstlook05.html#firstlook05-exercises-find-solutions-12",
  "type": "Exercise",
  "number": "1.5.8.10",
  "title": "",
  "body": "    "
},
{
  "id": "firstlook05-exercises-solve-ivps-3",
  "level": "2",
  "url": "firstlook05.html#firstlook05-exercises-solve-ivps-3",
  "type": "Exercise",
  "number": "1.5.8.11",
  "title": "",
  "body": "  ,   "
},
{
  "id": "firstlook05-exercises-solve-ivps-4",
  "level": "2",
  "url": "firstlook05.html#firstlook05-exercises-solve-ivps-4",
  "type": "Exercise",
  "number": "1.5.8.12",
  "title": "",
  "body": "  ,   "
},
{
  "id": "firstlook05-exercises-solve-ivps-5",
  "level": "2",
  "url": "firstlook05.html#firstlook05-exercises-solve-ivps-5",
  "type": "Exercise",
  "number": "1.5.8.13",
  "title": "",
  "body": "  ,   "
},
{
  "id": "firstlook05-exercises-solve-ivps-6",
  "level": "2",
  "url": "firstlook05.html#firstlook05-exercises-solve-ivps-6",
  "type": "Exercise",
  "number": "1.5.8.14",
  "title": "",
  "body": "  ,   "
},
{
  "id": "firstlook05-exercises-solve-ivps-7",
  "level": "2",
  "url": "firstlook05.html#firstlook05-exercises-solve-ivps-7",
  "type": "Exercise",
  "number": "1.5.8.15",
  "title": "",
  "body": "  ,   "
},
{
  "id": "firstlook05-exercises-solve-ivps-8",
  "level": "2",
  "url": "firstlook05.html#firstlook05-exercises-solve-ivps-8",
  "type": "Exercise",
  "number": "1.5.8.16",
  "title": "",
  "body": "  ,      "
},
{
  "id": "firstlook05-exercises-solve-ivps-9",
  "level": "2",
  "url": "firstlook05.html#firstlook05-exercises-solve-ivps-9",
  "type": "Exercise",
  "number": "1.5.8.17",
  "title": "",
  "body": "  ,      "
},
{
  "id": "firstlook05-exercises-solve-ivps-10",
  "level": "2",
  "url": "firstlook05.html#firstlook05-exercises-solve-ivps-10",
  "type": "Exercise",
  "number": "1.5.8.18",
  "title": "",
  "body": "  ,   "
},
{
  "id": "firstlook05-exercises-solve-ivps-11",
  "level": "2",
  "url": "firstlook05.html#firstlook05-exercises-solve-ivps-11",
  "type": "Exercise",
  "number": "1.5.8.19",
  "title": "",
  "body": "  ,      "
},
{
  "id": "firstlook05-exercises-solve-ivps-12",
  "level": "2",
  "url": "firstlook05.html#firstlook05-exercises-solve-ivps-12",
  "type": "Exercise",
  "number": "1.5.8.20",
  "title": "",
  "body": "  ,      "
},
{
  "id": "exercises-firstlook05-4",
  "level": "2",
  "url": "firstlook05.html#exercises-firstlook05-4",
  "type": "Exercise",
  "number": "1.5.8.21",
  "title": "",
  "body": "  A 600-liter tank initially contains 200 liters of water containing 10 kilograms of salt. Supposed that water containing 0.1 kilograms of salt per liter flows into the top of the tank at a rate of 10 liters per minute. The water in the tank is kept well mixed, and 5 liters per minute are removed from the bottom of the tank. How much salt is in the tank when the tank is full?    If is the amount of salt in the tank at time , we know that . The volume of the tank is . We can model the amount of salt in the tank at time with a differential equation, The resulting equation is a first order linear differential equation. An integrating factor for this equation is given by Multiplying both sides of the differential equation by , we have Integrating both sides of this equation, we obtain Using the intial condition , we can determine that or The tank is full at time , and the tank contains kilograms of salt when the tank is full.   "
},
{
  "id": "exercises-firstlook05-5",
  "level": "2",
  "url": "firstlook05.html#exercises-firstlook05-5",
  "type": "Exercise",
  "number": "1.5.8.22",
  "title": "",
  "body": "  A manager in a communications company contributes $2400 per year into her retirement fund by making many small deposits throughout the year. The fund grows at a rate of 3.5% per year compounded continuously. After 35 years, she retires and begins and begins withdrawing from the retirement fund at a rate of $3500 per month. If she does not make any deposits after she retires, how long will her retirement fund last? [ Hint : Divide the problem into two smaller problems one that deals with the situation before retirement and one that deals with the problem after retirement.]   "
},
{
  "id": "exercises-firstlook05-6",
  "level": "2",
  "url": "firstlook05.html#exercises-firstlook05-6",
  "type": "Exercise",
  "number": "1.5.8.23",
  "title": "",
  "body": "  Lake Baikal, located in southern Siberia, is only the seventh largest lake in the world in terms of surface area; however, it is the world's deepest lake. The lake has a depth of 1,642 meters, and the bottom lies 1,186.5 meters below sea level. Lake Baikal has a volume of 23,600 cubic kilometers and contains 20% of the world's unfrozen fresh water. In contrast, Lake Superior, the largest of the Great Lakes, has a volume of only 12,100 cubic kilometers. Although 544 rivers flow into Lake Baikal, there is only a single outlet, the Angara River. The outflow of the lake is pretty constant at 60.4 cubic kilometers per year.  Pollution is an increasing concern in Lake Baikal. One of the major polluters has been Baykalsk Pulp and Paper Mill. The mill was constructed in 1966 on the shoreline of Lake Baikal and regularly discharged waste into the lake. The plant was closed in November 2008 due to unprofitability, but production resumed in January 2010. The mill underwent a final bankruptcy in September 2013, but the longterm fate of the mill is still undecided. Levy, Clifford J. (November 8, 2010). Last Gasp for Factory Bequeathed by Soviets. The New York Times. Retrieved March 14, 2014 from .  Suppose that we wish to understand how the pollution level changes in Lake Baikal over a period of years. Hypothetically, let us assume that the Baykalsk Pulp and Paper Mill has been responsible for most of the pollution in Lake Baikal for the last several decades. Suppose that at years the mill ceases operation and there are no longer any pollutants discharged into the lake from the mill although there are still other sources of pollution. Let us assume that the lake is currently 6 times more polluted than these other sources of contaminants. We wish to know how long it will take for the pollution level to reduce to half of its current level of lake. Lake Baikal's waters are well-mixed and well-oxygenated in spite of its great depth, so we can model this situation as a simple mixing problem.  The volume of water in Lake Baikal is , and be the rates of inflow from the numerous rivers that feed the lake and outflow to the Angara River. Assume that is the pollutant concentration flowing into Lake Baikal and is the concentration of the outflow into the Angara River (measured in metric tons per cubic km). If is the amount of solute at time in Lake Baikal, then is the initial amount of solute in the lake. Estimate during the time interval , where is small.  From your estimate of in part (1), write an initial value problem that describes the amount of pollutants in the lake at time .  The equation that you found in part (2) is a first-order linear equation. Solve this equation.  Using part (3), predict how many years it will take to reduce the pollution in Lake Baikal to half of its current level.    "
},
{
  "id": "exercises-firstlook05-7",
  "level": "2",
  "url": "firstlook05.html#exercises-firstlook05-7",
  "type": "Exercise",
  "number": "1.5.8.24",
  "title": "",
  "body": "  Show that is a solution to .   "
},
{
  "id": "exercises-firstlook05-8",
  "level": "2",
  "url": "firstlook05.html#exercises-firstlook05-8",
  "type": "Exercise",
  "number": "1.5.8.25",
  "title": "Exact Differential Equations.",
  "body": " Exact Differential Equations   A first-order differential equation, , is exact if there exists a function such that   If and and have continuous first-order partial derivatives on some rectangle in the -plane, then prove that is exact if and only if  Show that the differential equation is exact.  Solve the differential equation .  In general, the differential equation is not exact. However, we can sometimes transform this equation into an exact equation by multiplying the equation by an integrating factor   Show that is integrating factor for .  Show that is integrating factor for .  Show that is integrating factor for .  Show that is integrating factor for .   Solve the differential equation .     For (e), rewrite the equation as and consider the integrating factor .   "
},
{
  "id": "exercises-firstlook05-9",
  "level": "2",
  "url": "firstlook05.html#exercises-firstlook05-9",
  "type": "Exercise",
  "number": "1.5.8.26",
  "title": "Variation of Parameters.",
  "body": " Variation of Parameters   Consider the following method of solving the general linear equation of the first order,   If is identically zero, show that the solution is where is a constant.  If is not identically zero, assume that the solution is of the form where is now a function of . By substituting for in the given differential equation , show that must satisfy the condition  Find from Equation . Then substitute for in equation and determine . Verify that the solution obtain in this manner agrees with the solution given in the proof of Theorem . That is, show that this solution is equivalent to the solution where  This technique is know as variation of parameters , which we will revisit when we study second order linear differential equations.   "
},
{
  "id": "exercises-firstlook05-10",
  "level": "2",
  "url": "firstlook05.html#exercises-firstlook05-10",
  "type": "Exercise",
  "number": "1.5.8.27",
  "title": "Bernoulli’s Equation.",
  "body": " Bernoulli's Equation   Bernoulli's equation is an equation of the form where or 1. Bernoulli's equation is nonlinear and cannot be solved by the techniques that we have used to solve first order linear equations. Polking p. 63   Using the substitution , show that we can transform Bernoulli's equation into the linear equation  Solve the equation .    "
},
{
  "id": "exercises-firstlook05-11",
  "level": "2",
  "url": "firstlook05.html#exercises-firstlook05-11",
  "type": "Exercise",
  "number": "1.5.8.28",
  "title": "",
  "body": "  The first-order nonlinear differential equation is known as the Ricatti equation Ricatti equation and has some useful applications in control theory. If one solution of the Ricatti equation is known, then a more general solution containing an arbitrary constant can be found by substituting into equation to find a first-order linear equation in and , which we can solve to find a general solution to the Ricatti equation.  Show that this first-order linear equation is .  Find the solution to the Ricatti equation given the particular solution .  Find the solution to the Ricatti equation given the particular solution .  Find the solution to the Ricatti equation given the particular solution .      If , then . Substituting into our original equation, we obtain On the other hand, Therefore, which is just the first-order linear equation       "
},
{
  "id": "exercises-firstlook05-12",
  "level": "2",
  "url": "firstlook05.html#exercises-firstlook05-12",
  "type": "Exercise",
  "number": "1.5.8.29",
  "title": "",
  "body": "  Suppose that we have a population that not only grows logistically but also requires a minimum threshold population to survive. For example, the case of the North Pacific right whale, a species now very much on the endangered list. If the population drops too low, whales might not be able to find suitable mates and the species will eventually go extinct. In other words, the population will die out if it drops below a certain threshold. We can model this with the following equation, where is the population of the whales at time and is the carrying capacity. The constants and are positive with .  Find the equilibrium solutions of this equation.  Since equation is autonomous, we can find a solution using separation of variables. Find this solution.  Equation is also a Ricatti equation . Since we know an equilibrium solution from part (1), we can use the method of the previous problem to find a general solution to . Find the general solution using the fact that we have a Ricatti equation and show that your solution agrees with the solution that you found in part (2).    "
},
{
  "id": "exercises-firstlook05-13",
  "level": "2",
  "url": "firstlook05.html#exercises-firstlook05-13",
  "type": "Exercise",
  "number": "1.5.8.30",
  "title": "",
  "body": "  The differential equation is not autonomous, separable, or linear; however, we can solve this equation with a change of variable.  Transform this equation into a new differential equation of the form by letting .  Sketch the phase line for this new equation, , and sketch several solutions.  Find the solutions of the original differential equation that correspond to the equilibrium solutions of . Graph these solutions in -plane. Also, sketch the graphs of the solutions that you plotted in part (b).  Solve the differential new equation and use this information to solve the original differential equation.    "
},
{
  "id": "firstlook06",
  "level": "1",
  "url": "firstlook06.html",
  "type": "Section",
  "number": "1.6",
  "title": "Existence and Uniqueness of Solutions",
  "body": " Existence and Uniqueness of Solutions    To understand that the existence and uniqueness of solutions of differential equations have important implications.     If and is a linear differential equation, we have already shown that a solution exists and is unique. We will now take up the question of existence and uniqueness of solutions for all first-order differential equations. The existence and uniqueness of solutions will prove to be very important even when we consider applications of differential equations.    The Existence and Uniqueness Theorem  The following theorem tells us that solutions to first-order differential equations exist and are unique under certain reasonable conditions.   Existence and Uniqueness Theorem   Let have the initial condition . If and are continuous functions on the rectangle there exists a unique solution for and on some interval contained in the interval . Existence and Uniqueness Theorem    Let us examine some consequences of the existence and uniqueness of solutions.   Consider the initial value problem In this case is continuous at as is Therefore, a solution to the initial value problem must exist. However, finding such a solution in terms of elementary functions may be quite difficult if not impossible.    Consider the initial value problem with and . Separating the variables, Thus, or If , the initial condition is satisfied and is a solution for . However, we can find two additional solutions for : This is especially troubling if we are looking for equilibrium solutions. Although is an autonomous differential equation, there is no equilibrium solution at . The problem is that is not defined at .    Suppose that with . Since and are continuous everywhere, a unique solution exists near . Separating the variables, we see that or Therefore, a solution also exists on if . In the case that , the solution is and a solution exists on . Solutions are only guaranteed to exist on an open interval containing the initial value and are very dependent on the initial condition.    Solutions Curves Cannot Cross  The Existence and Uniqueness Theorem tells us that the integral curves of any differential equation satisfying the appropriate hypothesis, cannot cross. If the curves did cross, we could take the point of intersection as the initial value for the differential equation. In this case, we would no longer be guaranteed a unique solution to a differential equation.    Applying the Existence and Uniqueness Theorem   Which of the following initial value problems are guaranteed to have a unique solution by the Existence and Uniqueness Theorem ( )? In each case, justify your conclusion.     ,      ,      ,      ,      ,      ,      ,       Picard Iteration  It was Emile Picard (1856 1941) who developed the method of successive approximations to show the existence of solutions of ordinary differential equations. He proved that it is possible to construct a sequence of functions that converges to a solution of the differential equation. One of the first steps towards understanding Picard iteration Picard iteration is to realize that an initial value problem can be recast in terms of an integral equation.    The function is a solution to the initial value problem if and only if is a solution to the integral equation     Suppose that is a solution to on some interval containing . Since is continuous on and is continuous on , the function is also continuous on . Integrating both sides of and applying the Fundamental Theorem of Calculus, we obtain Since , the function is a solution of the integral equation.  Conversely, assume that If we differentiate both sides of this equation, we obtain . Since the initial condition is fulfilled.   To show the existence of a solution to the initial value problem we will construct a sequence of functions, , that will converge to a function that is a solution to the integral equation We define the first function of the sequence using the initial condition, We derive the next function in our sequence using the right-hand side of the integral equation, Subsequent terms in the sequence can be defined recursively, Our goal is to show that as . Furthermore, we need to show that is the continuous, unique solution to our initial value problem. We will leave the proof of Picard's Theorem to a series of exercises ( ), but let us see how this works by developing an example.   Consider the exponential growth equation, We already know that the solution is . We define the first few terms of our sequence as follows: The next term in the sequence is and the th term is However, this is just the th partial sum for the power series for , which is what we expected.     Important Lessons   Existence and uniqueness of solutions of differential equations has important implications. Let have the initial condition . If and are continuous functions on the rectangle there exists a unique solution for and on some interval contained in the interval . In particular,  Solutions are only guaranteed to exist locally.  Uniqueness is especially important when it comes to finding equilibrium solutions.  Uniqueness of solutions tells us that the integral curves for a differential equation cannot cross.   The function is a solution to the initial value problem if and only if is a solution to the integral equation  Existence and uniqueness of solutions is proved by Picard iteration. This is of particular interest since the proof actually tells us how to construct a sequence of functions that converge to our solution.       Explain in your own words.       The differential equations and has two solutions, and . Why does this not contradict ?       Exercises    Which of the following initial value problems are guaranteed to have a unique solution by the Existence and Uniqueness Theorem ( )? In each case, justify your conclusion.  ,  ,  ,  ,  ,  ,  ,      There exists a unique solution to , , since and are continuous at the point .  The Existence and Uniqueness Theorem does not apply to , , since is not continuous at .  There exists a unique solution to , , since and are both continuous at the point .  The Existence and Uniqueness Theorem does not apply to , , since is not continuous at .  There exists a unique solution to , , since and are both continuous at the point .  There exists a unique solution to , , since and are both continuous at the point .  The Existence and Uniqueness Theorem does not apply to , , since is not continuous at .       Find an explicit solution to the initial value problem Use your solution to determine the interval of existence.      Consider the initial value problem   Show that the constant function, , is a solution to the initial value problem.  Show that is a solution for the initial value problem, where is any real number. Hence, there exists an infinite number of solutions to the initial value problem.  Explain why this example does not contradict the Existence and Uniqueness Theorem.     (b) Make sure that the derivative of exists at .      Consider the initial value problem   Use the fact that is a first-order linear differential equation to find a solution to the initial value problem.  Let and use Picard iteration to find .  Show that the sequence converges to the exact solution that you found in part (a) as .      Proof of the Existence and Uniqueness Theorem  In , prove the Existence and Uniqueness Theorem for first-order differential equations.    Use the Fundamental Theorem of Calculus to show that the function is a solution to the initial value problem if and only if is a solution to the integral equation      If is continuous on the rectangle prove that there exists a such that for all and in .      Define the sequence by Use the result of the previous exercise to show that      Show that there exists an such that      Show that      Use mathematical induction to show that      Since we can view as a partial sum for the series If we can show that this series converges absolutely, then our sequence will converge to a function . Show that where is the maximum distance between and the boundary of the rectangle . Since , we know that converges to a continuous function that solves our equation. We must a theorem from advanced calculus here to ensure uniform continuity (see ). Any sequence of functions that converges uniformly, must converge to a continuous function.      To show uniqueness, assume that and are both solutions to Show that       Define A similar argument will work for .  then and for . Show that  Since we know that Use this fact to show that Conclude that for or for all and .        Let for and show that This is an example of a sequence of continuous functions that does not converge to a continuous function, which helps explain the need for uniform continuity uniform continuity in the proof of the Existence and Uniqueness Theorem.     "
},
{
  "id": "firstlook06-2",
  "level": "2",
  "url": "firstlook06.html#firstlook06-2",
  "type": "Objectives",
  "number": "1.6",
  "title": "",
  "body": "  To understand that the existence and uniqueness of solutions of differential equations have important implications.   "
},
{
  "id": "firstlook06-theorem-existence-uniqueness",
  "level": "2",
  "url": "firstlook06.html#firstlook06-theorem-existence-uniqueness",
  "type": "Theorem",
  "number": "1.6.1",
  "title": "Existence and Uniqueness Theorem.",
  "body": " Existence and Uniqueness Theorem   Let have the initial condition . If and are continuous functions on the rectangle there exists a unique solution for and on some interval contained in the interval . Existence and Uniqueness Theorem   "
},
{
  "id": "firstlook06-subsection-existence-5",
  "level": "2",
  "url": "firstlook06.html#firstlook06-subsection-existence-5",
  "type": "Example",
  "number": "1.6.2",
  "title": "",
  "body": " Consider the initial value problem In this case is continuous at as is Therefore, a solution to the initial value problem must exist. However, finding such a solution in terms of elementary functions may be quite difficult if not impossible.  "
},
{
  "id": "firstlook06-subsection-existence-6",
  "level": "2",
  "url": "firstlook06.html#firstlook06-subsection-existence-6",
  "type": "Example",
  "number": "1.6.3",
  "title": "",
  "body": " Consider the initial value problem with and . Separating the variables, Thus, or If , the initial condition is satisfied and is a solution for . However, we can find two additional solutions for : This is especially troubling if we are looking for equilibrium solutions. Although is an autonomous differential equation, there is no equilibrium solution at . The problem is that is not defined at .  "
},
{
  "id": "firstlook06-subsection-existence-7",
  "level": "2",
  "url": "firstlook06.html#firstlook06-subsection-existence-7",
  "type": "Example",
  "number": "1.6.4",
  "title": "",
  "body": " Suppose that with . Since and are continuous everywhere, a unique solution exists near . Separating the variables, we see that or Therefore, a solution also exists on if . In the case that , the solution is and a solution exists on . Solutions are only guaranteed to exist on an open interval containing the initial value and are very dependent on the initial condition.  "
},
{
  "id": "firstlook06-subsection-existence-8",
  "level": "2",
  "url": "firstlook06.html#firstlook06-subsection-existence-8",
  "type": "Remark",
  "number": "1.6.5",
  "title": "Solutions Curves Cannot Cross.",
  "body": " Solutions Curves Cannot Cross  The Existence and Uniqueness Theorem tells us that the integral curves of any differential equation satisfying the appropriate hypothesis, cannot cross. If the curves did cross, we could take the point of intersection as the initial value for the differential equation. In this case, we would no longer be guaranteed a unique solution to a differential equation.  "
},
{
  "id": "firstlook06-subsection-existence-9",
  "level": "2",
  "url": "firstlook06.html#firstlook06-subsection-existence-9",
  "type": "Activity",
  "number": "1.6.1",
  "title": "Applying the Existence and Uniqueness Theorem.",
  "body": " Applying the Existence and Uniqueness Theorem   Which of the following initial value problems are guaranteed to have a unique solution by the Existence and Uniqueness Theorem ( )? In each case, justify your conclusion.     ,      ,      ,      ,      ,      ,      ,    "
},
{
  "id": "firstlook06-subsection-picard-2",
  "level": "2",
  "url": "firstlook06.html#firstlook06-subsection-picard-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Picard iteration "
},
{
  "id": "firstlook06-theorem-picard",
  "level": "2",
  "url": "firstlook06.html#firstlook06-theorem-picard",
  "type": "Theorem",
  "number": "1.6.6",
  "title": "",
  "body": "  The function is a solution to the initial value problem if and only if is a solution to the integral equation   "
},
{
  "id": "firstlook06-subsection-picard-4",
  "level": "2",
  "url": "firstlook06.html#firstlook06-subsection-picard-4",
  "type": "Proof",
  "number": "1.6.2.1",
  "title": "",
  "body": " Suppose that is a solution to on some interval containing . Since is continuous on and is continuous on , the function is also continuous on . Integrating both sides of and applying the Fundamental Theorem of Calculus, we obtain Since , the function is a solution of the integral equation.  Conversely, assume that If we differentiate both sides of this equation, we obtain . Since the initial condition is fulfilled.  "
},
{
  "id": "firstlook06-subsection-picard-6",
  "level": "2",
  "url": "firstlook06.html#firstlook06-subsection-picard-6",
  "type": "Example",
  "number": "1.6.7",
  "title": "",
  "body": " Consider the exponential growth equation, We already know that the solution is . We define the first few terms of our sequence as follows: The next term in the sequence is and the th term is However, this is just the th partial sum for the power series for , which is what we expected.  "
},
{
  "id": "rq-firstlook06-existence-uniqueness",
  "level": "2",
  "url": "firstlook06.html#rq-firstlook06-existence-uniqueness",
  "type": "Reading Question",
  "number": "1.6.4.1",
  "title": "",
  "body": "  Explain in your own words.    "
},
{
  "id": "rq-firstlook06-counter-example",
  "level": "2",
  "url": "firstlook06.html#rq-firstlook06-counter-example",
  "type": "Reading Question",
  "number": "1.6.4.2",
  "title": "",
  "body": "  The differential equations and has two solutions, and . Why does this not contradict ?    "
},
{
  "id": "exercises-firstlook06-2",
  "level": "2",
  "url": "firstlook06.html#exercises-firstlook06-2",
  "type": "Exercise",
  "number": "1.6.5.1",
  "title": "",
  "body": "  Which of the following initial value problems are guaranteed to have a unique solution by the Existence and Uniqueness Theorem ( )? In each case, justify your conclusion.  ,  ,  ,  ,  ,  ,  ,      There exists a unique solution to , , since and are continuous at the point .  The Existence and Uniqueness Theorem does not apply to , , since is not continuous at .  There exists a unique solution to , , since and are both continuous at the point .  The Existence and Uniqueness Theorem does not apply to , , since is not continuous at .  There exists a unique solution to , , since and are both continuous at the point .  There exists a unique solution to , , since and are both continuous at the point .  The Existence and Uniqueness Theorem does not apply to , , since is not continuous at .    "
},
{
  "id": "exercises-firstlook06-3",
  "level": "2",
  "url": "firstlook06.html#exercises-firstlook06-3",
  "type": "Exercise",
  "number": "1.6.5.2",
  "title": "",
  "body": "  Find an explicit solution to the initial value problem Use your solution to determine the interval of existence.   "
},
{
  "id": "exercises-firstlook06-4",
  "level": "2",
  "url": "firstlook06.html#exercises-firstlook06-4",
  "type": "Exercise",
  "number": "1.6.5.3",
  "title": "",
  "body": "  Consider the initial value problem   Show that the constant function, , is a solution to the initial value problem.  Show that is a solution for the initial value problem, where is any real number. Hence, there exists an infinite number of solutions to the initial value problem.  Explain why this example does not contradict the Existence and Uniqueness Theorem.     (b) Make sure that the derivative of exists at .   "
},
{
  "id": "exercises-firstlook06-5",
  "level": "2",
  "url": "firstlook06.html#exercises-firstlook06-5",
  "type": "Exercise",
  "number": "1.6.5.4",
  "title": "",
  "body": "  Consider the initial value problem   Use the fact that is a first-order linear differential equation to find a solution to the initial value problem.  Let and use Picard iteration to find .  Show that the sequence converges to the exact solution that you found in part (a) as .    "
},
{
  "id": "firstlook06-exercises-exist-3",
  "level": "2",
  "url": "firstlook06.html#firstlook06-exercises-exist-3",
  "type": "Exercise",
  "number": "1.6.5.5",
  "title": "",
  "body": "  Use the Fundamental Theorem of Calculus to show that the function is a solution to the initial value problem if and only if is a solution to the integral equation   "
},
{
  "id": "firstlook06-exercises-exist-4",
  "level": "2",
  "url": "firstlook06.html#firstlook06-exercises-exist-4",
  "type": "Exercise",
  "number": "1.6.5.6",
  "title": "",
  "body": "  If is continuous on the rectangle prove that there exists a such that for all and in .   "
},
{
  "id": "firstlook06-exercises-exist-5",
  "level": "2",
  "url": "firstlook06.html#firstlook06-exercises-exist-5",
  "type": "Exercise",
  "number": "1.6.5.7",
  "title": "",
  "body": "  Define the sequence by Use the result of the previous exercise to show that   "
},
{
  "id": "firstlook06-exercises-exist-6",
  "level": "2",
  "url": "firstlook06.html#firstlook06-exercises-exist-6",
  "type": "Exercise",
  "number": "1.6.5.8",
  "title": "",
  "body": "  Show that there exists an such that   "
},
{
  "id": "firstlook06-exercises-exist-7",
  "level": "2",
  "url": "firstlook06.html#firstlook06-exercises-exist-7",
  "type": "Exercise",
  "number": "1.6.5.9",
  "title": "",
  "body": "  Show that   "
},
{
  "id": "firstlook06-exercises-exist-8",
  "level": "2",
  "url": "firstlook06.html#firstlook06-exercises-exist-8",
  "type": "Exercise",
  "number": "1.6.5.10",
  "title": "",
  "body": "  Use mathematical induction to show that   "
},
{
  "id": "firstlook06-exercises-exist-9",
  "level": "2",
  "url": "firstlook06.html#firstlook06-exercises-exist-9",
  "type": "Exercise",
  "number": "1.6.5.11",
  "title": "",
  "body": "  Since we can view as a partial sum for the series If we can show that this series converges absolutely, then our sequence will converge to a function . Show that where is the maximum distance between and the boundary of the rectangle . Since , we know that converges to a continuous function that solves our equation. We must a theorem from advanced calculus here to ensure uniform continuity (see ). Any sequence of functions that converges uniformly, must converge to a continuous function.   "
},
{
  "id": "firstlook06-exercises-exist-10",
  "level": "2",
  "url": "firstlook06.html#firstlook06-exercises-exist-10",
  "type": "Exercise",
  "number": "1.6.5.12",
  "title": "",
  "body": "  To show uniqueness, assume that and are both solutions to Show that   "
},
{
  "id": "firstlook06-exercises-exist-11",
  "level": "2",
  "url": "firstlook06.html#firstlook06-exercises-exist-11",
  "type": "Exercise",
  "number": "1.6.5.13",
  "title": "",
  "body": "   Define A similar argument will work for .  then and for . Show that  Since we know that Use this fact to show that Conclude that for or for all and .    "
},
{
  "id": "firstlook06-uniform-continuity",
  "level": "2",
  "url": "firstlook06.html#firstlook06-uniform-continuity",
  "type": "Exercise",
  "number": "1.6.5.14",
  "title": "",
  "body": "  Let for and show that This is an example of a sequence of continuous functions that does not converge to a continuous function, which helps explain the need for uniform continuity uniform continuity in the proof of the Existence and Uniqueness Theorem.   "
},
{
  "id": "firstlook07",
  "level": "1",
  "url": "firstlook07.html",
  "type": "Section",
  "number": "1.7",
  "title": "Bifurcations",
  "body": " Bifurcations    To understand that a one-parameter family of differential equations has a bifurcation at if a change in the number or type of equilibrium solutions occurs.  To understand that bifurcation diagrams are an effective way of representing the nature of the solutions of a one-parameter family of differential equations.     Many of the equations that we have examined have a parameter parameter , which means that we actually have a family of differential equations. For example, has the growth rate parameter . The logistic equation has two parameters, and . In this section we will investigate how the solutions of a differential equation vary as we change the value of a parameter.    The Logistic Model with Harvesting Revisited  Recall how we modeled logistic growth in a trout pond in with the equation If we allowed fishing in our pond at a rate of 32 fish per year, then the equation became There are two equilibrium solutions for this equation, (a sink) and (a source). If the population of the pond falls below 40, then the fish will die out unless the pond is restocked or fishing is banned ( ).      N = 200  H = 32  f(t, P) = P*(1 - P\/N) - H     gap = 3\/2     t    P(t)            Harvesting with   Now let us see what happens when we allow more fishing in our pond, say . Our differential equation now becomes To determine the equilibrium solutions, we must solve for . This last equation can be rewritten as . Thus, which means that equation has no real solutions and that we have no equilibrium solutions. Furthermore, for all values of . This means that no matter how many fish are in the pond initially, the trout population will eventually die out due to overfishing ( ).      k = 1  N = 200  H = 100  f(t,P) = k*P*(1 - P\/N) - H      t    P(t)   gap = 1\/4            Harvesting with   Finally, we will let . In this case, we must solve in order to determine any equilibrium solutions. We now obtain a single equilibrium solution at . In fact, will be a node. For values of as well as values of , we have , and the number of fish in the pond will decrease ( ).      k = 1  N = 200  H = 50  f(t,P) = k*P*(1 - P\/N) - H      t    P(t)   gap = 1.5            Harvesting with   To better understand what is happening, we will generalize our model. Suppose that a population with a limited carrying capacity is modeled with the logistic equation If we allow harvesting at a constant rate , our model now becomes To analyze our model, we will first find the equilibrium solutions. If we will let each equilibrium solution must satisfy or Therefore, our equilibrium solutions are given by  The explanation of how our model behaves lies in the discriminant, If or, equivalently if , there are no equilibrium solutions and for all values of . In particular, all solutions of tend towards negative infinity as . In this case, the population is doomed to extinction no matter how large the initial population is. Since negative populations do not make sense, we say that the population is extinct when .  On the other hand, if , we have equilibrium solutions at and The first equilibrium solution, is a sink, while the second, is a source.  Finally, if , then we will have exactly one equilibrium solution at . Although for all , we see that as for all initial values of greater than . For initial values of less than , solutions tend towards as . Thus, the initial population of fish must be at least ; otherwise, the fish will go extinct.  In our example, we have a family of differential equations one for each value of , A small change in can have a dramatic effect on how the solutions of the differential equation behave. Changing the value of from to will doom the population of fish to extinction no matter what the initial population is. As we increase the value of , the number of equilibrium solutions changes from two to one and then to none. This change occurs exactly at . We say that a bifurcation bifurcation occurs at for equation .   Upland Bird Populations   The chukar partridge, or simply chukar, is a upland gamebird in the pheasant family. Originally native to Asia and ranging from the eastern Mediterranean to Himalayas, the chukar has been widely introduced as an upland game bird with populations now established in the United States, Canada, Chile, Argentina, New Zealand and Hawaii. One particularly good area for hunting chukar is the western Great Basin area of the U.S. (eastern Oregon and Washington and western Idaho).     Suppose that the population of chukar on a private game ranch in eastern Oregon grows logisitically. Estimates tell us that the one hundred square mile ranch and that the ranch can support at most birds per square mile. The growth rate of the chukar population is estimated to be birds per year. Model the growth of the chukar population with an initial value problem.       Suppose that hunting on the ranch is restricted to guests and the average guest harvest chukars per visit. Modify the model in part (a) to take into account the effect that hunting has on the chukar population.      What is the maximum number of guests that the ranch can accommodate and still maintain a healthy population of game birds? How many chukar per square mile would be needed to allow this many guests?       One-Parameter Families  Let us consider the equation as a family of differential equations indexed by the parameter . If we let , then is a called one-parameter family differential equation one-parameter family of differential equations. For each value of , we obtain an autonomous differential equation, and for each value of , we have a different phase line to examine.    one-parameter family   For , the differential equation there is a sink at and a source at ( ).      lam = 0  f(t,x) = x^2 - 4*x + lam      t    x(t)   gap = 1\/2            for   For , the differential equation we have exactly one equilibrium solution, a node at ( ).      lam = 4  f(t,x) = x^2 - 4*x + lam      t    x(t)   gap = 1\/2            for   If , then the differential equation has no equilibrium solutions ( ).      lam = 8  f(t,x) = x^2 - 4*x + lam      t    x(t)   gap = 1\/2            for   In fact, the number of equilibrium solutions for changes at . We say that is a bifurcation value bifurcation bifurcation value for the differential equation For , we have two equilibrium solutions. For values of , there are no equilibrium solutions. We can record all of the information for the various values in a graph called the bifurcation diagram bifurcation diagram . The horizontal axis is and the vertical axis is . Over each value of , we will plot the corresponding phase line. The curve in the graph represents the various equilibrium solutions for the different values of . The bifurcation diagram for equation is a parabola ( ). We have a phase line for each value of .      f1(x) = exp(x)\/10  g(t)=(-t*(t-4), t)                                           Bifurcation diagram for   Bifurcations for a one-parameter family of differential equations are, in fact, rare. Let us consider a bifurcation where a sink changes to a source as we vary the parameter . Suppose that for , we have a sink at . Then Furthermore, the graph of must be decreasing for near , since must be postive for values of and negative for values of . In other words, for near with , then for all sufficiently close to , the differential equation must have sink at a point very close to . A similar situation holds if is a source and . Thus, bifurcations can only occur when and .   Now consider the one-parameter family We will have an equilibrium solution at zero for all values of and two additional equilibrium solutions at for . This type of bifurcation is a pitch fork bifurcation bifurcation pitch fork ( ).      f(t)=0  g(t)=(t^2,t)           The bifurcation diagram for     Bifurcations   For each of the following parametrized family of differential equations, plot phase lines for , find any bifurcation values, and sketch the bifurcation diagram.               Let us find the bifurcation values of the one-parameter family If , then . The roots of are and . In order for to be a bifurcation value, we must have or Thus, equation has two bifurcation values, and . The bifurcation diagram for this one-parameter family is given in .      g(t)=(-t*(t-2)^2, t)          The bifurcation diagram for      Important Lessons   A one-parameter family of differential equations has a bifurcation at if a change in the number of equilibrium solutions occurs.  Bifurcation diagrams are an effective way of representing the nature of the solutions of a one-parameter family of differential equations.  Bifurcations for a one-parameter family of differential equations are rare. Bifurcations occur when and .       Explain what a bifurcation is in your own words.       Explain why a bifurcation is relatively rare for a one-parameter family of differential equations.       Exercises   Bifurcations and Bifurcation Diagrams  For each of the following parametrized family of differential equations, plot phase lines for , find any bifurcation values, and sketch the bifurcation diagram.    .      for .      .      .      .       Describe the phase line portraits for for and how it depends on the parameter . Draw the bifurcation diagram for this equation.     "
},
{
  "id": "firstlook07-2",
  "level": "2",
  "url": "firstlook07.html#firstlook07-2",
  "type": "Objectives",
  "number": "1.7",
  "title": "",
  "body": "  To understand that a one-parameter family of differential equations has a bifurcation at if a change in the number or type of equilibrium solutions occurs.  To understand that bifurcation diagrams are an effective way of representing the nature of the solutions of a one-parameter family of differential equations.   "
},
{
  "id": "firstlook07-3-1",
  "level": "2",
  "url": "firstlook07.html#firstlook07-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "parameter "
},
{
  "id": "firstlook07-figure-logistic-harvesting-sink-source",
  "level": "2",
  "url": "firstlook07.html#firstlook07-figure-logistic-harvesting-sink-source",
  "type": "Figure",
  "number": "1.7.1",
  "title": "",
  "body": "    N = 200  H = 32  f(t, P) = P*(1 - P\/N) - H     gap = 3\/2     t    P(t)            Harvesting with  "
},
{
  "id": "firstlook07-figure-over-harvesting",
  "level": "2",
  "url": "firstlook07.html#firstlook07-figure-over-harvesting",
  "type": "Figure",
  "number": "1.7.2",
  "title": "",
  "body": "    k = 1  N = 200  H = 100  f(t,P) = k*P*(1 - P\/N) - H      t    P(t)   gap = 1\/4            Harvesting with  "
},
{
  "id": "firstlook07-figure-logistic-harvesting-bifurcation",
  "level": "2",
  "url": "firstlook07.html#firstlook07-figure-logistic-harvesting-bifurcation",
  "type": "Figure",
  "number": "1.7.3",
  "title": "",
  "body": "    k = 1  N = 200  H = 50  f(t,P) = k*P*(1 - P\/N) - H      t    P(t)   gap = 1.5            Harvesting with  "
},
{
  "id": "firstlook07-subsection-logisitic-harvesting-12",
  "level": "2",
  "url": "firstlook07.html#firstlook07-subsection-logisitic-harvesting-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "bifurcation "
},
{
  "id": "firstlook07-subsection-logisitic-harvesting-13",
  "level": "2",
  "url": "firstlook07.html#firstlook07-subsection-logisitic-harvesting-13",
  "type": "Activity",
  "number": "1.7.1",
  "title": "Upland Bird Populations.",
  "body": " Upland Bird Populations   The chukar partridge, or simply chukar, is a upland gamebird in the pheasant family. Originally native to Asia and ranging from the eastern Mediterranean to Himalayas, the chukar has been widely introduced as an upland game bird with populations now established in the United States, Canada, Chile, Argentina, New Zealand and Hawaii. One particularly good area for hunting chukar is the western Great Basin area of the U.S. (eastern Oregon and Washington and western Idaho).     Suppose that the population of chukar on a private game ranch in eastern Oregon grows logisitically. Estimates tell us that the one hundred square mile ranch and that the ranch can support at most birds per square mile. The growth rate of the chukar population is estimated to be birds per year. Model the growth of the chukar population with an initial value problem.       Suppose that hunting on the ranch is restricted to guests and the average guest harvest chukars per visit. Modify the model in part (a) to take into account the effect that hunting has on the chukar population.      What is the maximum number of guests that the ranch can accommodate and still maintain a healthy population of game birds? How many chukar per square mile would be needed to allow this many guests?    "
},
{
  "id": "firstlook07-subsection-one-parameter-families-2",
  "level": "2",
  "url": "firstlook07.html#firstlook07-subsection-one-parameter-families-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "one-parameter family "
},
{
  "id": "firstlook07-figure-one-parameter-bifurcation-0",
  "level": "2",
  "url": "firstlook07.html#firstlook07-figure-one-parameter-bifurcation-0",
  "type": "Figure",
  "number": "1.7.4",
  "title": "",
  "body": "    lam = 0  f(t,x) = x^2 - 4*x + lam      t    x(t)   gap = 1\/2            for  "
},
{
  "id": "firstlook07-figure-one-parameter-bifurcation-4",
  "level": "2",
  "url": "firstlook07.html#firstlook07-figure-one-parameter-bifurcation-4",
  "type": "Figure",
  "number": "1.7.5",
  "title": "",
  "body": "    lam = 4  f(t,x) = x^2 - 4*x + lam      t    x(t)   gap = 1\/2            for  "
},
{
  "id": "firstlook07-figure-one-parameter-bifurcation-8",
  "level": "2",
  "url": "firstlook07.html#firstlook07-figure-one-parameter-bifurcation-8",
  "type": "Figure",
  "number": "1.7.6",
  "title": "",
  "body": "    lam = 8  f(t,x) = x^2 - 4*x + lam      t    x(t)   gap = 1\/2            for  "
},
{
  "id": "firstlook07-subsection-one-parameter-families-10",
  "level": "2",
  "url": "firstlook07.html#firstlook07-subsection-one-parameter-families-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "bifurcation value bifurcation diagram "
},
{
  "id": "firstlook07-figure-bifurcation-diagram",
  "level": "2",
  "url": "firstlook07.html#firstlook07-figure-bifurcation-diagram",
  "type": "Figure",
  "number": "1.7.7",
  "title": "",
  "body": "    f1(x) = exp(x)\/10  g(t)=(-t*(t-4), t)                                           Bifurcation diagram for  "
},
{
  "id": "firstlook07-subsection-one-parameter-families-13",
  "level": "2",
  "url": "firstlook07.html#firstlook07-subsection-one-parameter-families-13",
  "type": "Example",
  "number": "1.7.8",
  "title": "",
  "body": " Now consider the one-parameter family We will have an equilibrium solution at zero for all values of and two additional equilibrium solutions at for . This type of bifurcation is a pitch fork bifurcation bifurcation pitch fork ( ).      f(t)=0  g(t)=(t^2,t)           The bifurcation diagram for   "
},
{
  "id": "firstlook07-subsection-one-parameter-families-14",
  "level": "2",
  "url": "firstlook07.html#firstlook07-subsection-one-parameter-families-14",
  "type": "Activity",
  "number": "1.7.2",
  "title": "Bifurcations.",
  "body": " Bifurcations   For each of the following parametrized family of differential equations, plot phase lines for , find any bifurcation values, and sketch the bifurcation diagram.             "
},
{
  "id": "firstlook07-subsection-one-parameter-families-15",
  "level": "2",
  "url": "firstlook07.html#firstlook07-subsection-one-parameter-families-15",
  "type": "Example",
  "number": "1.7.10",
  "title": "",
  "body": " Let us find the bifurcation values of the one-parameter family If , then . The roots of are and . In order for to be a bifurcation value, we must have or Thus, equation has two bifurcation values, and . The bifurcation diagram for this one-parameter family is given in .      g(t)=(-t*(t-2)^2, t)          The bifurcation diagram for   "
},
{
  "id": "rq-firstlook07-bifurcation-explain",
  "level": "2",
  "url": "firstlook07.html#rq-firstlook07-bifurcation-explain",
  "type": "Reading Question",
  "number": "1.7.4.1",
  "title": "",
  "body": "  Explain what a bifurcation is in your own words.    "
},
{
  "id": "rq-firstlook07-bifurcation-rare",
  "level": "2",
  "url": "firstlook07.html#rq-firstlook07-bifurcation-rare",
  "type": "Reading Question",
  "number": "1.7.4.2",
  "title": "",
  "body": "  Explain why a bifurcation is relatively rare for a one-parameter family of differential equations.    "
},
{
  "id": "firstlook07-exercises-bifurcations-3",
  "level": "2",
  "url": "firstlook07.html#firstlook07-exercises-bifurcations-3",
  "type": "Exercise",
  "number": "1.7.5.1",
  "title": "",
  "body": "  .   "
},
{
  "id": "firstlook07-exercises-bifurcations-4",
  "level": "2",
  "url": "firstlook07.html#firstlook07-exercises-bifurcations-4",
  "type": "Exercise",
  "number": "1.7.5.2",
  "title": "",
  "body": "  for .   "
},
{
  "id": "firstlook07-exercises-bifurcations-5",
  "level": "2",
  "url": "firstlook07.html#firstlook07-exercises-bifurcations-5",
  "type": "Exercise",
  "number": "1.7.5.3",
  "title": "",
  "body": "  .   "
},
{
  "id": "firstlook07-exercises-bifurcations-6",
  "level": "2",
  "url": "firstlook07.html#firstlook07-exercises-bifurcations-6",
  "type": "Exercise",
  "number": "1.7.5.4",
  "title": "",
  "body": "  .   "
},
{
  "id": "firstlook07-exercises-bifurcations-7",
  "level": "2",
  "url": "firstlook07.html#firstlook07-exercises-bifurcations-7",
  "type": "Exercise",
  "number": "1.7.5.5",
  "title": "",
  "body": "  .   "
},
{
  "id": "firstlook07-exercises-3",
  "level": "2",
  "url": "firstlook07.html#firstlook07-exercises-3",
  "type": "Exercise",
  "number": "1.7.5.6",
  "title": "",
  "body": "  Describe the phase line portraits for for and how it depends on the parameter . Draw the bifurcation diagram for this equation.   "
},
{
  "id": "firstlook08",
  "level": "1",
  "url": "firstlook08.html",
  "type": "Section",
  "number": "1.8",
  "title": "Projects for First-Order Differential Equations",
  "body": " Projects for First-Order Differential Equations   Project The Spruce Budworm   Choristoneura fumiferana or the eastern spruce budworm is a species of moth native to the eastern United States and Canada. The caterpillars feed on the needles of spruce and fir trees. Populations can experience significant oscillations. The spruce budworm population remains at a relatively low, constant level most of the time. However, outbreaks have been recurring approximately every three decades, and studies suggest the spruce budworm has been breaking out in eastern North America for thousands of years.  Outbreaks of the spruce budworm have been responsible for some major deforestations in Canada and the United States. The eastern spruce budworm is considered one of the most destructive forest pests in North America.  You are acting as a consultant to the state department of forestry. Your task is to explain how outbreaks occur and how often the state can expect outbreaks.  The equation has been used to describe the dynamics of spruce budworm populations, where the variable denotes the population or density of the insect . One explanation that has been given for the occurrence of outbreaks is based on the multiple bifurcations that occur with this differential equation.     Explain how can be used to model the spruce budworm population.      If , , and , we have a family of differential equations parameterized by , Solve the equation and plot the result in the -plane for .      To find the bifurcation diagram for the spruce budworm equation, reflect the graph obtained in part about the line line.      Estimate the two bifurcation values from your graph. Explain what happens to the population as increases. That is, when does an outbreak occur? What happens after an outbreak?     Your Final Report   Your final report should contain a one-page executive summary. The executive summary should summarize your work in such a way that the reader can rapidly become acquainted with the material. It should contain a brief description of the problem, important background information, a discussion of pertinent assumptions, a short description of your methodology, concise analysis, and your main conclusions. Assume the reader is familiar with the basics of calculus and differential equations, so there is no need to walk through every step of your solution process or include equations. However, you should still describe the processes and mathematical techniques you used to reach your conclusions and explain why you used them. Refer the reader to the appendices as needed.  Appendices should be neatly formatted and present information in a logical manner. DO NOT simply print out Sage code. Consolidate your results and provide a short explanation of what it is the reader is seeing while also highlighting key pieces of information in the appendix.  Appendix A Answers and analysis  Additional Appendices Include additional appendices as necessary.       Project The Spread of an Oil Spill   Oil spills such as the Deepwater Horizon in the Gulf of Mexico or the Amoco Cadiz off the coast of Brittany can have disastrous consequences for society economically, environmentally, and socially. Even smaller spills such as the Exxon Valdez can have have a huge impact on the surrounding environment due to the remoteness of the site or the difficulty of mounting an emergency environmental response. Cleanup and recovery from an oil spill is difficult and depends upon many factors, including the type of oil spilled, the temperature of the water, and the types of shorelines and beaches involved. Spills may take weeks, months or even years to clean up. For this reason the timeliness of an emergency response is critical. This project is adapted from Brian Winkel(2015), 1-005-S-OilSlick,  .   Suppose an oil spill occurs off the coast of Texas. From time to time, but irregularly, a helicopter is dispatched by the Coast Guard to photograph the oil slick. On each trip, the helicopter arrives over the slick, the pilot takes a photo, waits 10 minutes, takes a second photo, and heads home. On each of seven trips the size (in area) of the slick is measured from both photographs. The data is given in   Data on spread of an oil spill    Initial Observation 10 Minutes Later    1.047 1.139    2.005 2.087    3.348 3.413    5.719 5.765    7.273 7.304    8.410 8.426    9.117 9.127        Build a model for the size of the oil slick at time .      Predict the future size of the oil slick, say at min, min, min.      Plot your model of the size of the oil slick as a function of time.      Find the time at which the oil slick is 8 square miles.      Determine the time of each of the observations for the first, third, fifth, and seventh initial observations.     Your Final Report   You have been retained as a consultant to the United States Coast Guard (USCG) to analyze this data and submit a report of your findings. Your final report should contain a one-page executive summary. The executive summary should summarize your work in such a way that the reader can rapidly become acquainted with the material. It should contain a brief description of the problem, important background information, a discussion of pertinent assumptions, a short description of your methodology, concise analysis, and your main conclusions. Do not assume that the reader knows anything about calculus or differential equations, but does have experts that can verify your model and calculations, which should appear in an appendix.  Appendices should be neatly formatted and present information in a logical manner. DO NOT simply print out Sage code or a series of equations. Consolidate your results and provide a short explanation of what it is the reader is seeing while also highlighting key pieces of information in the appendix.  Appendix A Answers and analysis  Additional Appendices Include additional appendices as necessary.        Project Malaria Control   Your company has been contracted to build a hospital in sub-Saharan Africa. The company is aware of the malaria threat in the region and has asked you to analyze malaria preventive measures for the employees that will be sent to build the hospital. This project is adapted from David Culver (2016), 1-024-S-MalariaControl,  .  Malaria is a serious and sometimes fatal disease. In 2018, it was estimated that 228 million people worldwide contracted malaria. The estimated number of deaths was approximately 405,000 people. Children under the age of 5 years are the most vulnerable group, and they accounted for 67% (272,000) of all malaria deaths worldwide. Ninety-three percent of malaria cases are in Africa with six countries accounting or more than half of all malaria cases worldwide: Nigeria (25%), the Democratic Republic of the Congo (12%), Uganda (5%), and Côte d’Ivoire, Mozambique and Niger (4% each). World Malaria Report 2019, World Health Organization, .  People who get malaria are typically very sick with high fevers, shaking chills, and flu-like illness. Although malaria can be a deadly disease, illness and death from malaria can usually be prevented. The disease is caused by a parasite that infects red blood cells. The parasite is transmitted from person to person through the bite of mosquitoes. Avoiding mosquito bites is the only sure method to prevent malaria infection. Malaria can be cured with prescription drugs. The type of drugs and length of treatment depend on the type of malaria, where the person was infected, their age, whether they are pregnant, and how sick they are at the start of treatment. Malaria, Centers for Disease Control and Prevention, .    Pharmacokinetics of Malaria Chemoprophylaxis   Your first task is to analyze the anti-malarial drug dosing regimen for those building the hospital. The primary concerns are how soon to start treatment before everyone arrives and the potential risks if employees miss one or two of their scheduled doses. These questions require an understanding of pharmacokinetics.  Pharmacokinetics is the study of what the body does to a drug. Specifically, it refers to the movement of the drug into, through, and out of the body. Understanding the pharmacokinetics of a drug allows medical professionals to develop appropriate drug dosing regimens for their patients. A complete understanding of the pharmacokinetics of a drug requires information on the processes of absorption, distribution, metabolization, and excretion of the drug from the body. In order to simplify this problem, we will assume that the anti-malarial medication is immediately absorbed into the blood stream and that everyone begins treatment with zero anti-malarial medication in their body. After the drug is absorbed into the blood, the rate of elimination of the drug from the body is proportional to the amount of drug currently in the blood. In other words, the more of the drug in the blood stream, the faster it is removed from the body. We will also assume that the rate of excretion of the drug is the same for everyone.  Atovaquone\/proguanil, sold under the trade names Malarone among others, is a combination of two antimalarial medication atovaquone and proguanil. It is used to treat and prevent malaria, including chloroquine-resistant malaria. A standard adult pill of Malarone contains 250mg of atovaquone and 100mg of proguanil. A typical dose is one pill taken at the same time each day. An individual must maintain at least 300mg of atovaquone and 30mg of proguanil in their blood at all times in order to prevent contracting malaria. A typical adult eliminates atovaquone at a rate that corresponds to a half-life (time to eliminate one half of the original dose) of 48 hours. The half-life of proguanil is 12 hours. Malarone: Prescribing Information. US Food and Drug Administration.     At , a typical adult ingests one pill of Malarone. Write an initial value problem (IVP) that models the mass (mg) of the drug proguanil in the adult's blood for . Solve this IVP analytically. After a person takes the first pill of Malarone, if they take no further medication, for how many hours can they expect to have enough proguanil in his blood to prevent contracting malaria?      Approximate the solution to the IVP you developed in over the next seven days (168 hours) by implementing Euler’s method in Sage with two step sizes: hours and hour (see ). Compute the error for both step sizes by comparing your estimate to the analytic solution.       Approximate the solution to the IVP over the next seven days by implementing the RK4 or classic Runge–Kutta method in Sage with step size: hour. Compute the error for both step sizes by comparing your estimate to the analytic solution (see ).       Create a table summarizing the results of all numerical methods ( and ). This table should include columns for time, the actual mass of proguanil in each subject's blood (from ), and the approximate values of the solution for all methods and step sizes at only. Your table should have a total of 5 columns. Include an additional entry at the bottom of each of the last 3 columns providing the error for that method and step size. Discuss your results. Your analysis should include a comparison of error for different step sizes and for different methods.      Write an IVP that models the mass (mg) of the drug atovaquone in a typical adult’s blood for if a person ingests only one pill of Malarone at . Approximate the solution to this IVP using the RK4 method in Sage with step size: hour.       Using your solutions to parts and , if an adult ingests one pill of Malarone at the same time each day, how long before your construction crew departure to Africa should your crew begin taking their pills? In other words, how long until everyone has enough proguanil AND atovaquone in their blood to prevent contracting malaria? Illustrate your result using a graph or table.      Assume a typical person reaches a steady state level of proguanil and atovaquone in their body after their 8th dose of Malarone. If after reaching steady state a person misses one dose, are they at risk of contracting malaria? How about after missing two consecutive doses? Explain.      Mosquito Population Control   Unfortunately anti-malarial drugs are not 100% effective at preventing the spread of malaria. The only sure method to prevent contracting malaria is to avoid mosquito bites. In light of this, you must look at methods to control the mosquito population in the construction area near the living quarters. Your objective is to reduce the mosquito population in both the short (less than 6 months) and long (greater than 6 months) term while also minimizing the environmental impact and potential health problems associated with the mosquito control measures that are implemented.  There are two typical approaches to mosquito control. The first approach is to directly kill mosquitoes using an insecticide spray. The effectiveness of this method depends on the frequency of spraying and the concentration of the insecticide. However, frequent spraying of insecticide has potential negative health effects on both humans and nearby wildlife. This method is also temporary as the mosquito population will recover once routine spraying has stopped. The second approach to mosquito population control is to eliminate the resources that support the mosquito population. This is done through the destruction of mosquito breeding grounds and involves everything from filling in small puddles to the draining of swamps and marshes. Keeping in consideration manpower and budget constraints, you must find the combination of these two approaches that best meets these objectives over the next six months.  Studies on mosquito control indicate that the rate of change of the mosquito population, , (measured in millions of mosquitoes) in the area can be accurately modeled using the following Initial Value Problem: where is a constant that represents the effectiveness of insecticide spraying efforts, M is the local carrying capacity and is affected by efforts to reduce mosquito breeding grounds, is the population growth constant, is the initial population, and time is measured in months. Current estimates suggest that there are approximately 10 million mosquitoes living near the proposed site of the hospital. Data indicates that million and for this mosquito population.  Use the information provided and the RK4 method to evaluate the following three mosquito population scenarios. Recommend a scenario and support your recommendation with mathematics. Be sure to include other considerations (not just what your mathematical model tells you) in your analysis. Tables, graphs, and other visual representations that summarize and support your analysis and recommendation are encouraged and should be included in an appendix.    Scenario A   In this scenario, you would devote most of your available resources for mosquito control to the use of insecticide. You would spray highly concentrated and expensive insecticide in the employee living areas daily. Due to the emphasis on the use of insecticide would be limited to destroying small mosquito breeding grounds only on the base camp. You estimate a value for of (see ) and a new carrying capacity of million mosquitoes that would be in effect immediately.   Values for and    Scenario A Scenario B Scenario C       Set 1 10.5 0.55 6.0 0.10 9.0 0.40    Set 2 10.0 0.60 5.5 0.10 8.5 0.45    Set 3 10.5 0.50 6.5 0.10 9.0 0.40        Scenario B   In this scenario, you would devote most of your resources towards destroying mosquito breeding grounds. This would involve the permanent draining of a nearby marsh that is believed to be the primary breeding ground for mosquitoes at the construction site. Draining the marsh would take time to complete, delaying any impact on the mosquito population by two months, but would lower the carrying capacity to million mosquitoes. You would still spray insecticide but less frequently and with less potency than in Scenario A. It is estimated that spraying would immediately result in a value for of     Scenario C   This scenario seeks to balance the insecticide and breeding ground destruction approaches. You would use the same, more potent, insecticide as Scenario A but spray less frequently. This would free up manpower to destroy small mosquito breeding grounds. You estimate a new value for of and a new carrying capacity of million mosquitoes that would be in effect immediately.      Your Final Report   Your final report should contain a one-page executive summary. The executive summary should summarize your work for and in such a way that the reader can rapidly become acquainted with the material. It should contain a brief description of the problem, important background information, a discussion of pertinent assumptions, a short description of your methodology, concise analysis, and your main conclusions. Assume the reader is familiar with the basics of calculus and differential equations, so there is no need to walk through every step of your solution process or include equations. However, you should still describe the processes and mathematical techniques you used to reach your conclusions and explain why you used them. Refer the reader to the appendices as needed.  Appendices should be neatly formatted and present information in a logical manner. DO NOT simply print out Sage code. Consolidate your results and provide a short explanation of what it is the reader is seeing while also highlighting key pieces of information in the appendix.  Appendix A Answers and analysis for  Appendix B Provide a table that summarizes the results of your analysis for all three scenarios in . Also include a copy of all work you used to analyze your recommended scenario.  Additional Appendices Include additional appendices as necessary.       Project Oligarchies   An oligarch is an individual holding a non-negligible fraction of the country's total wealth. This project is adopted from Boghosian, Bruce and Borgers, Christoph (2024) ODE Models of Wealth Concentration and Taxation,  CODEE Journal : Vol. 17, Article 10. Available at: The concentration of wealth in the hands of a small number of individuals is considerable in many countries around the world, including the United States. In 2017, Forbes found that just three individuals (Jeff Bezos, Warren Buffett and Bill Gates) held more wealth than the bottom half of the population. Kirsch, Noah. The 3 Richest Americans Hold More Wealth Than Bottom 50% Of The Country, Study Finds  Forbes . Individuals who hold a significant fraction of society's total wealth have considerable political power.  Assume that is the fraction society's wealth. We assume that in a short time , the oligarchs, by virtue of the power that their wealth gives them, acquire a small fraction of the wealth not yet in their hands: As increases, acquiring wealth becomes easier for the oligarchs. They can hire more lobbyists and better lawyers. They can afford riskier but more profitable investments. Therefore, it is reasonable to assume that is proportional to , so for some constant . We thereby arrive at the logistic growth equation,    Tax Policies   There are several different models of taxation: a flat wealth tax, a flat income tax, a progressive wealth tax, and a progressive income tax. In the case of a wealth tax, the government taxes a fraction of the individual's total wealth. For an income tax, the government takes away a fixed portion of the wealth gained over a period of time. A tax is progressive if the tax is greater as wealth or income increases.    Flat Tax   Suppose that the government taxes the oligarchs by taxing away a small fraction of their wealth, say . This is called a flat tax. Our equation now becomes  Let us fix and let vary in the equation We now have a one-parameter family of equations. Discuss the stability of equilibrium solutions. When does a bifurcation occur? What are the implications for a flat tax on the existence of oligarchies?     Flat Income Tax   To model the taxation of income (or capital gains), assume the government takes away a fixed fraction of the wealth gained by the oligarchs in time , What are the equilibrium solutions. Discuss their stability. What effect does a flat income tax have on an oligarchy?     Progressive Wealth Tax   A progressive wealth tax would mean that itself grows with . Assume that , where is a fixed positive constant, and is a continuous, monotonically increasing function of with . Our equation now becomes What are the equilibrium solutions for this equations. Examine the stability when and . What happens to oligarchies in both cases?     Progressive Income Tax   In a flat income tax the government takes away a fixed fraction of the wealth gained by the oligarchs in time , In a progressive income tax, the government will take away a larger fraction as income increases. In other words, suppose that government collects taxes as a function of . Suppose that is a monotoniically increasing function of , where . The greater an oligarch's gain per unit time, the greater percentage will be collected as tax. Assuming that the government will never tax at a rate of 100%, we have for all . The equation for a progressive income tax is now What will happen to oligarchs under a progressive income tax?      Your Final Report   Your final report should contain a one-page executive summary. The executive summary should summarize your work for work in a way that the reader can rapidly become acquainted with the material. It should contain a brief description of the problem, important background information, a discussion of pertinent assumptions, a short description of your methodology, concise analysis, and your main conclusions. Assume the reader is familiar with the basics of calculus and differential equations, so there is no need to walk through every step of your solution process or include equations. However, you should still describe the processes and mathematical techniques you used to reach your conclusions and explain why you used them. Refer the reader to the appendices as needed.  Appendices should be neatly formatted and present information in a logical manner. DO NOT simply print out Sage code or write isolated equations. Consolidate your results and provide a short explanation of what it is the reader is seeing while also highlighting key pieces of information in the appendix.     "
},
{
  "id": "firstlook08-project-spruce-budworm",
  "level": "2",
  "url": "firstlook08.html#firstlook08-project-spruce-budworm",
  "type": "Project",
  "number": "1.8.1",
  "title": "Project—The Spruce Budworm.",
  "body": " Project The Spruce Budworm   Choristoneura fumiferana or the eastern spruce budworm is a species of moth native to the eastern United States and Canada. The caterpillars feed on the needles of spruce and fir trees. Populations can experience significant oscillations. The spruce budworm population remains at a relatively low, constant level most of the time. However, outbreaks have been recurring approximately every three decades, and studies suggest the spruce budworm has been breaking out in eastern North America for thousands of years.  Outbreaks of the spruce budworm have been responsible for some major deforestations in Canada and the United States. The eastern spruce budworm is considered one of the most destructive forest pests in North America.  You are acting as a consultant to the state department of forestry. Your task is to explain how outbreaks occur and how often the state can expect outbreaks.  The equation has been used to describe the dynamics of spruce budworm populations, where the variable denotes the population or density of the insect . One explanation that has been given for the occurrence of outbreaks is based on the multiple bifurcations that occur with this differential equation.     Explain how can be used to model the spruce budworm population.      If , , and , we have a family of differential equations parameterized by , Solve the equation and plot the result in the -plane for .      To find the bifurcation diagram for the spruce budworm equation, reflect the graph obtained in part about the line line.      Estimate the two bifurcation values from your graph. Explain what happens to the population as increases. That is, when does an outbreak occur? What happens after an outbreak?     Your Final Report   Your final report should contain a one-page executive summary. The executive summary should summarize your work in such a way that the reader can rapidly become acquainted with the material. It should contain a brief description of the problem, important background information, a discussion of pertinent assumptions, a short description of your methodology, concise analysis, and your main conclusions. Assume the reader is familiar with the basics of calculus and differential equations, so there is no need to walk through every step of your solution process or include equations. However, you should still describe the processes and mathematical techniques you used to reach your conclusions and explain why you used them. Refer the reader to the appendices as needed.  Appendices should be neatly formatted and present information in a logical manner. DO NOT simply print out Sage code. Consolidate your results and provide a short explanation of what it is the reader is seeing while also highlighting key pieces of information in the appendix.  Appendix A Answers and analysis  Additional Appendices Include additional appendices as necessary.     "
},
{
  "id": "firstlook08-project-oil-spill",
  "level": "2",
  "url": "firstlook08.html#firstlook08-project-oil-spill",
  "type": "Project",
  "number": "1.8.2",
  "title": "Project—The Spread of an Oil Spill.",
  "body": " Project The Spread of an Oil Spill   Oil spills such as the Deepwater Horizon in the Gulf of Mexico or the Amoco Cadiz off the coast of Brittany can have disastrous consequences for society economically, environmentally, and socially. Even smaller spills such as the Exxon Valdez can have have a huge impact on the surrounding environment due to the remoteness of the site or the difficulty of mounting an emergency environmental response. Cleanup and recovery from an oil spill is difficult and depends upon many factors, including the type of oil spilled, the temperature of the water, and the types of shorelines and beaches involved. Spills may take weeks, months or even years to clean up. For this reason the timeliness of an emergency response is critical. This project is adapted from Brian Winkel(2015), 1-005-S-OilSlick,  .   Suppose an oil spill occurs off the coast of Texas. From time to time, but irregularly, a helicopter is dispatched by the Coast Guard to photograph the oil slick. On each trip, the helicopter arrives over the slick, the pilot takes a photo, waits 10 minutes, takes a second photo, and heads home. On each of seven trips the size (in area) of the slick is measured from both photographs. The data is given in   Data on spread of an oil spill    Initial Observation 10 Minutes Later    1.047 1.139    2.005 2.087    3.348 3.413    5.719 5.765    7.273 7.304    8.410 8.426    9.117 9.127        Build a model for the size of the oil slick at time .      Predict the future size of the oil slick, say at min, min, min.      Plot your model of the size of the oil slick as a function of time.      Find the time at which the oil slick is 8 square miles.      Determine the time of each of the observations for the first, third, fifth, and seventh initial observations.     Your Final Report   You have been retained as a consultant to the United States Coast Guard (USCG) to analyze this data and submit a report of your findings. Your final report should contain a one-page executive summary. The executive summary should summarize your work in such a way that the reader can rapidly become acquainted with the material. It should contain a brief description of the problem, important background information, a discussion of pertinent assumptions, a short description of your methodology, concise analysis, and your main conclusions. Do not assume that the reader knows anything about calculus or differential equations, but does have experts that can verify your model and calculations, which should appear in an appendix.  Appendices should be neatly formatted and present information in a logical manner. DO NOT simply print out Sage code or a series of equations. Consolidate your results and provide a short explanation of what it is the reader is seeing while also highlighting key pieces of information in the appendix.  Appendix A Answers and analysis  Additional Appendices Include additional appendices as necessary.     "
},
{
  "id": "firstlook08-malaria-control",
  "level": "2",
  "url": "firstlook08.html#firstlook08-malaria-control",
  "type": "Project",
  "number": "1.8.3",
  "title": "Project—Malaria Control.",
  "body": " Project Malaria Control   Your company has been contracted to build a hospital in sub-Saharan Africa. The company is aware of the malaria threat in the region and has asked you to analyze malaria preventive measures for the employees that will be sent to build the hospital. This project is adapted from David Culver (2016), 1-024-S-MalariaControl,  .  Malaria is a serious and sometimes fatal disease. In 2018, it was estimated that 228 million people worldwide contracted malaria. The estimated number of deaths was approximately 405,000 people. Children under the age of 5 years are the most vulnerable group, and they accounted for 67% (272,000) of all malaria deaths worldwide. Ninety-three percent of malaria cases are in Africa with six countries accounting or more than half of all malaria cases worldwide: Nigeria (25%), the Democratic Republic of the Congo (12%), Uganda (5%), and Côte d’Ivoire, Mozambique and Niger (4% each). World Malaria Report 2019, World Health Organization, .  People who get malaria are typically very sick with high fevers, shaking chills, and flu-like illness. Although malaria can be a deadly disease, illness and death from malaria can usually be prevented. The disease is caused by a parasite that infects red blood cells. The parasite is transmitted from person to person through the bite of mosquitoes. Avoiding mosquito bites is the only sure method to prevent malaria infection. Malaria can be cured with prescription drugs. The type of drugs and length of treatment depend on the type of malaria, where the person was infected, their age, whether they are pregnant, and how sick they are at the start of treatment. Malaria, Centers for Disease Control and Prevention, .    Pharmacokinetics of Malaria Chemoprophylaxis   Your first task is to analyze the anti-malarial drug dosing regimen for those building the hospital. The primary concerns are how soon to start treatment before everyone arrives and the potential risks if employees miss one or two of their scheduled doses. These questions require an understanding of pharmacokinetics.  Pharmacokinetics is the study of what the body does to a drug. Specifically, it refers to the movement of the drug into, through, and out of the body. Understanding the pharmacokinetics of a drug allows medical professionals to develop appropriate drug dosing regimens for their patients. A complete understanding of the pharmacokinetics of a drug requires information on the processes of absorption, distribution, metabolization, and excretion of the drug from the body. In order to simplify this problem, we will assume that the anti-malarial medication is immediately absorbed into the blood stream and that everyone begins treatment with zero anti-malarial medication in their body. After the drug is absorbed into the blood, the rate of elimination of the drug from the body is proportional to the amount of drug currently in the blood. In other words, the more of the drug in the blood stream, the faster it is removed from the body. We will also assume that the rate of excretion of the drug is the same for everyone.  Atovaquone\/proguanil, sold under the trade names Malarone among others, is a combination of two antimalarial medication atovaquone and proguanil. It is used to treat and prevent malaria, including chloroquine-resistant malaria. A standard adult pill of Malarone contains 250mg of atovaquone and 100mg of proguanil. A typical dose is one pill taken at the same time each day. An individual must maintain at least 300mg of atovaquone and 30mg of proguanil in their blood at all times in order to prevent contracting malaria. A typical adult eliminates atovaquone at a rate that corresponds to a half-life (time to eliminate one half of the original dose) of 48 hours. The half-life of proguanil is 12 hours. Malarone: Prescribing Information. US Food and Drug Administration.     At , a typical adult ingests one pill of Malarone. Write an initial value problem (IVP) that models the mass (mg) of the drug proguanil in the adult's blood for . Solve this IVP analytically. After a person takes the first pill of Malarone, if they take no further medication, for how many hours can they expect to have enough proguanil in his blood to prevent contracting malaria?      Approximate the solution to the IVP you developed in over the next seven days (168 hours) by implementing Euler’s method in Sage with two step sizes: hours and hour (see ). Compute the error for both step sizes by comparing your estimate to the analytic solution.       Approximate the solution to the IVP over the next seven days by implementing the RK4 or classic Runge–Kutta method in Sage with step size: hour. Compute the error for both step sizes by comparing your estimate to the analytic solution (see ).       Create a table summarizing the results of all numerical methods ( and ). This table should include columns for time, the actual mass of proguanil in each subject's blood (from ), and the approximate values of the solution for all methods and step sizes at only. Your table should have a total of 5 columns. Include an additional entry at the bottom of each of the last 3 columns providing the error for that method and step size. Discuss your results. Your analysis should include a comparison of error for different step sizes and for different methods.      Write an IVP that models the mass (mg) of the drug atovaquone in a typical adult’s blood for if a person ingests only one pill of Malarone at . Approximate the solution to this IVP using the RK4 method in Sage with step size: hour.       Using your solutions to parts and , if an adult ingests one pill of Malarone at the same time each day, how long before your construction crew departure to Africa should your crew begin taking their pills? In other words, how long until everyone has enough proguanil AND atovaquone in their blood to prevent contracting malaria? Illustrate your result using a graph or table.      Assume a typical person reaches a steady state level of proguanil and atovaquone in their body after their 8th dose of Malarone. If after reaching steady state a person misses one dose, are they at risk of contracting malaria? How about after missing two consecutive doses? Explain.      Mosquito Population Control   Unfortunately anti-malarial drugs are not 100% effective at preventing the spread of malaria. The only sure method to prevent contracting malaria is to avoid mosquito bites. In light of this, you must look at methods to control the mosquito population in the construction area near the living quarters. Your objective is to reduce the mosquito population in both the short (less than 6 months) and long (greater than 6 months) term while also minimizing the environmental impact and potential health problems associated with the mosquito control measures that are implemented.  There are two typical approaches to mosquito control. The first approach is to directly kill mosquitoes using an insecticide spray. The effectiveness of this method depends on the frequency of spraying and the concentration of the insecticide. However, frequent spraying of insecticide has potential negative health effects on both humans and nearby wildlife. This method is also temporary as the mosquito population will recover once routine spraying has stopped. The second approach to mosquito population control is to eliminate the resources that support the mosquito population. This is done through the destruction of mosquito breeding grounds and involves everything from filling in small puddles to the draining of swamps and marshes. Keeping in consideration manpower and budget constraints, you must find the combination of these two approaches that best meets these objectives over the next six months.  Studies on mosquito control indicate that the rate of change of the mosquito population, , (measured in millions of mosquitoes) in the area can be accurately modeled using the following Initial Value Problem: where is a constant that represents the effectiveness of insecticide spraying efforts, M is the local carrying capacity and is affected by efforts to reduce mosquito breeding grounds, is the population growth constant, is the initial population, and time is measured in months. Current estimates suggest that there are approximately 10 million mosquitoes living near the proposed site of the hospital. Data indicates that million and for this mosquito population.  Use the information provided and the RK4 method to evaluate the following three mosquito population scenarios. Recommend a scenario and support your recommendation with mathematics. Be sure to include other considerations (not just what your mathematical model tells you) in your analysis. Tables, graphs, and other visual representations that summarize and support your analysis and recommendation are encouraged and should be included in an appendix.    Scenario A   In this scenario, you would devote most of your available resources for mosquito control to the use of insecticide. You would spray highly concentrated and expensive insecticide in the employee living areas daily. Due to the emphasis on the use of insecticide would be limited to destroying small mosquito breeding grounds only on the base camp. You estimate a value for of (see ) and a new carrying capacity of million mosquitoes that would be in effect immediately.   Values for and    Scenario A Scenario B Scenario C       Set 1 10.5 0.55 6.0 0.10 9.0 0.40    Set 2 10.0 0.60 5.5 0.10 8.5 0.45    Set 3 10.5 0.50 6.5 0.10 9.0 0.40        Scenario B   In this scenario, you would devote most of your resources towards destroying mosquito breeding grounds. This would involve the permanent draining of a nearby marsh that is believed to be the primary breeding ground for mosquitoes at the construction site. Draining the marsh would take time to complete, delaying any impact on the mosquito population by two months, but would lower the carrying capacity to million mosquitoes. You would still spray insecticide but less frequently and with less potency than in Scenario A. It is estimated that spraying would immediately result in a value for of     Scenario C   This scenario seeks to balance the insecticide and breeding ground destruction approaches. You would use the same, more potent, insecticide as Scenario A but spray less frequently. This would free up manpower to destroy small mosquito breeding grounds. You estimate a new value for of and a new carrying capacity of million mosquitoes that would be in effect immediately.      Your Final Report   Your final report should contain a one-page executive summary. The executive summary should summarize your work for and in such a way that the reader can rapidly become acquainted with the material. It should contain a brief description of the problem, important background information, a discussion of pertinent assumptions, a short description of your methodology, concise analysis, and your main conclusions. Assume the reader is familiar with the basics of calculus and differential equations, so there is no need to walk through every step of your solution process or include equations. However, you should still describe the processes and mathematical techniques you used to reach your conclusions and explain why you used them. Refer the reader to the appendices as needed.  Appendices should be neatly formatted and present information in a logical manner. DO NOT simply print out Sage code. Consolidate your results and provide a short explanation of what it is the reader is seeing while also highlighting key pieces of information in the appendix.  Appendix A Answers and analysis for  Appendix B Provide a table that summarizes the results of your analysis for all three scenarios in . Also include a copy of all work you used to analyze your recommended scenario.  Additional Appendices Include additional appendices as necessary.     "
},
{
  "id": "firstlook08-project-oligarch",
  "level": "2",
  "url": "firstlook08.html#firstlook08-project-oligarch",
  "type": "Project",
  "number": "1.8.4",
  "title": "Project—Oligarchies.",
  "body": " Project Oligarchies   An oligarch is an individual holding a non-negligible fraction of the country's total wealth. This project is adopted from Boghosian, Bruce and Borgers, Christoph (2024) ODE Models of Wealth Concentration and Taxation,  CODEE Journal : Vol. 17, Article 10. Available at: The concentration of wealth in the hands of a small number of individuals is considerable in many countries around the world, including the United States. In 2017, Forbes found that just three individuals (Jeff Bezos, Warren Buffett and Bill Gates) held more wealth than the bottom half of the population. Kirsch, Noah. The 3 Richest Americans Hold More Wealth Than Bottom 50% Of The Country, Study Finds  Forbes . Individuals who hold a significant fraction of society's total wealth have considerable political power.  Assume that is the fraction society's wealth. We assume that in a short time , the oligarchs, by virtue of the power that their wealth gives them, acquire a small fraction of the wealth not yet in their hands: As increases, acquiring wealth becomes easier for the oligarchs. They can hire more lobbyists and better lawyers. They can afford riskier but more profitable investments. Therefore, it is reasonable to assume that is proportional to , so for some constant . We thereby arrive at the logistic growth equation,    Tax Policies   There are several different models of taxation: a flat wealth tax, a flat income tax, a progressive wealth tax, and a progressive income tax. In the case of a wealth tax, the government taxes a fraction of the individual's total wealth. For an income tax, the government takes away a fixed portion of the wealth gained over a period of time. A tax is progressive if the tax is greater as wealth or income increases.    Flat Tax   Suppose that the government taxes the oligarchs by taxing away a small fraction of their wealth, say . This is called a flat tax. Our equation now becomes  Let us fix and let vary in the equation We now have a one-parameter family of equations. Discuss the stability of equilibrium solutions. When does a bifurcation occur? What are the implications for a flat tax on the existence of oligarchies?     Flat Income Tax   To model the taxation of income (or capital gains), assume the government takes away a fixed fraction of the wealth gained by the oligarchs in time , What are the equilibrium solutions. Discuss their stability. What effect does a flat income tax have on an oligarchy?     Progressive Wealth Tax   A progressive wealth tax would mean that itself grows with . Assume that , where is a fixed positive constant, and is a continuous, monotonically increasing function of with . Our equation now becomes What are the equilibrium solutions for this equations. Examine the stability when and . What happens to oligarchies in both cases?     Progressive Income Tax   In a flat income tax the government takes away a fixed fraction of the wealth gained by the oligarchs in time , In a progressive income tax, the government will take away a larger fraction as income increases. In other words, suppose that government collects taxes as a function of . Suppose that is a monotoniically increasing function of , where . The greater an oligarch's gain per unit time, the greater percentage will be collected as tax. Assuming that the government will never tax at a rate of 100%, we have for all . The equation for a progressive income tax is now What will happen to oligarchs under a progressive income tax?      Your Final Report   Your final report should contain a one-page executive summary. The executive summary should summarize your work for work in a way that the reader can rapidly become acquainted with the material. It should contain a brief description of the problem, important background information, a discussion of pertinent assumptions, a short description of your methodology, concise analysis, and your main conclusions. Assume the reader is familiar with the basics of calculus and differential equations, so there is no need to walk through every step of your solution process or include equations. However, you should still describe the processes and mathematical techniques you used to reach your conclusions and explain why you used them. Refer the reader to the appendices as needed.  Appendices should be neatly formatted and present information in a logical manner. DO NOT simply print out Sage code or write isolated equations. Consolidate your results and provide a short explanation of what it is the reader is seeing while also highlighting key pieces of information in the appendix.    "
},
{
  "id": "systems01",
  "level": "1",
  "url": "systems01.html",
  "type": "Section",
  "number": "2.1",
  "title": "Modeling with Systems",
  "body": " Modeling with Systems    To understand and be able to create models using system of differential equations  To understand that solutions to the system as parametric plots in the -plane.  To understand that a second-order linear equation  can be written as a system of first-order equations by letting .  To understand that equilibrium solutions for a system of differential equations are those values of and such that both and .     Many situations are best modeled with a system of differential equations rather than a single equation. We have already derived a model that describes how a population of snowshoe hares interacts with one of their primary predators, the lynx ( ). We denoted the population of hares by and the population of lynx by , where is the time measured in years and derived the system of differential equations  Just as in first-order differential equations, we can examine the equilibrium solutions of a system. More specifically, we define an equilibrium solution system equilibrium solution equilibrium solution systems of differential equations for a system of differential equations to be those values of and such that and . That is, an equilibrium solution is a solution where neither or is changing.    Predator-Prey Systems  Suppose that we have a predator-prey system consisting of a population of foxes ( ) and of rabbits ( ). Foxes are omnivores. Their diet consists of small mammals, including rabbits, as well as fruits, berries, and vegetables. They will even eat fish and crabs.  we have an equilibrium solution at and . That is, the system is in balance and there is just enough prey to support a constant population of predators at the point .  If the number of rabbits or foxes changes, then the system is no longer in balance. For example, if and , then and the rabbit population will be increasing while the fox population will decrease. If we assume that we have initial conditions we can apply a numerical algorithm to generate a solution for our system. You will find technology extremely useful when analyzing systems. We will introduce Sage commands for analyzing systems of equations at the end of this section. The graphs of the solutions for and are given in . Notice that the solutions are periodic with the same period. Observe that a peak in the rabbit population is followed by a peak in the fox population.       f(t,y) = (2*y[0] - y[0]*y[1],-5*y[1] + y[0]*y[1])        R(t)  F(t)         A simple predator-prey system   We can graph the solution to our system in a different manner we can construct a parametric plot of our solution in the -plane. Thus, a point on the graph is given by at time . We can view the solution curve of our system in the -plane in . The -plane is called the phase plane phase plane for our system of differential equations and is analogous to the phase line that we used during our investigation of slope fields for autonomous differential equations. We can plot many solutions to our predator-prey system and even plot direction fields in the phase plane ( ).      f(t,y) = (2*y[0] - y[1]*y[0], -5*y[1] + y[0]*y[1])          A solution curve in the -plane       f(t,y) = (2*y[0] - y[1]*y[0], -5*y[1] + y[0]*y[1])    gap = 1           The phase plane for a predator-prey system   We will now modify our system by assuming that the rabbit population will grow logistically if there are no predators present. The system can now be written as where is the carrying capacity. As a specific example, consider the system  It is easy to see that we have two equilibrium solutions one at and one at . Our solutions now behave very differently from the assumption that the population of the prey grows exponentially. If we have initial values and , then our solution is no longer periodic ( ). In fact, the solutions tend towards the equilibrium solution. The phase plane for our modified predator-prey system is given in . The equilibrium solution is an example of a stable equilibrium solution equilibrium solution stable .      f(t,y) = (2*y[0]*(1 - y[0]\/10) - y[0]*y[1],-5*y[1] + y[0]*y[1])        F(t)  R(t)        Solutions for a modified predator-prey system       f(t,y) = (2*y[0]*(1 - y[0]\/10) - y[0]*y[1],-5*y[1] + y[0]*y[1])    gap = 1\/2           Phase plane for a modified predator-prey system    Modifying Predator-Prey Systems   One example of a predator-prey system is the relationship between arctic wolves and caribou. The Porcupine caribou herd in northern Canada and Alaska numbers between 200,000 and 235,000 animals. These animals migrate over 1,500 mi (2,400 km) a year between their winter range and calving grounds at the Beaufort Sea, the longest land migration route of any land mammal on Earth. The arctic wolf is one of the primary predators of the caribou, especially during the annual migration. Consider the following predator-prey system for arctic wolves and caribou, where is the population of the caribou and is the population of the wolves at time .     How would you modify this system to include the effect of hunting of the caribou at a rate of units of prey per unit of time?      How would you modify this system to include the effect of hunting of wolves at a rate proportional to the number of wolves?      Suppose the wolves discover a second, unlimited source of food, but they still prefer to eat caribou when they can catch them. How would you modify the system to include this assumption?      Suppose the wolves discover a second source of food that is limited in supply. How would you modify the system to include this assumption?      Suppose that the wolves migrate to a different area if there are more than three times as many prey as predators in that area ( ) and they move back if there are fewer than three times as many prey as predators. How would you modify the system to take this into account?      Suppose that prey move out of an area at a rate proportional to the number of predators in the area. How would you modify the system to take this into account?       The Spring-Mass Model Revisited  Recall the spring-mass model from . We have a mass lying on a flat surface that is attached to one end of a spring with the other end of the spring attached to a wall. The spring displacement is denoted by . If , then the spring is stretched. If , the spring is compressed. If , then the spring is in a state of equilibrium ( ). If the surface is frictionless and we pull on the mass, then the mass will oscillate.  If we use a dashpot to add damping, the second-order differential equation for the spring-mass system is or where , , and are all positive constants.  A second-order differential equation can be restated in terms of a system of first order differential equations. Given the differential equation with initial position and initial velocity , we can rewrite this equation as a system of first-order differential equations by letting . In this case, the equation becomes We now have a system of first-order differential equations, with initial conditions   A Harmonic Oscillator   Consider the equation for the motion of a simple harmonic oscillator.     Rewrite the second-order differential equation, , as a system of two first-order differentail equations, where .      Consider the function . Under what conditions on is a solution to the differential equation?      What initial condition ( ) in the -plane corresponds to this solution?      In terms of and , what is the period of this solution?      Sketch the solution curve in the -plane that corresponds to this solution.       Modeling Epidemics  Systems of differential equations are very useful in epidemiology. Differential equations can be used to model various epidemics, including the bubonic plague, influenza, AIDS, the 2015 ebola outbreak in west Africa, and the COVID-19 pandemic. To understand how we might model an epidemic, we will consider a very simple situation. We will assume that we have a closed population of size , where immigration, emigration, and birth do not play an important role. We will also ignore any deaths that are not related to our disease.  We will assume that each individual in the population falls into one of the following categories: Susceptible individuals are those who do not yet have the disease and can catch the disease from infected individuals. Individuals enter the removed population by either recovering from the disease or dying. If an infected individual recovers, then the individual is immune to the disease. Schematically, we can represent the effect of the disease by the diagram Since the population is closed, we know that This model is called an SIR model SIR model .  We can model how the disease acts with the following system of equations, We say that is the rate of infection and is the rate at which the infected are removed. That is, an infected individual either dies or recovers after days. Since we need only solve the system Letting and , we can see how the susceptible and infected populations interact in an SIR epidemic in .      alpha = 0.005  beta = 0.08  f(t,y) = (-alpha*y[0]*y[1],alpha*y[0]*y[1] - beta*y[1])        I(t)  S(t)        The susceptible and removed populations for an SIR epidemic   There are many questions associated with epidemic models.  Will there be an epidemic?  If there is an epidemic, how many individuals will be infected?  Is there a period of time for which individuals are exposed to the disease but exhibit no symptoms and cannot infect others?  If the disease is endemic, what is the prevalence of the infection?  Can the disease be eradicated or controlled?  What is the effect of the population age structure?  To explore models in more depth, see .    Important Lessons   A second-order linear equation  can be written as a system of first-order equations by letting .  We define an equilibrium solution for a system of differential equations to be those values of and such that and .  We can graph solutions to the system as parametric plots in the -plane. A point on the graph is given by at time . The -plane is called the phase plane for our system of differential equations.  Solution curves in the phase plane of can act very differently depending on how close they are to a particular equilibrium solution.       Given a system of first-order differential equations, explain in your own words what it means to be a stable equilibrium solution for the system.       Exercises    Verify whether or not the given pair of functions, forms a solution to the system   ,  ,  ,  ,       Verify whether or not the given pair of functions, forms a solution to the system   ,  ,  ,  ,       A system is autonomous system autonomous if and do not depend on ; that is, Which of the following systems are autonomous?           Change each of the following second-order initial value problems into a system of equations.           Change each of the following second-order initial value problems into a system of equations.           Consider the SIR model where is the susceptible population and is the infected population.  Modify the SIR model to account for the situation where the susceptible population is reproducing at a rate proportional to the current population.  Modify the SIR model to account for the situation where the susceptible population is decreasing at a constant rate such as susceptibles leaving an infected area or city.  Modify the SIR model to account for the situation where the infected population is increasing at a constant rate such as infected individuals entering an infected area or city from the outside.       A mass weighing 4 pounds stretches a spring 4 inches.  Consider the function . Under what conditions on is a solution to the differential equation?  Formulate an initial value problem that corresponds to the motion of this undamped mass-spring system if the mass is extended foot from its rest position and released with no initial velocity.  Using the result of the previous exercise, find the solution of this initial value problem.       Using Sage to Solve Systems  We can use Sage to plot the solution of the system First, let us plot a direction field for our system.   Notice the vectors have different lengths depending on their magnitudes. If we wish all of the vectors to have the same length, we can divide each component by the length of the vector.   We can also add axes labels to our plot.   Now suppose that we wish to plot solutions and to our system. We can use the Sage command desolve_system_rk4 .   We now have a numerical approximation of the solution to the system . However, our approximation is just a very long list of points. In fact, we get a list of triples, . It would be much more useful if we could display a graph of the solution. In the code below, we grab pairs and and then plot the points using the line command.   We can also add colors, axes labels, and legend colors so that the plot makes more sense.   To plot the solution in the plane, we will need to select the second two entries in each triple.   We can adjust the thickness of the plot add an arrow to indicate the direction of the solution.   Now let us add a vector field to our plot.   To learn more about how to use Sage to solve systems of differential equations, see . The Sage cell below can be used to make your own computations.    "
},
{
  "id": "systems01-2",
  "level": "2",
  "url": "systems01.html#systems01-2",
  "type": "Objectives",
  "number": "2.1",
  "title": "",
  "body": "  To understand and be able to create models using system of differential equations  To understand that solutions to the system as parametric plots in the -plane.  To understand that a second-order linear equation  can be written as a system of first-order equations by letting .  To understand that equilibrium solutions for a system of differential equations are those values of and such that both and .   "
},
{
  "id": "systems01-3-2",
  "level": "2",
  "url": "systems01.html#systems01-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "equilibrium solution "
},
{
  "id": "systems01-figure-simple-predator-prey-system",
  "level": "2",
  "url": "systems01.html#systems01-figure-simple-predator-prey-system",
  "type": "Figure",
  "number": "2.1.1",
  "title": "",
  "body": "     f(t,y) = (2*y[0] - y[0]*y[1],-5*y[1] + y[0]*y[1])        R(t)  F(t)         A simple predator-prey system  "
},
{
  "id": "systems01-subsection-predator-prey-5",
  "level": "2",
  "url": "systems01.html#systems01-subsection-predator-prey-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "phase plane "
},
{
  "id": "systems01-figure-solution-curve-predator-prey",
  "level": "2",
  "url": "systems01.html#systems01-figure-solution-curve-predator-prey",
  "type": "Figure",
  "number": "2.1.2",
  "title": "",
  "body": "    f(t,y) = (2*y[0] - y[1]*y[0], -5*y[1] + y[0]*y[1])          A solution curve in the -plane  "
},
{
  "id": "systems01-figure-phase-plane-predator-prey",
  "level": "2",
  "url": "systems01.html#systems01-figure-phase-plane-predator-prey",
  "type": "Figure",
  "number": "2.1.3",
  "title": "",
  "body": "    f(t,y) = (2*y[0] - y[1]*y[0], -5*y[1] + y[0]*y[1])    gap = 1           The phase plane for a predator-prey system  "
},
{
  "id": "systems01-subsection-predator-prey-9",
  "level": "2",
  "url": "systems01.html#systems01-subsection-predator-prey-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "stable equilibrium solution "
},
{
  "id": "systems01-figure-modified-predator-prey",
  "level": "2",
  "url": "systems01.html#systems01-figure-modified-predator-prey",
  "type": "Figure",
  "number": "2.1.4",
  "title": "",
  "body": "    f(t,y) = (2*y[0]*(1 - y[0]\/10) - y[0]*y[1],-5*y[1] + y[0]*y[1])        F(t)  R(t)        Solutions for a modified predator-prey system  "
},
{
  "id": "systems01-figure-modified-predator-prey-phase-plane",
  "level": "2",
  "url": "systems01.html#systems01-figure-modified-predator-prey-phase-plane",
  "type": "Figure",
  "number": "2.1.5",
  "title": "",
  "body": "    f(t,y) = (2*y[0]*(1 - y[0]\/10) - y[0]*y[1],-5*y[1] + y[0]*y[1])    gap = 1\/2           Phase plane for a modified predator-prey system  "
},
{
  "id": "systems01-subsection-predator-prey-12",
  "level": "2",
  "url": "systems01.html#systems01-subsection-predator-prey-12",
  "type": "Activity",
  "number": "2.1.1",
  "title": "Modifying Predator-Prey Systems.",
  "body": " Modifying Predator-Prey Systems   One example of a predator-prey system is the relationship between arctic wolves and caribou. The Porcupine caribou herd in northern Canada and Alaska numbers between 200,000 and 235,000 animals. These animals migrate over 1,500 mi (2,400 km) a year between their winter range and calving grounds at the Beaufort Sea, the longest land migration route of any land mammal on Earth. The arctic wolf is one of the primary predators of the caribou, especially during the annual migration. Consider the following predator-prey system for arctic wolves and caribou, where is the population of the caribou and is the population of the wolves at time .     How would you modify this system to include the effect of hunting of the caribou at a rate of units of prey per unit of time?      How would you modify this system to include the effect of hunting of wolves at a rate proportional to the number of wolves?      Suppose the wolves discover a second, unlimited source of food, but they still prefer to eat caribou when they can catch them. How would you modify the system to include this assumption?      Suppose the wolves discover a second source of food that is limited in supply. How would you modify the system to include this assumption?      Suppose that the wolves migrate to a different area if there are more than three times as many prey as predators in that area ( ) and they move back if there are fewer than three times as many prey as predators. How would you modify the system to take this into account?      Suppose that prey move out of an area at a rate proportional to the number of predators in the area. How would you modify the system to take this into account?    "
},
{
  "id": "systems01-subsection-spring-mass-5",
  "level": "2",
  "url": "systems01.html#systems01-subsection-spring-mass-5",
  "type": "Activity",
  "number": "2.1.2",
  "title": "A Harmonic Oscillator.",
  "body": " A Harmonic Oscillator   Consider the equation for the motion of a simple harmonic oscillator.     Rewrite the second-order differential equation, , as a system of two first-order differentail equations, where .      Consider the function . Under what conditions on is a solution to the differential equation?      What initial condition ( ) in the -plane corresponds to this solution?      In terms of and , what is the period of this solution?      Sketch the solution curve in the -plane that corresponds to this solution.    "
},
{
  "id": "systems01-subsection-epidemics-3",
  "level": "2",
  "url": "systems01.html#systems01-subsection-epidemics-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "SIR model "
},
{
  "id": "systems01-figure-SIR-epidemic",
  "level": "2",
  "url": "systems01.html#systems01-figure-SIR-epidemic",
  "type": "Figure",
  "number": "2.1.6",
  "title": "",
  "body": "    alpha = 0.005  beta = 0.08  f(t,y) = (-alpha*y[0]*y[1],alpha*y[0]*y[1] - beta*y[1])        I(t)  S(t)        The susceptible and removed populations for an SIR epidemic  "
},
{
  "id": "systems01-subsection-important-lessons-2",
  "level": "2",
  "url": "systems01.html#systems01-subsection-important-lessons-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "second-order linear equation equilibrium solution phase plane "
},
{
  "id": "rq-systems01-stability",
  "level": "2",
  "url": "systems01.html#rq-systems01-stability",
  "type": "Reading Question",
  "number": "2.1.5.1",
  "title": "",
  "body": "  Given a system of first-order differential equations, explain in your own words what it means to be a stable equilibrium solution for the system.    "
},
{
  "id": "systems01-exercises-2",
  "level": "2",
  "url": "systems01.html#systems01-exercises-2",
  "type": "Exercise",
  "number": "2.1.6.1",
  "title": "",
  "body": "  Verify whether or not the given pair of functions, forms a solution to the system   ,  ,  ,  ,    "
},
{
  "id": "systems01-exercises-3",
  "level": "2",
  "url": "systems01.html#systems01-exercises-3",
  "type": "Exercise",
  "number": "2.1.6.2",
  "title": "",
  "body": "  Verify whether or not the given pair of functions, forms a solution to the system   ,  ,  ,  ,    "
},
{
  "id": "systems01-exercises-4",
  "level": "2",
  "url": "systems01.html#systems01-exercises-4",
  "type": "Exercise",
  "number": "2.1.6.3",
  "title": "",
  "body": "  A system is autonomous system autonomous if and do not depend on ; that is, Which of the following systems are autonomous?        "
},
{
  "id": "systems01-exercises-5",
  "level": "2",
  "url": "systems01.html#systems01-exercises-5",
  "type": "Exercise",
  "number": "2.1.6.4",
  "title": "",
  "body": "  Change each of the following second-order initial value problems into a system of equations.        "
},
{
  "id": "systems01-exercises-6",
  "level": "2",
  "url": "systems01.html#systems01-exercises-6",
  "type": "Exercise",
  "number": "2.1.6.5",
  "title": "",
  "body": "  Change each of the following second-order initial value problems into a system of equations.        "
},
{
  "id": "systems01-exercises-7",
  "level": "2",
  "url": "systems01.html#systems01-exercises-7",
  "type": "Exercise",
  "number": "2.1.6.6",
  "title": "",
  "body": "  Consider the SIR model where is the susceptible population and is the infected population.  Modify the SIR model to account for the situation where the susceptible population is reproducing at a rate proportional to the current population.  Modify the SIR model to account for the situation where the susceptible population is decreasing at a constant rate such as susceptibles leaving an infected area or city.  Modify the SIR model to account for the situation where the infected population is increasing at a constant rate such as infected individuals entering an infected area or city from the outside.    "
},
{
  "id": "systems01-exercises-8",
  "level": "2",
  "url": "systems01.html#systems01-exercises-8",
  "type": "Exercise",
  "number": "2.1.6.7",
  "title": "",
  "body": "  A mass weighing 4 pounds stretches a spring 4 inches.  Consider the function . Under what conditions on is a solution to the differential equation?  Formulate an initial value problem that corresponds to the motion of this undamped mass-spring system if the mass is extended foot from its rest position and released with no initial velocity.  Using the result of the previous exercise, find the solution of this initial value problem.    "
},
{
  "id": "systems02",
  "level": "1",
  "url": "systems02.html",
  "type": "Section",
  "number": "2.2",
  "title": "The Geometry of Systems",
  "body": " The Geometry of Systems    To understand how the righthand side of the system can be viewed as a vector field, , which can be plotted in the -plane.  To understand and be able to use nullclines and phase plane analysis to sketch solution curves for the system     We can use direction fields system direction field in the phase plane to represent autonomous systems system autonomous  Equation tells us how a solution curve changes in the direction, while equation tells us how a solution curve changes in the direction.    Direction Fields   Consider the differential equation for a simple harmonic oscillator that we developed in , If we assume that and are both equal to one and let , we can rewrite this equation as the first order system, The direction field is relatively easy to understand. After plotting only few vectors, we can very quickly see that the vectors are tangent to circles centered at the origin ( ). Since the solutions to the undamped harmonic oscillator are of the form for arbitrary constants and , this should not be too surprising.      f(t,y) = (y[1], -y[0])    gap = 1\/2         The direction field for a harmonic oscillator    Let us examine some systems of equations with direction fields that are easily plotted.   The system gives us a direction field where the vectors point away from the origin ( ).      f(t,y) = (y[0], y[1])    gap = 1\/2        The direction field for and   The system gives us a direction field where the vectors point towards the origin ( ).      f(t,y) = (-y[0], -y[1])    gap = 1\/2        The direction field for and   The system also gives us a direction field where the vectors point towards the origin; however, we shall soon see that there are important differences between this direction field and the direction field of the previous system ( ).      f(t,y) = (-y[0], -5*y[1])    gap = 1\/2        The direction field for and     Plotting Direction Fields   Plot direction fields for each of the following systems of differential equations in the -plane.                          Modified Predator-Prey System  Let us recall the modified predator-prey system that we developed in the last section. That is, we will assume that the prey in our model has logistic growth, where is the carrying capacity. In order to investigate the geometric properties of our system, we will rewrite our system in vector form. For each value of , we will use to denote the vector-valued function This vector-valued function, corresponds to our solution curve in the -plane. Now we can write our predator-prey model as a single vector equation,    vector-valued function   We can view the right side of the equation as a vector field vector field . The specific example that we examined was The vector field form of this system is We can associate a vector in the -plane for each value of and . For example, if we let , we have . At this particular point, the population of rabbits is falling rapidly while the number of foxes is climbing very quickly, We can represent this vector in the phase plane by drawing an arrow in the proper direction. Thus, we obtain a direction field for our system of differential equations ( ).      f(t,y) = (2*y[0]*(1 - y[0]\/10) - y[0]*y[1],-5*y[1] + y[0]*y[1])    gap = 1\/2         A vector field for the predator-prey system     A Competing Species Model   Suppose that and are the population of two distinct species that compete for the same resources. For example, two species of fish may compete for the same food in a lake, leopards and lions may compete for the same prey, or cattle and sheep may compete for the same grazing land. We can model two competing species using the following system of first-order differential equations, The first term in each equation is the logistic growth of each species. The second term is how the species is affected by interacting with the competing species.   Suppose that and are two populations, competing for the same resources, are governed by the following system of differential equations, If we study how the two populations interact, we will discover two very different cases depending on the value of the parameter .  If we let , then there is a strong interaction between the two species and our system becomes We are interested in what happens as . First we will examine what happens when and : If , then Similarly, if , we have The lines in equations are called nullclines nullcline . In general, if we are given the system then the values of and satisfying are called the -nullclines of the system and the values of and satisfying the equation are called the -nullclines of the system.      f(t,y) = (y[0]*(1-y[0]) - 2*y[0]*y[1], y[1]*(1 - y[1]) - 2*y[0]*y[1])   gap = 1\/8               Nullclines for the case   In our example, we can plot the and -nullclines to help us understand our system ( ). Of course, we have an equilibrium solution whenever an -nullcline intersects with a -nullcline. Thus, the equilibrium points for our particular system are , , , and . Furthermore, we can choose a representative point in each region to find how the direction field is oriented. If we are given the initial condition for example, we can see that Since both of these numbers are negative, we can see that our initial trajectory is headed down and to the left slightly more to the left than down. However, we have no guarantee that the trajectory will continue in this direction.  Before we proceed further with our analysis, let us determine what happens on the nullclines themselves. That is, we will examine the case when or . If , then any solution crossing this -nullcline must be moving vertically. There can be no right or left movement at this point in the phase portrait. We can indicate this fact along with the direction of vertical movement by drawing a vertical slash with an arrow on the -nullcline ( ). For example, the point lies on the -nullcline and Therefore, the trajectory that crosses the -nullcline at is moving down. As we move along the -nullcline, the direction of this arrow can only change when we cross an -nullcline.  Similarly, there can be no vertical motion on an -nullcline. We will indicate the direction of horizontal motion by drawing a horizontal line with an arrow pointing to the right if on the -nullcline and an arrow pointing to the left if on the -nullcline.  We can also determine the basic direction of the solution curve by checking what happens at a point in each of the regions bounded by the nullclines. For example, at the point we find that Thus, the general direction of any solution curve in this region is up and right ( ).  What happens to the initial condition ? We see three possible scenarios if we follow the nullclines for large values of .  Only species survives and species becomes extinct.  Only species survives and species becomes extinct.  There are essentially equal numbers of species and .     Plotting Direction Fields with Nullclines   Consider the competing species model where the species interact weakly, say .     Find the and -nullclines for this system.      Find all equilibrium points for this system.      The nullclines will divide the first quadrant of the plane, and , into different regions. In each of these regions find a slope vector at some point in the region. For example, at the point , we can attach slope vector .      Sketch the phase plane for this system.      If the initial populations are given by and , what happens to the two populations as ?      There is no reason why our nullclines should be limited to straight lines. The system has an -nullcline and a -nullcline . These two nullclines intersect at , and the system has a single equilibrium solution. The nullclines divide the plane into four basic regions ( ). By choosing a point in each of these regions and determining the direction of the slope field at that point, we can decide the direction of the slope field in the entire region.      f(t,y) = (y[1] - y[0]^2, y[0] - 2)   gap = 1    g(x) = x^2           The system and   The only equilibrium solution of our system occurs at .     Plotting Direction Fields with Sage  It is easy to plot direction fields using Sage . We can plot the direction field for the system using the following Sage interact. You can evaluate the cell below to get a menu driven applet for drawing direction fields for systems of two differential equations.   A Sage applet for plotting direction fields for systems      A Summary of Phase Plane Analysis  We can use the following series of steps to summarize phase plane analysis for the nonlinear system   Step 1. Draw the curves where . These curves are called the -nullclines . When a solution curve lies on one of these curves, , draw vertical slash marks on the -nullclines to remind yourself that a trajectory crossing the nullcline can only do so if it is moving in a vertical direction at the instant of crossing.  Step 2. Draw the curves where . These curves are called the -nullclines . When lies on one of these curves, . Draw horizontal slash marks on the -nullclines to remind yourself that a trajectory crossing the nullcline can only do so if it is moving in a horizontal direction at the instant of crossing.  Step 3. Label the points where the and -nullclines intersect. These intersections are the equilibrium points . If is ever at one of these points, then both and vanish. This means that the trajectory stays at the equilibrium point for all time. If our system is going to tend towards a steady state, then will approach on of the equilibrium points as .  Step 4. Label the regions of the -plane where and where . These regions are always separated by -nullclines. Likewise, label the regions where is positive and negative.  Step 5. Go back and put arrows on the vertical hash marks of the nullclines. These arrows indicate whether the motion across the nullcline is up or down. The arrows are up on the parts of the -nullclines that are in the region, and down on those parts of the -nullclines in the regions. Likewise, draw arrows on the horizontal slash marks of the -nullclines. These arrows are pointing right on the parts of the -nullclines in the regions and left point on the parts in the regions.  Step 6.   If and , then both and are increasing and the trajectory moves up and right.  If and , the trajectory moves down and right.  If and , the trajectory moves up and left.  If and , the trajectory moves down and left.     Important Lessons   The righthand side of the system can be viewed as a vector field, , which can be plotted in the -plane.  Competition between two competing species can be modeled with the system  We can use nullclines and phase plane analysis to sketch solution curves for the system       Using your own words, explain what a nullcline is.       What happens at the intersection of an -nullcline and a -nullcline?       Exercises    Consider a cooperating species model where the species interact weakly, say .  Find the and -nullclines for this system.  Find all equilibrium points for this system.  Sketch the phase plane for this system.  If the initial populations are given by and , what happens to the two populations as ?      Plotting Phase Portraits  For the following two systems of equations  Find the equilibrium points of the system.  Sketch the phase plane and direction field for each system (technology will be helpful).  Briefly describe the behavior of typical solutions.                               Consider an epidemic that moves through an isolated population. We will make the following assumptions about the epidemic.  Individuals are infected at a rate proportional to the product of the number of infected and susceptible individuals. We assume that the constant of proportionality is .  The length of the incubation period is negligible, and infectious individuals are immediately infectious.  On the average, an infected individual dies after 10 days.  Only a single individual is initially ill.  Infected individuals do not give birth, but susceptible individuals have a birth rate of 0.0003 per individual per year. Newborns are susceptible.  If is the number of susceptible and is the number of infected people, then  The constant is a measure of the relative infectivity of the disease. Some diseases such as Ebola, a viral hemorrhagic fever, are extremely infectious with a mortaility rate of up to 90%. On the other hand, AIDS which is caused by the HIV virus, has a much lower transmission rate. The goal of this exercise is to examine the differences between the two.  If , draw the phase portrait. Be sure to label all nullclines and equilibrium solutions. Suppose that and . What happens to the solution curve as ?  If , draw the phase portrait. Be sure to label all nullclines and equilibrium solutions. Suppose that and . What happens to the solution curve as ?  What conclusions can you draw about the behavior of the two different epidemics?       Plotting Nullclines with Sage   Let us use Sage to analyze the system First let us plot the phase plane of the system without nullclines.   If these Sage commands seem unfamiliar, you may want to refer to  We can add nullclines to our plot using the implicit_plot function from Sage .   The -nullclines are plotted in green and the -nullclines are in red.   "
},
{
  "id": "systems02-2",
  "level": "2",
  "url": "systems02.html#systems02-2",
  "type": "Objectives",
  "number": "2.2",
  "title": "",
  "body": "  To understand how the righthand side of the system can be viewed as a vector field, , which can be plotted in the -plane.  To understand and be able to use nullclines and phase plane analysis to sketch solution curves for the system   "
},
{
  "id": "systems02-3-1",
  "level": "2",
  "url": "systems02.html#systems02-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "direction fields autonomous systems "
},
{
  "id": "systems02-subsection-direction-fields-2",
  "level": "2",
  "url": "systems02.html#systems02-subsection-direction-fields-2",
  "type": "Example",
  "number": "2.2.1",
  "title": "",
  "body": " Consider the differential equation for a simple harmonic oscillator that we developed in , If we assume that and are both equal to one and let , we can rewrite this equation as the first order system, The direction field is relatively easy to understand. After plotting only few vectors, we can very quickly see that the vectors are tangent to circles centered at the origin ( ). Since the solutions to the undamped harmonic oscillator are of the form for arbitrary constants and , this should not be too surprising.      f(t,y) = (y[1], -y[0])    gap = 1\/2         The direction field for a harmonic oscillator   "
},
{
  "id": "systems02-subsection-direction-fields-4",
  "level": "2",
  "url": "systems02.html#systems02-subsection-direction-fields-4",
  "type": "Example",
  "number": "2.2.3",
  "title": "",
  "body": " The system gives us a direction field where the vectors point away from the origin ( ).      f(t,y) = (y[0], y[1])    gap = 1\/2        The direction field for and   The system gives us a direction field where the vectors point towards the origin ( ).      f(t,y) = (-y[0], -y[1])    gap = 1\/2        The direction field for and   The system also gives us a direction field where the vectors point towards the origin; however, we shall soon see that there are important differences between this direction field and the direction field of the previous system ( ).      f(t,y) = (-y[0], -5*y[1])    gap = 1\/2        The direction field for and   "
},
{
  "id": "systems02-subsection-direction-fields-5",
  "level": "2",
  "url": "systems02.html#systems02-subsection-direction-fields-5",
  "type": "Activity",
  "number": "2.2.1",
  "title": "Plotting Direction Fields.",
  "body": " Plotting Direction Fields   Plot direction fields for each of the following systems of differential equations in the -plane.                       "
},
{
  "id": "systems02-subsection-predator-prey-4",
  "level": "2",
  "url": "systems02.html#systems02-subsection-predator-prey-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "vector field "
},
{
  "id": "systems02-figure-predator-prey-1",
  "level": "2",
  "url": "systems02.html#systems02-figure-predator-prey-1",
  "type": "Figure",
  "number": "2.2.7",
  "title": "",
  "body": "    f(t,y) = (2*y[0]*(1 - y[0]\/10) - y[0]*y[1],-5*y[1] + y[0]*y[1])    gap = 1\/2         A vector field for the predator-prey system  "
},
{
  "id": "systems02-example-competing-species",
  "level": "2",
  "url": "systems02.html#systems02-example-competing-species",
  "type": "Example",
  "number": "2.2.8",
  "title": "",
  "body": " Suppose that and are two populations, competing for the same resources, are governed by the following system of differential equations, If we study how the two populations interact, we will discover two very different cases depending on the value of the parameter .  If we let , then there is a strong interaction between the two species and our system becomes We are interested in what happens as . First we will examine what happens when and : If , then Similarly, if , we have The lines in equations are called nullclines nullcline . In general, if we are given the system then the values of and satisfying are called the -nullclines of the system and the values of and satisfying the equation are called the -nullclines of the system.      f(t,y) = (y[0]*(1-y[0]) - 2*y[0]*y[1], y[1]*(1 - y[1]) - 2*y[0]*y[1])   gap = 1\/8               Nullclines for the case   In our example, we can plot the and -nullclines to help us understand our system ( ). Of course, we have an equilibrium solution whenever an -nullcline intersects with a -nullcline. Thus, the equilibrium points for our particular system are , , , and . Furthermore, we can choose a representative point in each region to find how the direction field is oriented. If we are given the initial condition for example, we can see that Since both of these numbers are negative, we can see that our initial trajectory is headed down and to the left slightly more to the left than down. However, we have no guarantee that the trajectory will continue in this direction.  Before we proceed further with our analysis, let us determine what happens on the nullclines themselves. That is, we will examine the case when or . If , then any solution crossing this -nullcline must be moving vertically. There can be no right or left movement at this point in the phase portrait. We can indicate this fact along with the direction of vertical movement by drawing a vertical slash with an arrow on the -nullcline ( ). For example, the point lies on the -nullcline and Therefore, the trajectory that crosses the -nullcline at is moving down. As we move along the -nullcline, the direction of this arrow can only change when we cross an -nullcline.  Similarly, there can be no vertical motion on an -nullcline. We will indicate the direction of horizontal motion by drawing a horizontal line with an arrow pointing to the right if on the -nullcline and an arrow pointing to the left if on the -nullcline.  We can also determine the basic direction of the solution curve by checking what happens at a point in each of the regions bounded by the nullclines. For example, at the point we find that Thus, the general direction of any solution curve in this region is up and right ( ).  What happens to the initial condition ? We see three possible scenarios if we follow the nullclines for large values of .  Only species survives and species becomes extinct.  Only species survives and species becomes extinct.  There are essentially equal numbers of species and .   "
},
{
  "id": "systems02-subsection-competing-species-4",
  "level": "2",
  "url": "systems02.html#systems02-subsection-competing-species-4",
  "type": "Activity",
  "number": "2.2.2",
  "title": "Plotting Direction Fields with Nullclines.",
  "body": " Plotting Direction Fields with Nullclines   Consider the competing species model where the species interact weakly, say .     Find the and -nullclines for this system.      Find all equilibrium points for this system.      The nullclines will divide the first quadrant of the plane, and , into different regions. In each of these regions find a slope vector at some point in the region. For example, at the point , we can attach slope vector .      Sketch the phase plane for this system.      If the initial populations are given by and , what happens to the two populations as ?    "
},
{
  "id": "systems02-subsection-competing-species-5",
  "level": "2",
  "url": "systems02.html#systems02-subsection-competing-species-5",
  "type": "Example",
  "number": "2.2.10",
  "title": "",
  "body": " There is no reason why our nullclines should be limited to straight lines. The system has an -nullcline and a -nullcline . These two nullclines intersect at , and the system has a single equilibrium solution. The nullclines divide the plane into four basic regions ( ). By choosing a point in each of these regions and determining the direction of the slope field at that point, we can decide the direction of the slope field in the entire region.      f(t,y) = (y[1] - y[0]^2, y[0] - 2)   gap = 1    g(x) = x^2           The system and   The only equilibrium solution of our system occurs at .  "
},
{
  "id": "systems02-figure-interactive-direction-fields",
  "level": "2",
  "url": "systems02.html#systems02-figure-interactive-direction-fields",
  "type": "Figure",
  "number": "2.2.12",
  "title": "",
  "body": " A Sage applet for plotting direction fields for systems   "
},
{
  "id": "systems02-subsection-phase-plane-analysis-2",
  "level": "2",
  "url": "systems02.html#systems02-subsection-phase-plane-analysis-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "-nullclines -nullclines equilibrium points "
},
{
  "id": "rq-systems02-nullcline",
  "level": "2",
  "url": "systems02.html#rq-systems02-nullcline",
  "type": "Reading Question",
  "number": "2.2.7.1",
  "title": "",
  "body": "  Using your own words, explain what a nullcline is.    "
},
{
  "id": "rq-systems02-nullcline-intersection",
  "level": "2",
  "url": "systems02.html#rq-systems02-nullcline-intersection",
  "type": "Reading Question",
  "number": "2.2.7.2",
  "title": "",
  "body": "  What happens at the intersection of an -nullcline and a -nullcline?    "
},
{
  "id": "systems02-exercises-2",
  "level": "2",
  "url": "systems02.html#systems02-exercises-2",
  "type": "Exercise",
  "number": "2.2.8.1",
  "title": "",
  "body": "  Consider a cooperating species model where the species interact weakly, say .  Find the and -nullclines for this system.  Find all equilibrium points for this system.  Sketch the phase plane for this system.  If the initial populations are given by and , what happens to the two populations as ?    "
},
{
  "id": "systems02-exercises-phase-planes-3",
  "level": "2",
  "url": "systems02.html#systems02-exercises-phase-planes-3",
  "type": "Exercise",
  "number": "2.2.8.2",
  "title": "",
  "body": "    "
},
{
  "id": "systems02-exercises-phase-planes-4",
  "level": "2",
  "url": "systems02.html#systems02-exercises-phase-planes-4",
  "type": "Exercise",
  "number": "2.2.8.3",
  "title": "",
  "body": "    "
},
{
  "id": "systems02-exercises-phase-planes-5",
  "level": "2",
  "url": "systems02.html#systems02-exercises-phase-planes-5",
  "type": "Exercise",
  "number": "2.2.8.4",
  "title": "",
  "body": "    "
},
{
  "id": "systems02-exercises-phase-planes-6",
  "level": "2",
  "url": "systems02.html#systems02-exercises-phase-planes-6",
  "type": "Exercise",
  "number": "2.2.8.5",
  "title": "",
  "body": "    "
},
{
  "id": "systems02-exercises-phase-planes-7",
  "level": "2",
  "url": "systems02.html#systems02-exercises-phase-planes-7",
  "type": "Exercise",
  "number": "2.2.8.6",
  "title": "",
  "body": "    "
},
{
  "id": "systems02-exercises-4",
  "level": "2",
  "url": "systems02.html#systems02-exercises-4",
  "type": "Exercise",
  "number": "2.2.8.7",
  "title": "",
  "body": "  Consider an epidemic that moves through an isolated population. We will make the following assumptions about the epidemic.  Individuals are infected at a rate proportional to the product of the number of infected and susceptible individuals. We assume that the constant of proportionality is .  The length of the incubation period is negligible, and infectious individuals are immediately infectious.  On the average, an infected individual dies after 10 days.  Only a single individual is initially ill.  Infected individuals do not give birth, but susceptible individuals have a birth rate of 0.0003 per individual per year. Newborns are susceptible.  If is the number of susceptible and is the number of infected people, then  The constant is a measure of the relative infectivity of the disease. Some diseases such as Ebola, a viral hemorrhagic fever, are extremely infectious with a mortaility rate of up to 90%. On the other hand, AIDS which is caused by the HIV virus, has a much lower transmission rate. The goal of this exercise is to examine the differences between the two.  If , draw the phase portrait. Be sure to label all nullclines and equilibrium solutions. Suppose that and . What happens to the solution curve as ?  If , draw the phase portrait. Be sure to label all nullclines and equilibrium solutions. Suppose that and . What happens to the solution curve as ?  What conclusions can you draw about the behavior of the two different epidemics?    "
},
{
  "id": "systems03",
  "level": "1",
  "url": "systems03.html",
  "type": "Section",
  "number": "2.3",
  "title": "Numerical Techniques for Systems",
  "body": " Numerical Techniques for Systems    To understand that many systems of equations cannot be solved analytically but can be solved using numerical techniques such as Euler's Method or Runge-Kutta methods to find approximate solutions for the system.  To understand that we are guaranteed unique local solutions to any system of first-order differential equations provided certain condtions are met.  To understand that uniqueness tells us that two distinct solutions cannot start at the same place nor can solutions intersect.  To understand that solutions do not depend on time in an autonomous system.     If we are unable to find an analytic solution to a first-order differential equation , there is no reason to expect that it will be any easier to solve a system of equations. However, many of the numerical techniques that are used to solve a first-order equation can be extended to solve a system.    Duffing's Equation  Large mobile cranes can reach up to 700 feet ( ). This is about the same height as a 50 story building. At such heights, cranes are susceptible to winds and the end of the boom can move back and forth several feet even in moderate winds. We can model the motion as a harmonic oscillator if the side-to-side motion is not too great. However, if the wind becomes too strong and the crane moves too much, gravity will become a factor and the crane may topple due to its weight.   Cranes   a photo of two construction cranes    Before we can construct a model that might best describe the swaying of a large crane, we should remind ourselves of how harmonic oscillators work (see ). A simple mass-spring system can be modeled by the equation where is the displacement of the mass at time . Given such a system, the mass will oscillate forever with constant amplitude. If we want to be a bit more realistic, we can introduce a damping force, where . Our equation now becomes If we let and , we can rewrite this last equation as If we set , we can rewrite this second-order equation as a system of first-order equations,  In the case of our swaying crane, we will let be the displacement of the end of the boom from the perfect vertical position. When , the boom is bent, and the structure of the boom supplies a strong restorative force to bring everything back to a true vertical position. Thus, the swaying of our crane's boom might be described by an equation such as or the equivalent system, We will learn how to solve such systems later, but it is easy to check that is a solution to our equation. The Sage code for solving this system is given below.   The constants and can be determined if we know the initial position and initial velocity of the end of the crane's boom. We show several solutions to our equation in .      b = 0.1  k = 0.3  f(t,y) = (y[1],-k*y[0] - b*y[1])              x(t)  v(t)        Solutions to   Modeling the swaying motion of a crane with a harmonic oscillator might work only if the side-to-side motion is small. If the motion is larger, we must account for the effect of gravity in our model. When is large, part of the crane will not be above any other part of the crane. Thus, gravity will pull downward on that part of the crane and will cause the crane to bend even further. We can model this effect by setting the equation for our harmonic oscillator equal to a factor of , When is small, this forcing term will not contribute much to the motion of the crane. However, when is large, the term will contribute a great deal. The equation is an example of Duffing's equation Duffing's equation .  We can rewrite equation as a system of first-order differential equations by letting , Thus, one of our main objectives should be finding and analyzing solutions to such a system.    Euler's Method for Systems  The system of equations is nonlinear due the term. There is little hope to finding an analytic solution to such a system. We can use software to plot the phase plane in order to learn something about the solutions ( ). However, we still need to numerically generate solutions in order to plot the phase plane.      b = 0.1  k = 0.3  f(t,y) = (y[1], -k*y[0] - b*y[1] + 0.02*y[0]^3)    gap = 1              The phase plane for Duffing's equation   Let us see how we might find a numerical solution for a system. Consider the system with initial conditions and . We can rewrite our system in vector form where , , , and . We wish to find approximate values and for the solution and at the points where is the step size. If we let and , then Euler's method now becomes or The initial conditions are used to determine , which is the tangent vector to the graph of the solution in the -plane ( ). We can move in the direction of this tangent vector for time in order to find the next point . We then calculate a new tangent vector and then move along this new vector for a time step to find . We can repeat this technique to generate an approximate solution curve in the phase plane.    vector form of a system    Numerical Solutions for Duffing's Equation  We are now in a position to calculate some solutions to Duffing's equation. Suppose that with initial conditions . Using a numerical algorithm, we can generate enough points to generate a graph of the solution ( ).      f(t,y) = (y[1],-0.3*y[0] + 0.02*y[0]^3 - 0.1*y[1])        v(t)  x(t)        Solutions for Duffing's equation with initial conditions and   The surprising thing about Duffing's equation is that it is extremely sensitive to initial conditions. A slight change in the initial conditions can yield dramatically different solutions. If we change the initial velocity to , we obtain a very different graph of the solution ( ). For small initial velocities, solutions spiral towards the origin. However, a larger initial velocity will send the solution in the phase plane away from the origin. If the crane sways too violently, we will have a disaster.      f(t,y) = (y[1],-0.3*y[0] + 0.02*y[0]^3 - 0.1*y[1])        v(t)  x(t)        Solutions for Duffing's equation with initial conditions and     Let us consider the system Then . Letting the step size be , we obtain and Similarly, Using this procedure, we can generate a list of values that will approximate the solution to our system ( ).                                         Euler's approximation for a system of equations   Notice that our system is not autonomous and depends on time. Therefore, we cannot graph the phase plane of this system; however, we can graph a solution curve in three dimensions ( ).    A solution curve for Duffing's equation        Solving a System Numerically   Consider the system with initial conditions and . You will find Sage very useful for this exercise     Show that satisfies the initial value problem.      Use Euler's method with step size to approximate this solution, and check how close the approximation is to the real solution when , , and .      Use Euler's method with step size to approximate this solution, and check how close the approximation is to the real solution when , , and .      Discuss how and why the Euler approximations differ from the real solution.       Taylor Series Methods  Just as in the case of a single first-order differential equation, we can think of Euler's approximation as the first two terms of the Taylor series expansion, To get a more accurate approximation, we can take the first two terms of the Taylor series. In this case, we must compute . If we return to our example, we can see how this is done. First, note that Our algorithm now becomes clear, Of course, this algorithm requires us to compute some derivatives.    A Word about Existence and Uniqueness    Let be a system of differential equations such that is continuously differentiable. If is the initial value at time , there exists a unique solution for the initial value problem on some open interval for some .    The consequences of the Existence and Uniqueness Theorem are much the same as they were for first-order differential equations.  If we are interested in a certain system of differential equations, it is very nice to know that a unique solution exists.  Uniqueness tells us that two solutions cannot start at the same place. Geometrically, this implies that solution curves cannot cross.  If we have an autonomous system , our solution does not depend on time. Thus, we obtain the same solution curve if we start at the same point even though we might start at different times.  For a proof of existence and uniqueness for systems of differential equations, see .    Important Lessons   A damped harmonic oscillator can be described by the second-order equation We can rewrite this equation as a first-order system,  Duffing's equation , is an example of a differential equation that is very sensitive to initial conditions.  Many systems of equations cannot be solved analytically. However, we can use numerical techniques such as Euler's Method to find approximate solutions for the system. Given the system with initial condition and step size , we can approximate a solution to the system by We can extend this method to the improved Euler's method, Taylor series methods, or Runge-Kutta methods.  Provided certain conditions are met, we are guaranteed unique local solutions to any system of first-order differential equations. Some of the following are consequences of existence and uniqueness.  Uniqueness tells us that two distinct solutions cannot start at the same place. Geometrically, this implies that solution curves cannot cross.  If we have an autonomous system , our differential equation does not depend on time. Thus, we obtain the same solution curve if we start at the same point even though we might start at different times.       What does it mean for a system of equations to be autonomous?       What does it mean for a system of equations to be sensitive to initial conditions?       Exercises    Consider the system with initial conditions and . You will find Sage very useful for this exercise   Show that satisfies the initial value problem.  Use Euler's method with step size to approximate this solution, and check how close the approximation is to the real solution when , , and .  Use Euler's method with step size to approximate this solution, and check how close the approximation is to the real solution when , , and .  Discuss how and why the Euler approximations differ from the real solution.       Consider the system with initial conditions and . You will find Sage very useful for this exercise   Show that satisfies the initial value problem.  Use Euler's method with step size to approximate this solution, and check how close the approximation is to the real solution when , , and .  Use Euler's method with step size to approximate this solution, and check how close the approximation is to the real solution when , , and .  Discuss how and why the Euler approximations differ from the real solution.       Consider the system with initial conditions and . You will find Sage very useful for this exercise   Show that satisfies the initial value problem.  Use Euler's method with step size to approximate this solution, and check how close the approximation is to the real solution when , , and .  Use Euler's method with step size to approximate this solution, and check how close the approximation is to the real solution when , , and .  Discuss how and why the Euler approximations differ from the real solution.       Using Sage to Solve Systems with Euler's Method  Sage is a very convenient tool for solving systems using Euler's method. Consider the system where and ranges from to .   We can generate a list of points instead of a table.   A list of points can be useful for creating a line plot.   Notice that we have been working over the rationals. The command to work over the real number is similar.   In practice a Runge-Kutta method is much more efficient that Euler's method. Consider the system with initial conditions and . We can use the desolve_system_rk4 command to obtain and plot a numerical solution.    Sage Exercises    Consider the system with initial conditions and .  Use eulers_method_2x2 with step size to find an approximate solution for .   Use desolve_system_rk4 with step size to find an approximate solution for .   Plot the solutions given by eulers_method_2x2 and desolve_system_rk4 on the same axes.   Discuss how and why the solution given by eulers_method_2x2 differs from the one given by desolve_system_rk4 .       "
},
{
  "id": "systems03-2",
  "level": "2",
  "url": "systems03.html#systems03-2",
  "type": "Objectives",
  "number": "2.3",
  "title": "",
  "body": "  To understand that many systems of equations cannot be solved analytically but can be solved using numerical techniques such as Euler's Method or Runge-Kutta methods to find approximate solutions for the system.  To understand that we are guaranteed unique local solutions to any system of first-order differential equations provided certain condtions are met.  To understand that uniqueness tells us that two distinct solutions cannot start at the same place nor can solutions intersect.  To understand that solutions do not depend on time in an autonomous system.   "
},
{
  "id": "systems03-figure-cranes",
  "level": "2",
  "url": "systems03.html#systems03-figure-cranes",
  "type": "Figure",
  "number": "2.3.1",
  "title": "",
  "body": " Cranes   a photo of two construction cranes   "
},
{
  "id": "systems03-figure-solutions-crane",
  "level": "2",
  "url": "systems03.html#systems03-figure-solutions-crane",
  "type": "Figure",
  "number": "2.3.2",
  "title": "",
  "body": "    b = 0.1  k = 0.3  f(t,y) = (y[1],-k*y[0] - b*y[1])              x(t)  v(t)        Solutions to  "
},
{
  "id": "systems03-subsection-duffing-9",
  "level": "2",
  "url": "systems03.html#systems03-subsection-duffing-9",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Duffing's equation "
},
{
  "id": "systems03-figure-duffings-equation-phase-plane",
  "level": "2",
  "url": "systems03.html#systems03-figure-duffings-equation-phase-plane",
  "type": "Figure",
  "number": "2.3.3",
  "title": "",
  "body": "    b = 0.1  k = 0.3  f(t,y) = (y[1], -k*y[0] - b*y[1] + 0.02*y[0]^3)    gap = 1              The phase plane for Duffing's equation  "
},
{
  "id": "systems03-subsection-eulers-method-6",
  "level": "2",
  "url": "systems03.html#systems03-subsection-eulers-method-6",
  "type": "Example",
  "number": "2.3.4",
  "title": "Numerical Solutions for Duffing’s Equation.",
  "body": " Numerical Solutions for Duffing's Equation  We are now in a position to calculate some solutions to Duffing's equation. Suppose that with initial conditions . Using a numerical algorithm, we can generate enough points to generate a graph of the solution ( ).      f(t,y) = (y[1],-0.3*y[0] + 0.02*y[0]^3 - 0.1*y[1])        v(t)  x(t)        Solutions for Duffing's equation with initial conditions and   The surprising thing about Duffing's equation is that it is extremely sensitive to initial conditions. A slight change in the initial conditions can yield dramatically different solutions. If we change the initial velocity to , we obtain a very different graph of the solution ( ). For small initial velocities, solutions spiral towards the origin. However, a larger initial velocity will send the solution in the phase plane away from the origin. If the crane sways too violently, we will have a disaster.      f(t,y) = (y[1],-0.3*y[0] + 0.02*y[0]^3 - 0.1*y[1])        v(t)  x(t)        Solutions for Duffing's equation with initial conditions and   "
},
{
  "id": "systems03-subsection-eulers-method-7",
  "level": "2",
  "url": "systems03.html#systems03-subsection-eulers-method-7",
  "type": "Example",
  "number": "2.3.7",
  "title": "",
  "body": " Let us consider the system Then . Letting the step size be , we obtain and Similarly, Using this procedure, we can generate a list of values that will approximate the solution to our system ( ).                                         Euler's approximation for a system of equations   Notice that our system is not autonomous and depends on time. Therefore, we cannot graph the phase plane of this system; however, we can graph a solution curve in three dimensions ( ).    A solution curve for Duffing's equation      "
},
{
  "id": "systems03-subsection-eulers-method-8",
  "level": "2",
  "url": "systems03.html#systems03-subsection-eulers-method-8",
  "type": "Activity",
  "number": "2.3.1",
  "title": "Solving a System Numerically.",
  "body": " Solving a System Numerically   Consider the system with initial conditions and . You will find Sage very useful for this exercise     Show that satisfies the initial value problem.      Use Euler's method with step size to approximate this solution, and check how close the approximation is to the real solution when , , and .      Use Euler's method with step size to approximate this solution, and check how close the approximation is to the real solution when , , and .      Discuss how and why the Euler approximations differ from the real solution.    "
},
{
  "id": "systems03-theorem-existence-uniqueness-systems",
  "level": "2",
  "url": "systems03.html#systems03-theorem-existence-uniqueness-systems",
  "type": "Theorem",
  "number": "2.3.10",
  "title": "",
  "body": "  Let be a system of differential equations such that is continuously differentiable. If is the initial value at time , there exists a unique solution for the initial value problem on some open interval for some .   "
},
{
  "id": "rq-systems03-autonomous",
  "level": "2",
  "url": "systems03.html#rq-systems03-autonomous",
  "type": "Reading Question",
  "number": "2.3.6.1",
  "title": "",
  "body": "  What does it mean for a system of equations to be autonomous?    "
},
{
  "id": "rq-systems03-sensitive",
  "level": "2",
  "url": "systems03.html#rq-systems03-sensitive",
  "type": "Reading Question",
  "number": "2.3.6.2",
  "title": "",
  "body": "  What does it mean for a system of equations to be sensitive to initial conditions?    "
},
{
  "id": "systems03-exercises-2",
  "level": "2",
  "url": "systems03.html#systems03-exercises-2",
  "type": "Exercise",
  "number": "2.3.7.1",
  "title": "",
  "body": "  Consider the system with initial conditions and . You will find Sage very useful for this exercise   Show that satisfies the initial value problem.  Use Euler's method with step size to approximate this solution, and check how close the approximation is to the real solution when , , and .  Use Euler's method with step size to approximate this solution, and check how close the approximation is to the real solution when , , and .  Discuss how and why the Euler approximations differ from the real solution.    "
},
{
  "id": "systems03-exercises-3",
  "level": "2",
  "url": "systems03.html#systems03-exercises-3",
  "type": "Exercise",
  "number": "2.3.7.2",
  "title": "",
  "body": "  Consider the system with initial conditions and . You will find Sage very useful for this exercise   Show that satisfies the initial value problem.  Use Euler's method with step size to approximate this solution, and check how close the approximation is to the real solution when , , and .  Use Euler's method with step size to approximate this solution, and check how close the approximation is to the real solution when , , and .  Discuss how and why the Euler approximations differ from the real solution.    "
},
{
  "id": "systems03-exercises-4",
  "level": "2",
  "url": "systems03.html#systems03-exercises-4",
  "type": "Exercise",
  "number": "2.3.7.3",
  "title": "",
  "body": "  Consider the system with initial conditions and . You will find Sage very useful for this exercise   Show that satisfies the initial value problem.  Use Euler's method with step size to approximate this solution, and check how close the approximation is to the real solution when , , and .  Use Euler's method with step size to approximate this solution, and check how close the approximation is to the real solution when , , and .  Discuss how and why the Euler approximations differ from the real solution.    "
},
{
  "id": "systems03-subsection-sage-12-2",
  "level": "2",
  "url": "systems03.html#systems03-subsection-sage-12-2",
  "type": "Exercise",
  "number": "2.3.8.1",
  "title": "",
  "body": "  Consider the system with initial conditions and .  Use eulers_method_2x2 with step size to find an approximate solution for .   Use desolve_system_rk4 with step size to find an approximate solution for .   Plot the solutions given by eulers_method_2x2 and desolve_system_rk4 on the same axes.   Discuss how and why the solution given by eulers_method_2x2 differs from the one given by desolve_system_rk4 .    "
},
{
  "id": "systems04",
  "level": "1",
  "url": "systems04.html",
  "type": "Section",
  "number": "2.4",
  "title": "Solving Systems Analytically",
  "body": " Solving Systems Analytically    To understand that a system of the form is decoupled and can be solved by solving each equation independently.  To understand that a system of the form is partially coupled system and can be solved by first solving the first equation and then substituting the solution into the second equation, which can then be solved.  To be able to use Sage to solve systems of the form     Mixing problems model how substances flow back and forth between two or more compartments. These problems often arise in applications for example, we might want to model how greenhouse gases flow back and forth between different layers of the earth's atomosphere , how chemicals move between tanks in a refinery or a brewery, or how pollutants move between a series of lakes or ponds. Systems of differential equations can prove very useful when it comes to modeling such situations.    Partially Coupled Systems  We will use linear systems of differential equations such as to illustrate how we can use systems of differential equations to model how substances flow back and forth between two or more compartments. Suppose that we have two tanks ( and ) between which a mixture of brine flows ( ). Tank contains 300 liters of water in which 100 kilograms of salt has been dissolved and Tank contains 300 liters of pure water. Fresh water is pumped into Tank at the rate of 500 liters per hour, and brine is pumped into Tank from Tank at the rate of 500 liters per hour. Brine is also drained at a rate 500 liters of brine per hour from Tank . All brine mixtures are well-stirred. If we let be the amount of salt in Tank at time and be the amount of salt in Tank at time , then we know that We know that the salt concentrations in the two tanks are kilograms per liter and kilograms per liter. Thus, we can describe the rate of change in each tank with a differential equation,        Tank A        Tank B         500 l\/hr  300 l  300 l  500 l\/hr            500 l\/hr                 Mixing example with two tanks   We can now ask how we might solve the system of equations The task of solving the system may be quite difficult or even impossible. However, we can find solutions in certain cases. For example, if we have a system of the form then each equation is an autonomous first-order equation. To solve our system, we only need to solve two first-order equations. Such a system is said to be decoupled system decoupled . Generalizing slightly, we say that a partially coupled system system partially coupled is a system of the form Since the first equation is an autonomous first-order equation in , we can solve this equation separately, and substitute our solution into the second equation.    partially coupled system   Consider the system We can easily solve the first equation, , to obtain . Using this information in the second equation, we have which is a first-order linear equation. This equation has an integrating factor , and Therefore, the solution to our second equation is  Revisiting the mixing problem that we posed at the beginning of this section, we have the following initial value problem, Solving is easy. We can quickly determine that . Applying the initial condition , we can determine that and . Our second equation now becomes This last equation is a first-order linear equation Multiplying both sides of this last equation by the integrating factor yields Integrating both sides of this last equation gives us Using our initial condition , we can determine that . Thus,   Consider the partially coupled system Notice that we already have the tools to solve . In fact, the solution is . We can use this information to solve the second equation, . That is, if we use the fact that , the second equation becomes We can rewrite this equation as which is a first-order linear equation. If we multiply both sides of the equation by , we have Integrating, we have Solving for , yields . Thus the solution to our system is    Solving Partially Coupled Systems   Solve each of the following systems of differential equations.                          Using Sage to Solve Linear Systems  Solving linear systems such as is much more difficult, since we cannot use the same strategies that we used to solve partially-coupled systems. We will devote all of to finding an answer. However, we can use Sage to solve linear systems for the moment. The following is a Sage interact that will solve the initial value problem however, we can change the coefficients and initial values to be anything that we like.   A Sage applet for solving linear systems      Harmonic Oscillators  The equation is a specific case of a damped harmonic oscillator, where , the spring constant is 2, and the damping constant is 3. We can rewrite this equation as a first-order linear system, Suppose that is the initial position of the mass and is the initial velocity. We can use Sage to verify that the solution to our system is This is an example of an over-damped harmonic oscillator ( ). In other words, a spring-mass system that is modeled by this system of equations has so much damping that the mass will not oscillate.       f(t) = exp(-t) - exp(-2*t)  g(t) = -exp(-t) + 2*exp(-2*t)       x(t) = e^{-t} - e^{-2t}  v(t) = - e^{-t} + 2 e^{-2t}        An over-damped harmonic oscillator   Now let us relax the damping and increase the spring constant on our harmonic oscillator, The corresponding linear system is Notice that our initial conditions have not changed. We again use Sage to solve our system.   The solution to our system is Notice that the system oscillates due to the sine and cosine terms in the solution. This system is underdamped ( ).       f(t) = exp(-t) * sin(3*t)\/3  g(t) = exp(-t)* cos(3*t) - exp(-t)*sin(3*t)\/3       x(t) = (1\/3)e^{-t} \\sin 3t  v(t) = e^{-t}\\cos(3t) - e^{-t}\\sin(3t)\/3        An under-damped harmonic oscillator     Important Lessons   A system of the form is said to be decoupled . Such a system can be solved by solving each equation independently.  A system of the form is a partially coupled system . Since the first equation is an autonomous first-order equation in , we can solve this equation separately, and substitute our solution into the second equation.  We can use Sage to solve systems of the form  Sage is useful for investigating the behavior of harmonic oscillators.       Explain what a partially coupled system is?       Why would you expect that it is impossible to find explicit solutions for most systems of differential equations?       Exercises   Partially Coupled Systems  Solve each of the partially coupled systems in .                         Suppose that we have two tanks ( and ) between which a mixture of brine flows. Tank contains 200 liters of water in which 20 kilograms of salt has been dissolved and Tank contains 200 liters of water in which 10 kilograms of salt has been dissolved. Fresh water is pumped into Tank at the rate of 200 liters per hour, and brine is pumped into Tank from Tank at the rate of 200 liters per hour. Brine is also drained at a rate 200 liters of brine per hour from Tank . All brine mixtures are well-stirred. Find the amount of salt in each tank at time .      For each of the following harmonic oscillators (1) rewrite the second-order initial value problem as a system of two first-order linear equations, (2) use Sage to solve the system of linear equations, and (3) classify the harmonic oscillator as underdamped, critically damped, or overdamped.         "
},
{
  "id": "systems04-2",
  "level": "2",
  "url": "systems04.html#systems04-2",
  "type": "Objectives",
  "number": "2.4",
  "title": "",
  "body": "  To understand that a system of the form is decoupled and can be solved by solving each equation independently.  To understand that a system of the form is partially coupled system and can be solved by first solving the first equation and then substituting the solution into the second equation, which can then be solved.  To be able to use Sage to solve systems of the form   "
},
{
  "id": "systems04-figure-mixing-example-systems",
  "level": "2",
  "url": "systems04.html#systems04-figure-mixing-example-systems",
  "type": "Figure",
  "number": "2.4.1",
  "title": "",
  "body": "      Tank A        Tank B         500 l\/hr  300 l  300 l  500 l\/hr            500 l\/hr                 Mixing example with two tanks  "
},
{
  "id": "systems04-subsection-partially-coupled-4",
  "level": "2",
  "url": "systems04.html#systems04-subsection-partially-coupled-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "decoupled partially coupled system "
},
{
  "id": "systems04-example-partially-coupled-system",
  "level": "2",
  "url": "systems04.html#systems04-example-partially-coupled-system",
  "type": "Example",
  "number": "2.4.2",
  "title": "",
  "body": " Consider the partially coupled system Notice that we already have the tools to solve . In fact, the solution is . We can use this information to solve the second equation, . That is, if we use the fact that , the second equation becomes We can rewrite this equation as which is a first-order linear equation. If we multiply both sides of the equation by , we have Integrating, we have Solving for , yields . Thus the solution to our system is  "
},
{
  "id": "systems04-subsection-partially-coupled-9",
  "level": "2",
  "url": "systems04.html#systems04-subsection-partially-coupled-9",
  "type": "Activity",
  "number": "2.4.1",
  "title": "Solving Partially Coupled Systems.",
  "body": " Solving Partially Coupled Systems   Solve each of the following systems of differential equations.                       "
},
{
  "id": "systems04-figure-interactive-linear-systems",
  "level": "2",
  "url": "systems04.html#systems04-figure-interactive-linear-systems",
  "type": "Figure",
  "number": "2.4.3",
  "title": "",
  "body": " A Sage applet for solving linear systems   "
},
{
  "id": "systems04-figure-over-damped-oscillator-system",
  "level": "2",
  "url": "systems04.html#systems04-figure-over-damped-oscillator-system",
  "type": "Figure",
  "number": "2.4.4",
  "title": "",
  "body": "    f(t) = exp(-t) - exp(-2*t)  g(t) = -exp(-t) + 2*exp(-2*t)       x(t) = e^{-t} - e^{-2t}  v(t) = - e^{-t} + 2 e^{-2t}        An over-damped harmonic oscillator  "
},
{
  "id": "systems04-figure-under-damped-oscillator-system",
  "level": "2",
  "url": "systems04.html#systems04-figure-under-damped-oscillator-system",
  "type": "Figure",
  "number": "2.4.5",
  "title": "",
  "body": "    f(t) = exp(-t) * sin(3*t)\/3  g(t) = exp(-t)* cos(3*t) - exp(-t)*sin(3*t)\/3       x(t) = (1\/3)e^{-t} \\sin 3t  v(t) = e^{-t}\\cos(3t) - e^{-t}\\sin(3t)\/3        An under-damped harmonic oscillator  "
},
{
  "id": "rq-systems04-partially-coupled",
  "level": "2",
  "url": "systems04.html#rq-systems04-partially-coupled",
  "type": "Reading Question",
  "number": "2.4.5.1",
  "title": "",
  "body": "  Explain what a partially coupled system is?    "
},
{
  "id": "rq-systems04-explicit",
  "level": "2",
  "url": "systems04.html#rq-systems04-explicit",
  "type": "Reading Question",
  "number": "2.4.5.2",
  "title": "",
  "body": "  Why would you expect that it is impossible to find explicit solutions for most systems of differential equations?    "
},
{
  "id": "systems04-exercises-partially-coupled-systems-3",
  "level": "2",
  "url": "systems04.html#systems04-exercises-partially-coupled-systems-3",
  "type": "Exercise",
  "number": "2.4.6.1",
  "title": "",
  "body": "    "
},
{
  "id": "systems04-exercises-partially-coupled-systems-4",
  "level": "2",
  "url": "systems04.html#systems04-exercises-partially-coupled-systems-4",
  "type": "Exercise",
  "number": "2.4.6.2",
  "title": "",
  "body": "    "
},
{
  "id": "systems04-exercises-partially-coupled-systems-5",
  "level": "2",
  "url": "systems04.html#systems04-exercises-partially-coupled-systems-5",
  "type": "Exercise",
  "number": "2.4.6.3",
  "title": "",
  "body": "    "
},
{
  "id": "systems04-exercises-partially-coupled-systems-6",
  "level": "2",
  "url": "systems04.html#systems04-exercises-partially-coupled-systems-6",
  "type": "Exercise",
  "number": "2.4.6.4",
  "title": "",
  "body": "    "
},
{
  "id": "systems04-exercises-3",
  "level": "2",
  "url": "systems04.html#systems04-exercises-3",
  "type": "Exercise",
  "number": "2.4.6.5",
  "title": "",
  "body": "  Suppose that we have two tanks ( and ) between which a mixture of brine flows. Tank contains 200 liters of water in which 20 kilograms of salt has been dissolved and Tank contains 200 liters of water in which 10 kilograms of salt has been dissolved. Fresh water is pumped into Tank at the rate of 200 liters per hour, and brine is pumped into Tank from Tank at the rate of 200 liters per hour. Brine is also drained at a rate 200 liters of brine per hour from Tank . All brine mixtures are well-stirred. Find the amount of salt in each tank at time .   "
},
{
  "id": "systems04-exercises-4",
  "level": "2",
  "url": "systems04.html#systems04-exercises-4",
  "type": "Exercise",
  "number": "2.4.6.6",
  "title": "",
  "body": "  For each of the following harmonic oscillators (1) rewrite the second-order initial value problem as a system of two first-order linear equations, (2) use Sage to solve the system of linear equations, and (3) classify the harmonic oscillator as underdamped, critically damped, or overdamped.       "
},
{
  "id": "systems05",
  "level": "1",
  "url": "systems05.html",
  "type": "Section",
  "number": "2.5",
  "title": "Projects for Systems of Differential Equations",
  "body": " Projects for Systems of Differential Equations   Project Modeling a Pandemic   On December 31, 2019, the city of Wuhan in China reported an outbreak of a novel coronavirus (COVID-19). It is the seventh member of the coronavirus family, together with MERS-CoV and SARS-CoV, that can spread to humans. Johns Hopkins Coronavirus Resource Center, 2021. . Accessed 10 January 2021. The virus is spreading rapidly. As of January 10, 2021, over 89 million people worldwide have been infected, including over 1.9 million deaths. The World Health Organization (WHO) has declared the outbreak as a pandemic. This project is adapted from Jue Wang (2020), 6-016-S-PandemicModeling,   The word pandemic comes from the Greek word pandemos, meaning pertaining to all people. Pandemics are usually caused by an infectious agent that is capable of rapidly spreading. An epidemic is specific to one city, region, or country, but a pandemic spreads beyond national borders, possibly worldwide. The 1918 Spanish flu was the worst pandemic in modern human history. It infected 500 million people around the world and resulted in the deaths of over 50 million people. Centers for Disease Control and Prevention. 2019. 1918 influenza pandemic (H1N1 virus). . Accessed 10 January 2021. Increased travel and mobility have increased the likelihood of new diseases spreading. lists the major epidemics and pandemics that have occurred over time. The recent ones are SARS, swine flu, Ebola, MERS, and COVID-19.   Major epidemics and pandemics in human history World Economic Forum. 2021. A visual history of pandemics. . Accessed 10 January 2021.    Name Time Period Type\/Pre-Human Host Death Toll    Antonine Plague 165 180 Believed to be smallpox or measles 5 million    Plague of Justinian 541 542 Yersinia pestis bacteria\/rats, fleas 30 50 million    Japanese Smallpox Epidemic 735 737 Variola major virus 1 million    Black Death 1347 1351 Yersinia pestis bacteria\/rats, fleas 200 million    New World Smallpox Outbreak 1520 onwards Variola major virus 56 million    Great Plague of London 1665 Yersinia pestis bacteria\/rats, fleas 100,000    Italian Plague 1629 1631 Yersinia pestis bacteria\/rats, fleas 1 million    Cholera Pandemics 1 6 1817 1923 V. cholerae bacteria 1+ million    Third Plague 1885 Yersinia pestis bacteria\/rats, fleas 12 million (China and India)    Yellow Fever Late 1800s Virus\/Mosquitos 100,000 150,000 (U.S.)    Russian Flu 1889 1890 Believed to be H2N2 (avian origin) 1 million    Spanish Flu 1918 1919 H1N1 virus\/Pigs 40 50 million    Asian Flu 1957 1958 H2N2 virus 1.1 million    Hong Kong Flu 1968 1970 H3N2 virus 1 million    HIV\/AIDS 1981 present Virus\/Chimpanzees 25 35 million    SARS 2002 2003 Coronavirus\/Bats, civets 770    Swine Flu 2009 2010 H1N1 virus\/Pigs 200,000    Ebola 2014 2016 Ebola virus\/Wild Animals 11,000    MERS 2015 present Coronavirus\/Bats, camels 850    COVID-19 2019 present Coronavirus\/Unknown (possibly bats) 7.1 million (as of Jan 19, 2025)     Infectious disease modeling is an essential part of the effort to minimize the spread. A well-designed model not only can help predict the likely course of an epidemic, but also can reveal the most promising and realistic strategies for containing it.  Following the SIR model in , we will assume that we have a closed population of size , where immigration, emigration, and birth do not play an important role. We will also ignore any deaths that are not related to our disease.  We will assume that each individual in the population falls into one of the following categories: Susceptible individuals are those who do not yet have the disease and can catch the disease from infected individuals. Individuals enter the removed population by either recovering from the disease or dying. If an infected individual recovers, then the individual is immune to the disease. Schematically, we can represent the effect of the disease by the diagram Since the population is closed, we know that  It may seem more natural to work with population counts, but some of our calculations will be simpler if we use the fractions instead. Therefore, we normalize the dependent variables by the total population to represent the fraction of the total population in each group. The two sets of dependent variables are proportional to each other, so either set will give us the same information about the progress of the epidemic . The SIR model is described by the nonlinear system of below, where is the transmission rate and is the recovery rate .  To understand this model, let us analyze the differential equations and parameters. The transmission rate is the product of two factors: the rate of contact and probability of transmission. describes the fraction of those contacts that may result in infection, or it can be interpreted as the expected number of people an infected person infects per day. The function is the rate at which susceptible individuals become infectious, called the force of infection . The rate of change of the susceptible population is negative the force of infection times the number of susceptible, leading to .  The recovery rate is the rate at which infected individuals get over the disease, that is the proportion of infected recovering per day, thus the rate of change of the recovered population is , leading to . Importantly, the parameter is measured in and can be interpreted as the average time to recover, or the number of days an infected person has and can spread the disease.  The equation now makes sense. The rate at which the fraction of infected individuals changes is the rate at which the fraction of susceptible minus the rate at which the fraction of individuals recover or     Using Sage, we can plot the solutions, and visualize the interaction of the three groups. Consider the initial population fractions , , , , , and a time period of 30 days. Adjust the parameters values to examine different behaviors and view the changes in action. What do you observe by increasing or decreasing ?      Basic Reproduction Number   The basic reproduction number , is introduced to measure the transmission potential of a disease. It is the expected number of secondary infections produced by a single infective. For example, if the for measles in a population is 16, then we would expect each new case of measles to produce 16 new secondary cases over the period of time during which the infected individual can actually spread the disease. The reproduction number is affected by several factors: the rate of contacts in the host population, the probability of infection being transmitted during contact, and the duration of infectiousness. In the SIR model described above, Simply put, is a metric of how contagious a disease is. It can capture three basic scenarios ( ). If , on average, an infected person infects less than one person. The disease is expected to stop spreading. If , an infected person infects an average of one person. The disease spread is stable, or endemic. If , on average, an infected person infects more than one person. The disease is expected to increasingly spread in the absence of intervention. Measles is one of the most contagious with a range of 12 18 for the reproduciton number. World Economic Forum. 2021. A visual history of pandemics. Accessed 10 January 2021. Estimates of for COVID-19 vary in the range of 2 2.5. The Johns Hopkins University. 2021. Coronavirus: COVID-19 Terms You Should Know. Accessed 10 January 2021.   Basic reproduction number        Examine the system According to the differential equation for , under what conditions will be increasing? decreasing? What does this mean about the spread of the disease? Using this result, explain whether quarantine will be effective against the disease.      Show that Two features of this new equation are particularly worth noting.  The only parameter that appears is , the reproduction number.  The equation is independent of time. That is, what we learn about the relationship between and must be true for the entire duration of the pandemic.  Compute . Determine when the number of infected will begin to decrease. Compare this to your result from .    Use the chain rule.      Show that must have the form where is a constant.      For a disease such as COVID-19, and . A long time after the onset of the epidemic, we have approximately again, and has settled to its steady state value, observable as the fraction of the population that did not get the disease. Explain why      Describe the meaning and significance of herd immunity. How can vaccination lead to herd immunity?      Your Final Report   You have been commissioned to write a report on the COVID-19 pandemic to the state health department. In particular, your task is to explain what the meaning of and its relationship to herd immunity . Your final report should contain a one-page executive summary. The executive summary should summarize your work in such a way that the reader can rapidly become acquainted with the material. It should contain a brief description of the problem, important background information, a discussion of pertinent assumptions, a short description of your methodology, concise analysis, and your main conclusions. Assume the reader is familiar with the basics of calculus and differential equations, so there is no need to walk through every step of your solution process or include equations. However, you should still describe the processes and mathematical techniques you used to reach your conclusions and explain why you used them. Refer the reader to the appendices as needed.  Appendices should be neatly formatted and present information in a logical manner. DO NOT simply print out Sage code. Consolidate your results and provide a short explanation of what it is the reader is seeing while also highlighting key pieces of information in the appendix.  Appendix A Answers and analysis  Additional Appendices Include additional appendices as necessary.      Other models include SEIR, SEIS, SEAIR, MSIR, MSEIR, and MSEIRS. For many infections, there is an incubation period during which individuals have been infected but are not yet infectious themselves. During this period the individual is in class E (for exposed), leading to the SEIR model. The SEIS model is like the SEIR except that no immunity is acquired at the end. In the E class, a significant number of persons may never develop symptoms, but they are capable of transmitting the disease, introducing an additional compartment A, and thus SEAIR. For many infections, such as measles, babies are not born into the susceptible compartment but are immune to the disease for the first few months of life due to protection from maternal antibodies. The M class contains infants with maternally derived immunity (or passive immunity). The MSEIRS model is similar to the MSEIR, but the immunity in the R class would be temporary, so that individuals would regain their susceptibility when the temporary immunity ended.    "
},
{
  "id": "systems05-project-epidemiology",
  "level": "2",
  "url": "systems05.html#systems05-project-epidemiology",
  "type": "Project",
  "number": "2.5.1",
  "title": "Project—Modeling a Pandemic.",
  "body": " Project Modeling a Pandemic   On December 31, 2019, the city of Wuhan in China reported an outbreak of a novel coronavirus (COVID-19). It is the seventh member of the coronavirus family, together with MERS-CoV and SARS-CoV, that can spread to humans. Johns Hopkins Coronavirus Resource Center, 2021. . Accessed 10 January 2021. The virus is spreading rapidly. As of January 10, 2021, over 89 million people worldwide have been infected, including over 1.9 million deaths. The World Health Organization (WHO) has declared the outbreak as a pandemic. This project is adapted from Jue Wang (2020), 6-016-S-PandemicModeling,   The word pandemic comes from the Greek word pandemos, meaning pertaining to all people. Pandemics are usually caused by an infectious agent that is capable of rapidly spreading. An epidemic is specific to one city, region, or country, but a pandemic spreads beyond national borders, possibly worldwide. The 1918 Spanish flu was the worst pandemic in modern human history. It infected 500 million people around the world and resulted in the deaths of over 50 million people. Centers for Disease Control and Prevention. 2019. 1918 influenza pandemic (H1N1 virus). . Accessed 10 January 2021. Increased travel and mobility have increased the likelihood of new diseases spreading. lists the major epidemics and pandemics that have occurred over time. The recent ones are SARS, swine flu, Ebola, MERS, and COVID-19.   Major epidemics and pandemics in human history World Economic Forum. 2021. A visual history of pandemics. . Accessed 10 January 2021.    Name Time Period Type\/Pre-Human Host Death Toll    Antonine Plague 165 180 Believed to be smallpox or measles 5 million    Plague of Justinian 541 542 Yersinia pestis bacteria\/rats, fleas 30 50 million    Japanese Smallpox Epidemic 735 737 Variola major virus 1 million    Black Death 1347 1351 Yersinia pestis bacteria\/rats, fleas 200 million    New World Smallpox Outbreak 1520 onwards Variola major virus 56 million    Great Plague of London 1665 Yersinia pestis bacteria\/rats, fleas 100,000    Italian Plague 1629 1631 Yersinia pestis bacteria\/rats, fleas 1 million    Cholera Pandemics 1 6 1817 1923 V. cholerae bacteria 1+ million    Third Plague 1885 Yersinia pestis bacteria\/rats, fleas 12 million (China and India)    Yellow Fever Late 1800s Virus\/Mosquitos 100,000 150,000 (U.S.)    Russian Flu 1889 1890 Believed to be H2N2 (avian origin) 1 million    Spanish Flu 1918 1919 H1N1 virus\/Pigs 40 50 million    Asian Flu 1957 1958 H2N2 virus 1.1 million    Hong Kong Flu 1968 1970 H3N2 virus 1 million    HIV\/AIDS 1981 present Virus\/Chimpanzees 25 35 million    SARS 2002 2003 Coronavirus\/Bats, civets 770    Swine Flu 2009 2010 H1N1 virus\/Pigs 200,000    Ebola 2014 2016 Ebola virus\/Wild Animals 11,000    MERS 2015 present Coronavirus\/Bats, camels 850    COVID-19 2019 present Coronavirus\/Unknown (possibly bats) 7.1 million (as of Jan 19, 2025)     Infectious disease modeling is an essential part of the effort to minimize the spread. A well-designed model not only can help predict the likely course of an epidemic, but also can reveal the most promising and realistic strategies for containing it.  Following the SIR model in , we will assume that we have a closed population of size , where immigration, emigration, and birth do not play an important role. We will also ignore any deaths that are not related to our disease.  We will assume that each individual in the population falls into one of the following categories: Susceptible individuals are those who do not yet have the disease and can catch the disease from infected individuals. Individuals enter the removed population by either recovering from the disease or dying. If an infected individual recovers, then the individual is immune to the disease. Schematically, we can represent the effect of the disease by the diagram Since the population is closed, we know that  It may seem more natural to work with population counts, but some of our calculations will be simpler if we use the fractions instead. Therefore, we normalize the dependent variables by the total population to represent the fraction of the total population in each group. The two sets of dependent variables are proportional to each other, so either set will give us the same information about the progress of the epidemic . The SIR model is described by the nonlinear system of below, where is the transmission rate and is the recovery rate .  To understand this model, let us analyze the differential equations and parameters. The transmission rate is the product of two factors: the rate of contact and probability of transmission. describes the fraction of those contacts that may result in infection, or it can be interpreted as the expected number of people an infected person infects per day. The function is the rate at which susceptible individuals become infectious, called the force of infection . The rate of change of the susceptible population is negative the force of infection times the number of susceptible, leading to .  The recovery rate is the rate at which infected individuals get over the disease, that is the proportion of infected recovering per day, thus the rate of change of the recovered population is , leading to . Importantly, the parameter is measured in and can be interpreted as the average time to recover, or the number of days an infected person has and can spread the disease.  The equation now makes sense. The rate at which the fraction of infected individuals changes is the rate at which the fraction of susceptible minus the rate at which the fraction of individuals recover or     Using Sage, we can plot the solutions, and visualize the interaction of the three groups. Consider the initial population fractions , , , , , and a time period of 30 days. Adjust the parameters values to examine different behaviors and view the changes in action. What do you observe by increasing or decreasing ?      Basic Reproduction Number   The basic reproduction number , is introduced to measure the transmission potential of a disease. It is the expected number of secondary infections produced by a single infective. For example, if the for measles in a population is 16, then we would expect each new case of measles to produce 16 new secondary cases over the period of time during which the infected individual can actually spread the disease. The reproduction number is affected by several factors: the rate of contacts in the host population, the probability of infection being transmitted during contact, and the duration of infectiousness. In the SIR model described above, Simply put, is a metric of how contagious a disease is. It can capture three basic scenarios ( ). If , on average, an infected person infects less than one person. The disease is expected to stop spreading. If , an infected person infects an average of one person. The disease spread is stable, or endemic. If , on average, an infected person infects more than one person. The disease is expected to increasingly spread in the absence of intervention. Measles is one of the most contagious with a range of 12 18 for the reproduciton number. World Economic Forum. 2021. A visual history of pandemics. Accessed 10 January 2021. Estimates of for COVID-19 vary in the range of 2 2.5. The Johns Hopkins University. 2021. Coronavirus: COVID-19 Terms You Should Know. Accessed 10 January 2021.   Basic reproduction number        Examine the system According to the differential equation for , under what conditions will be increasing? decreasing? What does this mean about the spread of the disease? Using this result, explain whether quarantine will be effective against the disease.      Show that Two features of this new equation are particularly worth noting.  The only parameter that appears is , the reproduction number.  The equation is independent of time. That is, what we learn about the relationship between and must be true for the entire duration of the pandemic.  Compute . Determine when the number of infected will begin to decrease. Compare this to your result from .    Use the chain rule.      Show that must have the form where is a constant.      For a disease such as COVID-19, and . A long time after the onset of the epidemic, we have approximately again, and has settled to its steady state value, observable as the fraction of the population that did not get the disease. Explain why      Describe the meaning and significance of herd immunity. How can vaccination lead to herd immunity?      Your Final Report   You have been commissioned to write a report on the COVID-19 pandemic to the state health department. In particular, your task is to explain what the meaning of and its relationship to herd immunity . Your final report should contain a one-page executive summary. The executive summary should summarize your work in such a way that the reader can rapidly become acquainted with the material. It should contain a brief description of the problem, important background information, a discussion of pertinent assumptions, a short description of your methodology, concise analysis, and your main conclusions. Assume the reader is familiar with the basics of calculus and differential equations, so there is no need to walk through every step of your solution process or include equations. However, you should still describe the processes and mathematical techniques you used to reach your conclusions and explain why you used them. Refer the reader to the appendices as needed.  Appendices should be neatly formatted and present information in a logical manner. DO NOT simply print out Sage code. Consolidate your results and provide a short explanation of what it is the reader is seeing while also highlighting key pieces of information in the appendix.  Appendix A Answers and analysis  Additional Appendices Include additional appendices as necessary.      Other models include SEIR, SEIS, SEAIR, MSIR, MSEIR, and MSEIRS. For many infections, there is an incubation period during which individuals have been infected but are not yet infectious themselves. During this period the individual is in class E (for exposed), leading to the SEIR model. The SEIS model is like the SEIR except that no immunity is acquired at the end. In the E class, a significant number of persons may never develop symptoms, but they are capable of transmitting the disease, introducing an additional compartment A, and thus SEAIR. For many infections, such as measles, babies are not born into the susceptible compartment but are immune to the disease for the first few months of life due to protection from maternal antibodies. The M class contains infants with maternally derived immunity (or passive immunity). The MSEIRS model is similar to the MSEIR, but the immunity in the R class would be temporary, so that individuals would regain their susceptibility when the temporary immunity ended.   "
},
{
  "id": "linear01",
  "level": "1",
  "url": "linear01.html",
  "type": "Section",
  "number": "3.1",
  "title": "Linear Algebra in a Nutshell",
  "body": " Linear Algebra in a Nutshell    To understand and be able to apply definitions such as linear dependence and independence, basis, and linear combinations to vectors in .  To understand and be able to do operations such as matrix arithmetic, computing determinants, finding eigenvalues and eigenvectors, and finding matrix inverses for matrices.     Linear algebra and matrices provide a convenient notation for representing the system If we let then we can rewrite our system as In other words, we can write our system as where    matrix notation for a system     Matrices and Systems of Linear Equations  A short review of linear algebra and matrices is useful at this point. Recall that any system of two equations in two variables, can be written as a matrix equation We will denote the  coefficient matrix matrix coefficient matrix by . That is,  If a solution for the system exists, it is easy to find. A unique solution will occur exactly when the matrix is invertible matrix invertible matrix (or nonsingular matrix nonsingular matrix ). The unique solution is given by where The matrix is invertible if and only if its determinant matrix determinant is nonzero, If , then we either have no solution or infinitely many solutions.    inverse of a matrix     determinant of   Let us consider the special case If , we have exactly one solution, and . On the other hand, if , we have infinitely many solutions. Suppose that . Then , and Therefore, . Since , the variable can assume any value and . Thus, the solutions to our system lie along a line through the origin. In fact, we will always get a line of solutions through the origin as long as at least one entry in our matrix is nonzero. We will not worry about the zero matrix, since it will not play a role in our study of linear equations.    Linear Independence  We say that two vectors and in are linearly independent vectors linearly independent if they do not lie on the same line through the origin. If, on the other hand, they do lie on the same line, then the vectors are linearly dependent vectors linearly dependent . Equivalently, two vectors are linearly dependent if one vector is a multiple of the other. We leave the proof of the following theorem as an exercise.     Let and . Then and are linearly independent if and only if    If we have a pair of linearly independent vectors in , then we can write any vector in as a unique linear combination vectors linear combination of the two vectors. That is, given two linearly independent vectors and , we can write as where and are unique. To see why this is true, we must solve the equations for and . However, this system has a unique solution since Two vectors are said to be a basis basis for if we can write any vector in as a linear combination of these two vectors. By our arguments above, any two linearly independent vectors will form a basis for .   The vectors and form a basis for . Indeed, if , then we can write The vectors and are called the standard basis basis standard basis for .    Let and . Since these vectors form a basis for . If , then we can write We say that the coordinates coordinates of are with respect to the basis .    The vectors and do not form a basis for since these two vectors lie along the same line.   If matrices and the rest of what we have described above make you nervous, you should work through the exercises at the end of this section.   Matrix Operations   Given the matrices and vectors compute each of the following expressions.     ,      , , ,           , , , , where       matrix transpose     Finding Eigenvalues and Eigenvectors  A nonzero vector is an eigenvector eigenvector of if for some . The constant is called an eigenvalue eigenvalue of . Letting we have or . In matrix form this is This matrix equation is certainly true if . However, we seek nonzero solutions to this system. This will occur exactly when the determinant of is zero. In this case We say that is the characteristic polynomial matrix characteristic polynomial of . We summarize the results of this discussion in the following theorem.    characteristic polynomial     The roots of the characteristic polynomial of are the eigenvalues of .     Suppose that we wish to find the eigenvalues and associated eigenvectors of To find the eigenvalues and eigenvectors for , we must solve the equation If we let denote the identity matrix, we can rewrite this equation in the form We know that is a matrix and that this system will only have nonzero solutions if . In our example, Thus, or .  To see this from a different perspective, we will rewrite equation as This system is equivalent to which can be reduced to Therefore, either or to obtain a nonzero solution.  If , the first equation in the system becomes , and the eigenvectors corresponding to this eigenvalue are the nonzero solutions of this equation. That is, a vector must be a nonzero multiple of to be an eigenvector of corresponding to .  If , then the corresponding eigenvectors are the nonzero multiples of .     Finding Eigenvalues and Eigenvectors   For each of the following matrices (1) find the characteristic polynomial, (2) find all of the eigenvalues, and (3) find an eigenvector for each eigenvalue.                               Important Lessons   A matrix is invertible (or nonsingular ) if there exists a matrix such that , where is the identity matrix. In the case of matrices,  If then  A matrix is invertible if and only if its determinant is nonzero,  We say that two vectors and in are linearly independent if they do not lie on the same line through the origin. If, on the other hand, they do lie on the same line, then the vectors are linearly dependent . Equivalently, two vectors are linearly dependent if one vector is a multiple of the other.  Let and . Then and are linearly independent if and only if  If we have a pair of linearly independent vectors in , then we can write any vector in as a unique linear combination of the two vectors. That is, given two linearly independent vectors and , we can write as where and are unique.  Two vectors are a basis for if we can write any vector in as a linear combination of these two vectors. Any two linearly independent vectors will form a basis for .  The roots of the characteristic polynomial , , of a matrix are the eigenvalues of . Given a specific eigenvalue, , for a matrix , the eigenvectors associated with are the nonzero solutions of the system of equations  If and are eigenvectors of two distinct real eigenvalues of a matrix , then and are linearly independent.       Explain what it means for two vectors to be linearly independent.       Explain what it means for a matrix to be nonsingular.       What is an eigenvalue and an eigenvector?       Exercises    Given a column vector we define the transpose matrix transpose of to be If find each of the following.           If find each of the following.             If find each of the following.          Finding Determinants  Find the determinant of each of the matrices in .                                                      Finding Inverses  Find the inverse (if it exists) of each of the matrices in . that is, find the matrix such that , where                                            Finding Eigenvalues and Eigenvectors  For each of the matrices in :  Find the characteristic polynomial of .  Find all of the eigenvalues of .  Find an eigenvector for each eigenvalue of .                                                         For what values of are the vectors and linearly independent?      We define the trace matrix trace of a matrix to be the sum of its diagonal entries. That is, the trace of is . Show that for any matrices and .      trace of     Let and be two matrices. Show that .      Let be a matrix. Show that .      Define the  identity matrix matrix identity to be Show that for any matrix.      identity matrix     An upper triangular matrix matrix uppper triangular  is a matrix of the form Show that has eigenvalues and .      Let and . Prove that and are linearly independent if and only if      Finding Eigenvalues and Eigenvectors with Sage  Sage can be used to find eigenvalues and eigenvectors for a matrix for now. Consider the matrix Using Sage , we would enter the matrix as follows.   We can use the following command to find the eigenvalues of .   Sage will also allow us to find eigenvectors for each of the eigenvalues of .   Thus, the matrix has two eigenvalues: with eigenvector and with eigenvector .  There is a third entry in the Sage output which refers to the multiplicity of the eigenvalue. In the previous example, the multiplicity is 1. In the matrix in the Sage cell below, we obtain a single repeated eigenvalue and only one eigenvector . The multiplicity of this eigenvalue is 2. In our previous examples, we obtained two linearly independent eigenvalues allowing us to solve initial value problems given a general solution.   We may also have matrices such as has complex eigenvalues, and . Eigenvectors for and are and , respectively.   The complex number is written as 4 - 1*I in Sage .   "
},
{
  "id": "linear01-2",
  "level": "2",
  "url": "linear01.html#linear01-2",
  "type": "Objectives",
  "number": "3.1",
  "title": "",
  "body": "  To understand and be able to apply definitions such as linear dependence and independence, basis, and linear combinations to vectors in .  To understand and be able to do operations such as matrix arithmetic, computing determinants, finding eigenvalues and eigenvectors, and finding matrix inverses for matrices.   "
},
{
  "id": "linear01-subsection-matrices-2",
  "level": "2",
  "url": "linear01.html#linear01-subsection-matrices-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "coefficient matrix "
},
{
  "id": "linear01-subsection-matrices-3",
  "level": "2",
  "url": "linear01.html#linear01-subsection-matrices-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "invertible nonsingular determinant "
},
{
  "id": "linear01-subsection-linear-independence-2",
  "level": "2",
  "url": "linear01.html#linear01-subsection-linear-independence-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linearly independent linearly dependent "
},
{
  "id": "systems01-theorem-independence-determinant",
  "level": "2",
  "url": "linear01.html#systems01-theorem-independence-determinant",
  "type": "Theorem",
  "number": "3.1.1",
  "title": "",
  "body": "  Let and . Then and are linearly independent if and only if   "
},
{
  "id": "linear01-subsection-linear-independence-4",
  "level": "2",
  "url": "linear01.html#linear01-subsection-linear-independence-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear combination basis "
},
{
  "id": "linear01-subsection-linear-independence-5",
  "level": "2",
  "url": "linear01.html#linear01-subsection-linear-independence-5",
  "type": "Example",
  "number": "3.1.2",
  "title": "",
  "body": " The vectors and form a basis for . Indeed, if , then we can write The vectors and are called the standard basis basis standard basis for .  "
},
{
  "id": "linear01-subsection-linear-independence-6",
  "level": "2",
  "url": "linear01.html#linear01-subsection-linear-independence-6",
  "type": "Example",
  "number": "3.1.3",
  "title": "",
  "body": " Let and . Since these vectors form a basis for . If , then we can write We say that the coordinates coordinates of are with respect to the basis .  "
},
{
  "id": "linear01-subsection-linear-independence-7",
  "level": "2",
  "url": "linear01.html#linear01-subsection-linear-independence-7",
  "type": "Example",
  "number": "3.1.4",
  "title": "",
  "body": " The vectors and do not form a basis for since these two vectors lie along the same line.  "
},
{
  "id": "linear01-subsection-linear-independence-9",
  "level": "2",
  "url": "linear01.html#linear01-subsection-linear-independence-9",
  "type": "Activity",
  "number": "3.1.1",
  "title": "Matrix Operations.",
  "body": " Matrix Operations   Given the matrices and vectors compute each of the following expressions.     ,      , , ,           , , , , where    "
},
{
  "id": "linear01-subsection-finding-eigenvalues-2",
  "level": "2",
  "url": "linear01.html#linear01-subsection-finding-eigenvalues-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "eigenvector eigenvalue characteristic polynomial "
},
{
  "id": "linear01-theorem-characteristic-polynomial",
  "level": "2",
  "url": "linear01.html#linear01-theorem-characteristic-polynomial",
  "type": "Theorem",
  "number": "3.1.5",
  "title": "",
  "body": "  The roots of the characteristic polynomial of are the eigenvalues of .   "
},
{
  "id": "linear01-example-example-1",
  "level": "2",
  "url": "linear01.html#linear01-example-example-1",
  "type": "Example",
  "number": "3.1.6",
  "title": "",
  "body": " Suppose that we wish to find the eigenvalues and associated eigenvectors of To find the eigenvalues and eigenvectors for , we must solve the equation If we let denote the identity matrix, we can rewrite this equation in the form We know that is a matrix and that this system will only have nonzero solutions if . In our example, Thus, or .  To see this from a different perspective, we will rewrite equation as This system is equivalent to which can be reduced to Therefore, either or to obtain a nonzero solution.  If , the first equation in the system becomes , and the eigenvectors corresponding to this eigenvalue are the nonzero solutions of this equation. That is, a vector must be a nonzero multiple of to be an eigenvector of corresponding to .  If , then the corresponding eigenvectors are the nonzero multiples of .   "
},
{
  "id": "linear01-subsection-finding-eigenvalues-6",
  "level": "2",
  "url": "linear01.html#linear01-subsection-finding-eigenvalues-6",
  "type": "Activity",
  "number": "3.1.2",
  "title": "Finding Eigenvalues and Eigenvectors.",
  "body": " Finding Eigenvalues and Eigenvectors   For each of the following matrices (1) find the characteristic polynomial, (2) find all of the eigenvalues, and (3) find an eigenvector for each eigenvalue.                            "
},
{
  "id": "linear01-subsection-important-lessons-2",
  "level": "2",
  "url": "linear01.html#linear01-subsection-important-lessons-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "invertible nonsingular determinant linearly independent linearly dependent linear combination basis characteristic polynomial "
},
{
  "id": "rq-linear01-independent",
  "level": "2",
  "url": "linear01.html#rq-linear01-independent",
  "type": "Reading Question",
  "number": "3.1.5.1",
  "title": "",
  "body": "  Explain what it means for two vectors to be linearly independent.    "
},
{
  "id": "rq-linear01-nonsingular",
  "level": "2",
  "url": "linear01.html#rq-linear01-nonsingular",
  "type": "Reading Question",
  "number": "3.1.5.2",
  "title": "",
  "body": "  Explain what it means for a matrix to be nonsingular.    "
},
{
  "id": "rq-linear01-eigenvalue",
  "level": "2",
  "url": "linear01.html#rq-linear01-eigenvalue",
  "type": "Reading Question",
  "number": "3.1.5.3",
  "title": "",
  "body": "  What is an eigenvalue and an eigenvector?    "
},
{
  "id": "exercises-linear01-2",
  "level": "2",
  "url": "linear01.html#exercises-linear01-2",
  "type": "Exercise",
  "number": "3.1.6.1",
  "title": "",
  "body": "  Given a column vector we define the transpose matrix transpose of to be If find each of the following.        "
},
{
  "id": "exercises-linear01-3",
  "level": "2",
  "url": "linear01.html#exercises-linear01-3",
  "type": "Exercise",
  "number": "3.1.6.2",
  "title": "",
  "body": "  If find each of the following.          "
},
{
  "id": "exercises-linear01-4",
  "level": "2",
  "url": "linear01.html#exercises-linear01-4",
  "type": "Exercise",
  "number": "3.1.6.3",
  "title": "",
  "body": "  If find each of the following.        "
},
{
  "id": "linear01-exercises-determinants-3",
  "level": "2",
  "url": "linear01.html#linear01-exercises-determinants-3",
  "type": "Exercise",
  "number": "3.1.6.4",
  "title": "",
  "body": "    "
},
{
  "id": "linear01-exercises-determinants-4",
  "level": "2",
  "url": "linear01.html#linear01-exercises-determinants-4",
  "type": "Exercise",
  "number": "3.1.6.5",
  "title": "",
  "body": "    "
},
{
  "id": "linear01-exercises-determinants-5",
  "level": "2",
  "url": "linear01.html#linear01-exercises-determinants-5",
  "type": "Exercise",
  "number": "3.1.6.6",
  "title": "",
  "body": "    "
},
{
  "id": "linear01-exercises-determinants-6",
  "level": "2",
  "url": "linear01.html#linear01-exercises-determinants-6",
  "type": "Exercise",
  "number": "3.1.6.7",
  "title": "",
  "body": "    "
},
{
  "id": "linear01-exercises-determinants-7",
  "level": "2",
  "url": "linear01.html#linear01-exercises-determinants-7",
  "type": "Exercise",
  "number": "3.1.6.8",
  "title": "",
  "body": "    "
},
{
  "id": "linear01-exercises-determinants-8",
  "level": "2",
  "url": "linear01.html#linear01-exercises-determinants-8",
  "type": "Exercise",
  "number": "3.1.6.9",
  "title": "",
  "body": "    "
},
{
  "id": "linear01-exercises-determinants-9",
  "level": "2",
  "url": "linear01.html#linear01-exercises-determinants-9",
  "type": "Exercise",
  "number": "3.1.6.10",
  "title": "",
  "body": "    "
},
{
  "id": "linear01-exercises-determinants-10",
  "level": "2",
  "url": "linear01.html#linear01-exercises-determinants-10",
  "type": "Exercise",
  "number": "3.1.6.11",
  "title": "",
  "body": "    "
},
{
  "id": "linear01-exercises-determinants-11",
  "level": "2",
  "url": "linear01.html#linear01-exercises-determinants-11",
  "type": "Exercise",
  "number": "3.1.6.12",
  "title": "",
  "body": "    "
},
{
  "id": "linear01-exercises-determinants-12",
  "level": "2",
  "url": "linear01.html#linear01-exercises-determinants-12",
  "type": "Exercise",
  "number": "3.1.6.13",
  "title": "",
  "body": "    "
},
{
  "id": "linear01-exercises-matrix-inverse-3",
  "level": "2",
  "url": "linear01.html#linear01-exercises-matrix-inverse-3",
  "type": "Exercise",
  "number": "3.1.6.14",
  "title": "",
  "body": "    "
},
{
  "id": "linear01-exercises-matrix-inverse-4",
  "level": "2",
  "url": "linear01.html#linear01-exercises-matrix-inverse-4",
  "type": "Exercise",
  "number": "3.1.6.15",
  "title": "",
  "body": "    "
},
{
  "id": "linear01-exercises-matrix-inverse-5",
  "level": "2",
  "url": "linear01.html#linear01-exercises-matrix-inverse-5",
  "type": "Exercise",
  "number": "3.1.6.16",
  "title": "",
  "body": "    "
},
{
  "id": "linear01-exercises-matrix-inverse-6",
  "level": "2",
  "url": "linear01.html#linear01-exercises-matrix-inverse-6",
  "type": "Exercise",
  "number": "3.1.6.17",
  "title": "",
  "body": "    "
},
{
  "id": "linear01-exercises-matrix-inverse-7",
  "level": "2",
  "url": "linear01.html#linear01-exercises-matrix-inverse-7",
  "type": "Exercise",
  "number": "3.1.6.18",
  "title": "",
  "body": "    "
},
{
  "id": "linear01-exercises-matrix-inverse-8",
  "level": "2",
  "url": "linear01.html#linear01-exercises-matrix-inverse-8",
  "type": "Exercise",
  "number": "3.1.6.19",
  "title": "",
  "body": "    "
},
{
  "id": "linear01-exercises-matrix-inverse-9",
  "level": "2",
  "url": "linear01.html#linear01-exercises-matrix-inverse-9",
  "type": "Exercise",
  "number": "3.1.6.20",
  "title": "",
  "body": "    "
},
{
  "id": "linear01-exercises-matrix-inverse-10",
  "level": "2",
  "url": "linear01.html#linear01-exercises-matrix-inverse-10",
  "type": "Exercise",
  "number": "3.1.6.21",
  "title": "",
  "body": "    "
},
{
  "id": "linear01-exercises-eigenvalues-3",
  "level": "2",
  "url": "linear01.html#linear01-exercises-eigenvalues-3",
  "type": "Exercise",
  "number": "3.1.6.22",
  "title": "",
  "body": "    "
},
{
  "id": "linear01-exercises-eigenvalues-4",
  "level": "2",
  "url": "linear01.html#linear01-exercises-eigenvalues-4",
  "type": "Exercise",
  "number": "3.1.6.23",
  "title": "",
  "body": "    "
},
{
  "id": "linear01-exercises-eigenvalues-5",
  "level": "2",
  "url": "linear01.html#linear01-exercises-eigenvalues-5",
  "type": "Exercise",
  "number": "3.1.6.24",
  "title": "",
  "body": "    "
},
{
  "id": "linear01-exercises-eigenvalues-6",
  "level": "2",
  "url": "linear01.html#linear01-exercises-eigenvalues-6",
  "type": "Exercise",
  "number": "3.1.6.25",
  "title": "",
  "body": "    "
},
{
  "id": "linear01-exercises-eigenvalues-7",
  "level": "2",
  "url": "linear01.html#linear01-exercises-eigenvalues-7",
  "type": "Exercise",
  "number": "3.1.6.26",
  "title": "",
  "body": "    "
},
{
  "id": "linear01-exercises-eigenvalues-8",
  "level": "2",
  "url": "linear01.html#linear01-exercises-eigenvalues-8",
  "type": "Exercise",
  "number": "3.1.6.27",
  "title": "",
  "body": "    "
},
{
  "id": "linear01-exercises-eigenvalues-9",
  "level": "2",
  "url": "linear01.html#linear01-exercises-eigenvalues-9",
  "type": "Exercise",
  "number": "3.1.6.28",
  "title": "",
  "body": "    "
},
{
  "id": "linear01-exercises-eigenvalues-10",
  "level": "2",
  "url": "linear01.html#linear01-exercises-eigenvalues-10",
  "type": "Exercise",
  "number": "3.1.6.29",
  "title": "",
  "body": "    "
},
{
  "id": "linear01-exercises-eigenvalues-11",
  "level": "2",
  "url": "linear01.html#linear01-exercises-eigenvalues-11",
  "type": "Exercise",
  "number": "3.1.6.30",
  "title": "",
  "body": "    "
},
{
  "id": "linear01-exercises-eigenvalues-12",
  "level": "2",
  "url": "linear01.html#linear01-exercises-eigenvalues-12",
  "type": "Exercise",
  "number": "3.1.6.31",
  "title": "",
  "body": "    "
},
{
  "id": "exercises-linear01-8",
  "level": "2",
  "url": "linear01.html#exercises-linear01-8",
  "type": "Exercise",
  "number": "3.1.6.32",
  "title": "",
  "body": "  For what values of are the vectors and linearly independent?   "
},
{
  "id": "exercises-linear01-9",
  "level": "2",
  "url": "linear01.html#exercises-linear01-9",
  "type": "Exercise",
  "number": "3.1.6.33",
  "title": "",
  "body": "  We define the trace matrix trace of a matrix to be the sum of its diagonal entries. That is, the trace of is . Show that for any matrices and .   "
},
{
  "id": "exercises-linear01-11",
  "level": "2",
  "url": "linear01.html#exercises-linear01-11",
  "type": "Exercise",
  "number": "3.1.6.34",
  "title": "",
  "body": "  Let and be two matrices. Show that .   "
},
{
  "id": "exercises-linear01-12",
  "level": "2",
  "url": "linear01.html#exercises-linear01-12",
  "type": "Exercise",
  "number": "3.1.6.35",
  "title": "",
  "body": "  Let be a matrix. Show that .   "
},
{
  "id": "exercises-linear01-13",
  "level": "2",
  "url": "linear01.html#exercises-linear01-13",
  "type": "Exercise",
  "number": "3.1.6.36",
  "title": "",
  "body": "  Define the  identity matrix matrix identity to be Show that for any matrix.   "
},
{
  "id": "exercises-linear01-15",
  "level": "2",
  "url": "linear01.html#exercises-linear01-15",
  "type": "Exercise",
  "number": "3.1.6.37",
  "title": "",
  "body": "  An upper triangular matrix matrix uppper triangular  is a matrix of the form Show that has eigenvalues and .   "
},
{
  "id": "exercises-linear01-16",
  "level": "2",
  "url": "linear01.html#exercises-linear01-16",
  "type": "Exercise",
  "number": "3.1.6.38",
  "title": "",
  "body": "  Let and . Prove that and are linearly independent if and only if   "
},
{
  "id": "linear02",
  "level": "1",
  "url": "linear02.html",
  "type": "Section",
  "number": "3.2",
  "title": "Planar Systems",
  "body": " Planar Systems    To understand that for matrix with distinct real eigenvalues, and and associated eigenvectors and , that the general solution of the linear system is given by     A first-order linear system of equations and variables system first-order linear is any system that can be written in the form If each of the coefficients is constant and the functions vanish, then we have a homogeneous first-order linear system with constant coefficients system homogeneous first-order linear ,  We will concentrate on homogeneous first-order linear systems or planar systems system planar for the time being,    Planar Systems and Matrices  We will use linear systems of differential equations to illustrate how we can use systems of differential equations to model how subtances flow back and forth between two or more compartments. Suppose that we have two tanks ( and ) between which a mixture of brine flows ( ). Tank contains 300 liters of water in which 100 kilograms of salt has been dissolved and Tank contains 300 liters of pure water. Fresh water is pumped into Tank at the rate of 500 liters per hour, and brine is pumped into Tank from Tank at the rate of 900 liters per hour. Brine is also pumped back into Tank from Tank at the rate of 400 liters per hour, and an additional 500 liters of brine per hour is drained from Tank . All brine mixtures are well-stirred. If we let be the amount of salt in Tank at time and be the amount of salt in Tank at time , then we know that We know that the salt concentrations in the two tanks are kilograms per liter and kilograms per liter. Thus, we can describe the rate of change in each tank with a differential equation,        Tank A        Tank B          900 l\/hr   400 l\/hr  500 l\/hr            500 l\/hr                 Mixing example with two tanks   Matrix notation gives us a convenient way of representing the system . If we let then we can rewrite our system as In other words, we can write our system as where    Systems of Differential Equations  A linear planar system has an equilibrium solution equilibrium solution linear system at if The following proposition tells us exactly where to find the equilibrium solutions of a linear system with constant coefficients.    Let be a linear system, where is not the zero matrix.  If , then is the unique equilibrium solution for the system.  If , then the equilibrium solutions for the system form a straight line in .     Now let us attack the problem of finding all of the solutions of the system . Suppose that we can find a nonzero vector such that for some real number . In this case, the matrix just sends the vector to a vector on the same line through the origin, . This is a very special case of course; however, we claim that is a solution for our linear system if we can find such a vector. To see that this is indeed the case, we compute In other words, the key to solving a linear system is to be able to find eigenvalues and eigenvectors for the matrix . We are now ready to state the results of our discussion in a theorem.    Let be an eigenvector for the matrix with associated eigenvalue . Then the function is a solution of the system .    We say that the solution is a straight-line solution linear system straight-line solution . The vector lies on the same line for each value of . Note that if is an eigenvector for , then any nonzero multiple of is also an eigenvector for ,   Consider the system We can rewrite this system in matrix form as , where The matrix has an eigenvector with associated eigenvalue , since Similarly, is an eigenvector for with associated eigenvalue . Thus, we have two solutions for our system: the equilibrium solution at the origin, the solution and the solution  Since any linear combination of solutions to a linear system is also a solution. Thus, a general solution to our system is or If we are given initial conditions, say and , then we can determine and by solving the linear system of equations to get and . Thus, the solution to our initial value problem is    Planar Systems with Distinct Real Eigenvalues   Consider the initial value problem , where     Find the eigenvalues of . You should find distinct real eigenvalues and .      Find eigenvectors and for the eigenvalues and , respectively.      Find the straight-line solutions of . Plot the solutions in the -plane.      Sketch the solution curve to the initial value problem in the -plane.      Show that is a solution to the linear system .      Use the fact that to find and such that is a solution to the initial value problem. Does this solution agree with the solution that you plotted in ?     If and are solutions to the linear system , then Thus, for any two real numbers and , We state this result in the following theorem.   Principle of Superposition   If is a matrix, then any linear combination of solutions to the linear system is also a solution. Principle of Superposition    Revisiting the mixing problem that we posed at the beginning of this section, we have the following initial value problem, If we write our system in matrix form, , then It is easy to check that we have eigenvalues and with eigenvectors and , respectively. Thus, we have two solutions to our system, Since any linear combination of solutions is also a solution, is a solution to our system. Using the initial values and , we can determine that and . We now have the solution that we seek,    Solving Linear Systems  Our goal is to prove the following theorem.    Suppose that has a pair of distinct real eigenvalues, and , with associated eigenvectors and . Then the general solution of the linear system is given by      Let be an matrix with a pair of distinct real eigenvalues, and and eigenvectors and , respectively. Then and are linearly independent.    If and are linearly dependent, then there exists such that Multiplying both sides of this equation by , we have On the other hand, we obtain if we multiply both sides of by . Using and , we can conclude that However, this contradicts the assumption that and are distinct.   We can now proceed to the proof of the theorem. Suppose that we have a linear system such that has a pair of distinct real eigenvalues, and , with associated eigenvectors and . By the Principle of Superposition, we know that is a solution to the linear system . To show that this is the general solution, we must show that we can choose and to satisfy a given initial condition . By , we know that and form a basis for . That is, we can write as a linear combination of and . In other words, we can find and such that  It remains to show that is the unique solution to the system Suppose that there is another solution such that . Then we can write where Since is a solution to our system of equations, we know that On the other hand, Consequently, we have two first-order initial value problems, and The solutions of these initial value problems are respectively. Thus, , and proof our theorem is complete.    Important Lessons   If and are eigenvectors of two distinct real eigenvalues of a matrix , then and are linearly independent.  The Principle of Superposition tells us that any linear combination of solutions to the linear system is also a solution.  Let be a matrix. If has a pair of distinct real eigenvalues, and , with associated eigenvectors and , then the general solution of the linear system is given by       What is a linear system of differential equations?       What is the Principle of Superposition?       Exercises   Solving Linear Systems with Distinct Real Eigenvalues  Find the general solution of each of the linear systems in .                        Solving Initial Value Problems  Solve each of the following linear systems for the given initial values. in .                         Consider the nonhomogeneous system of linear differential equations and assume that the general solution of is given by If is a particular solution linear system particular solution of , show that is the general solution to the system. Thus, to solve a nonhomogeneous system of linear differential equations, we need to find the solution of the corresponding homogeneous system and one particular solution of the nonhomogeneous system.      Consider the linear system   Find the general solution of the homogeneous system  Find a particular solution for  Find the solution of     Assume that your solution must be of the form This is called the method of undetermined coefficients .      Consider the system where . For what values of do you find a bifurcation (a change in the type of phase portrait)? Sketch typical phase portraits for a values of above and below the bifurcation point.      Prove that is the general solution of     "
},
{
  "id": "linear02-2",
  "level": "2",
  "url": "linear02.html#linear02-2",
  "type": "Objectives",
  "number": "3.2",
  "title": "",
  "body": "  To understand that for matrix with distinct real eigenvalues, and and associated eigenvectors and , that the general solution of the linear system is given by   "
},
{
  "id": "linear02-3-1",
  "level": "2",
  "url": "linear02.html#linear02-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "first-order linear system of equations and variables homogeneous first-order linear system with constant coefficients "
},
{
  "id": "linear02-3-2",
  "level": "2",
  "url": "linear02.html#linear02-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "planar systems "
},
{
  "id": "linear02-figure-mixing-example",
  "level": "2",
  "url": "linear02.html#linear02-figure-mixing-example",
  "type": "Figure",
  "number": "3.2.1",
  "title": "",
  "body": "      Tank A        Tank B          900 l\/hr   400 l\/hr  500 l\/hr            500 l\/hr                 Mixing example with two tanks  "
},
{
  "id": "linear02-subsection-systems-of-de-2",
  "level": "2",
  "url": "linear02.html#linear02-subsection-systems-of-de-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "equilibrium solution "
},
{
  "id": "linear02-theorem-equilibrium-solution",
  "level": "2",
  "url": "linear02.html#linear02-theorem-equilibrium-solution",
  "type": "Theorem",
  "number": "3.2.2",
  "title": "",
  "body": "  Let be a linear system, where is not the zero matrix.  If , then is the unique equilibrium solution for the system.  If , then the equilibrium solutions for the system form a straight line in .    "
},
{
  "id": "linear02-theorem-eigenvalues",
  "level": "2",
  "url": "linear02.html#linear02-theorem-eigenvalues",
  "type": "Theorem",
  "number": "3.2.3",
  "title": "",
  "body": "  Let be an eigenvector for the matrix with associated eigenvalue . Then the function is a solution of the system .   "
},
{
  "id": "linear02-subsection-systems-of-de-6",
  "level": "2",
  "url": "linear02.html#linear02-subsection-systems-of-de-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "straight-line solution "
},
{
  "id": "linear02-subsection-systems-of-de-7",
  "level": "2",
  "url": "linear02.html#linear02-subsection-systems-of-de-7",
  "type": "Example",
  "number": "3.2.4",
  "title": "",
  "body": " Consider the system We can rewrite this system in matrix form as , where The matrix has an eigenvector with associated eigenvalue , since Similarly, is an eigenvector for with associated eigenvalue . Thus, we have two solutions for our system: the equilibrium solution at the origin, the solution and the solution  Since any linear combination of solutions to a linear system is also a solution. Thus, a general solution to our system is or If we are given initial conditions, say and , then we can determine and by solving the linear system of equations to get and . Thus, the solution to our initial value problem is  "
},
{
  "id": "linear02-activity-distinct-real-eigenvalues",
  "level": "2",
  "url": "linear02.html#linear02-activity-distinct-real-eigenvalues",
  "type": "Activity",
  "number": "3.2.1",
  "title": "Planar Systems with Distinct Real Eigenvalues.",
  "body": " Planar Systems with Distinct Real Eigenvalues   Consider the initial value problem , where     Find the eigenvalues of . You should find distinct real eigenvalues and .      Find eigenvectors and for the eigenvalues and , respectively.      Find the straight-line solutions of . Plot the solutions in the -plane.      Sketch the solution curve to the initial value problem in the -plane.      Show that is a solution to the linear system .      Use the fact that to find and such that is a solution to the initial value problem. Does this solution agree with the solution that you plotted in ?    "
},
{
  "id": "linear02-theorem-superposition",
  "level": "2",
  "url": "linear02.html#linear02-theorem-superposition",
  "type": "Theorem",
  "number": "3.2.5",
  "title": "Principle of Superposition.",
  "body": " Principle of Superposition   If is a matrix, then any linear combination of solutions to the linear system is also a solution. Principle of Superposition   "
},
{
  "id": "linear02-theorem-system-solution",
  "level": "2",
  "url": "linear02.html#linear02-theorem-system-solution",
  "type": "Theorem",
  "number": "3.2.6",
  "title": "",
  "body": "  Suppose that has a pair of distinct real eigenvalues, and , with associated eigenvectors and . Then the general solution of the linear system is given by   "
},
{
  "id": "linear02-lemma-distinct-real-eigenvalues",
  "level": "2",
  "url": "linear02.html#linear02-lemma-distinct-real-eigenvalues",
  "type": "Lemma",
  "number": "3.2.7",
  "title": "",
  "body": "  Let be an matrix with a pair of distinct real eigenvalues, and and eigenvectors and , respectively. Then and are linearly independent.    If and are linearly dependent, then there exists such that Multiplying both sides of this equation by , we have On the other hand, we obtain if we multiply both sides of by . Using and , we can conclude that However, this contradicts the assumption that and are distinct.  "
},
{
  "id": "rq-linear02-2x2-system",
  "level": "2",
  "url": "linear02.html#rq-linear02-2x2-system",
  "type": "Reading Question",
  "number": "3.2.5.1",
  "title": "",
  "body": "  What is a linear system of differential equations?    "
},
{
  "id": "rq-linear02-superposition",
  "level": "2",
  "url": "linear02.html#rq-linear02-superposition",
  "type": "Reading Question",
  "number": "3.2.5.2",
  "title": "",
  "body": "  What is the Principle of Superposition?    "
},
{
  "id": "linear02-exercises-solving-linear-systems-3",
  "level": "2",
  "url": "linear02.html#linear02-exercises-solving-linear-systems-3",
  "type": "Exercise",
  "number": "3.2.6.1",
  "title": "",
  "body": "    "
},
{
  "id": "linear02-exercises-solving-linear-systems-4",
  "level": "2",
  "url": "linear02.html#linear02-exercises-solving-linear-systems-4",
  "type": "Exercise",
  "number": "3.2.6.2",
  "title": "",
  "body": "    "
},
{
  "id": "linear02-exercises-solving-linear-systems-5",
  "level": "2",
  "url": "linear02.html#linear02-exercises-solving-linear-systems-5",
  "type": "Exercise",
  "number": "3.2.6.3",
  "title": "",
  "body": "    "
},
{
  "id": "linear02-exercises-solving-linear-systems-6",
  "level": "2",
  "url": "linear02.html#linear02-exercises-solving-linear-systems-6",
  "type": "Exercise",
  "number": "3.2.6.4",
  "title": "",
  "body": "    "
},
{
  "id": "linear02-exercises-solving-ivps-3",
  "level": "2",
  "url": "linear02.html#linear02-exercises-solving-ivps-3",
  "type": "Exercise",
  "number": "3.2.6.5",
  "title": "",
  "body": "    "
},
{
  "id": "linear02-exercises-solving-ivps-4",
  "level": "2",
  "url": "linear02.html#linear02-exercises-solving-ivps-4",
  "type": "Exercise",
  "number": "3.2.6.6",
  "title": "",
  "body": "    "
},
{
  "id": "linear02-exercises-solving-ivps-5",
  "level": "2",
  "url": "linear02.html#linear02-exercises-solving-ivps-5",
  "type": "Exercise",
  "number": "3.2.6.7",
  "title": "",
  "body": "    "
},
{
  "id": "linear02-exercises-solving-ivps-6",
  "level": "2",
  "url": "linear02.html#linear02-exercises-solving-ivps-6",
  "type": "Exercise",
  "number": "3.2.6.8",
  "title": "",
  "body": "    "
},
{
  "id": "linear02-exercises-4",
  "level": "2",
  "url": "linear02.html#linear02-exercises-4",
  "type": "Exercise",
  "number": "3.2.6.9",
  "title": "",
  "body": "  Consider the nonhomogeneous system of linear differential equations and assume that the general solution of is given by If is a particular solution linear system particular solution of , show that is the general solution to the system. Thus, to solve a nonhomogeneous system of linear differential equations, we need to find the solution of the corresponding homogeneous system and one particular solution of the nonhomogeneous system.   "
},
{
  "id": "linear02-exercises-5",
  "level": "2",
  "url": "linear02.html#linear02-exercises-5",
  "type": "Exercise",
  "number": "3.2.6.10",
  "title": "",
  "body": "  Consider the linear system   Find the general solution of the homogeneous system  Find a particular solution for  Find the solution of     Assume that your solution must be of the form This is called the method of undetermined coefficients .   "
},
{
  "id": "linear02-exercises-6",
  "level": "2",
  "url": "linear02.html#linear02-exercises-6",
  "type": "Exercise",
  "number": "3.2.6.11",
  "title": "",
  "body": "  Consider the system where . For what values of do you find a bifurcation (a change in the type of phase portrait)? Sketch typical phase portraits for a values of above and below the bifurcation point.   "
},
{
  "id": "linear02-exercises-7",
  "level": "2",
  "url": "linear02.html#linear02-exercises-7",
  "type": "Exercise",
  "number": "3.2.6.12",
  "title": "",
  "body": "  Prove that is the general solution of   "
},
{
  "id": "linear03",
  "level": "1",
  "url": "linear03.html",
  "type": "Section",
  "number": "3.3",
  "title": "Phase Plane Analysis of Linear Systems",
  "body": " Phase Plane Analysis of Linear Systems    To understand that given a system of linear differential equations with distinct real eigenvalues, we can classify the origin as sink, saddle, or source depending on the signs of the eigenvalues.     In , we learned how to solve the system provided the system has distinct real eigenvalues. If has distinct real eigenvalues and with eigenvectors and , respectively, then the general solution of the system is Furthermore, we can use the general solution of such a system to find the straight-line solutions to the system. If , then all solutions will lie along the line in the -plane that contains the vector . Similarly, if , then all solutions will lie along the line in the -plane that contains the vector .    The Case   The system can be written in matrix form , where The eigenvalues of are or with eigenvectors and , respectively. Therefore, the straight-line solutions must be lines containing and ( ).      f(t,y) = (y[0]+3*y[1], y[0] - y[1])              Straight-line solutions    Let us consider the special case of the system , where and Since this is a decoupled system, we already know how to find the solutions. However, in keeping with the spirit of our investigation, we will find the eigenvalues of . The characteristic equation of is and our eigenvalues are and . It is easy to see that we can associate eigenvectors and to and , respectively. Thus, our general solution is      f(t,y) = (-y[0],y[1])              Saddle phase portrait   Since , the straight-line solutions of the form lie on the -axis. These solutions approach zero as . On the other hand, the solutions lie on the -axis and approach infinity as . The -axis is a stable line of solutions, while the -axis is an unstable line of solutions. All other solutions (with ) tend to infinity in the direction of the unstable line, since approaches as . The phase portrait for the system is given in . The equilibrium point of such systems is called a saddle equilibrium solution saddle .  In general, a straight-line solution is called a stable line of solutions stable line of solutions if all solutions approach . A straight-line solution is called an unstable line unstable line if all of the non-zero solutions approach infinity.   For the system in , the unstable line of solutions is Each solution tends away from the origin as . The stable line of solutions is given by and each solution on this line approaches the origin as . By the Principle of Superposition, the general solution to the system is If , we have as . If , we have as . Thus, we have the phase portrait in .      f(t,y) = (y[0] + 3*y[1],y[0]-y[1])                Saddle phase portrait    For the general case, where has eigenvalues , we always have a stable line of solutions and an unstable line of solutions. All other solutions approach the unstable line as and the stable line as .   Planar Systems with Eigenvalues of Different Signs   Consider the system , where     Find the eigenvalues of . You should find distinct real eigenvalues and .      Find eigenvectors and for the eigenvalues and , respectively.      Find the straight-line solutions of . Plot the solutions in the -plane.      Sketch several solution curves for the system . What do you notice about the solution curves, especially with respect to the straight-line solutions?       The Case  Suppose and consider the diagonal system The general solution of this system is but unlike the case of the saddle, all solutions tend towards the origin as . To see how the solutions approach the origin, we will compute for . If then Since , the derivative, , must approach , provided . Therefore, the solutions tend towards the origin tangentially to the -axis ( ). We say that the equilibrium point for this system is a sink equilibrium solution sink .      f(t,y) = (-2*y[0],-y[1])              Sink phase portrait   Since , we say that is the dominant eigenvalue eigenvalue dominant . The -coordinates of the solutions approach the origin much faster than the -coordinates.  To see what happens in the general case, suppose that , the eigenvectors associated with and are and , respectively. The general solution of our system is The slope of a solution curve at is given by This last expression tends toward the slope of the eigenvector of (unless ). If , then we have the straight-line solution corresponding to the eigenvalue . Hence, all the solutions for this case (except those on the straight-line belonging to the dominant eigenvalue) tend toward the origin tangentially to the straight-line solution corresponding to the weaker eigenvalue, .   Consider the system The eigenvalues of this system are and with eigenvectors and , respectively. Since the dominant eigenvalue is , solutions tend towards the straight-line solution containing the vector more quickly ( ).      f(t,y) = (-5*y[0] - 2*y[1],-y[0]-4*y[1])                Sink phase portrait     Planar Systems with Two Negative Eigenvalues   Consider the system , where     Find the eigenvalues of . You should find distinct real eigenvalues and .      Find eigenvectors and for the eigenvalues and , respectively.      Find the straight-line solutions of . Plot the solutions in the -plane.      Sketch several solution curves for the system . What do you notice about the solution curves, especially with respect to the straight-line solutions?      Which of the two eigenvalues is the dominant eigenvalue? Why?       The Case  If , we can regard our direction field as the negative of the direction field of the previous case. The general solution and the direction field are the same, but the arrows are reversed ( ). In this case, we say that the equilibrium point is a source equilibrium solution source .      f(t,y) = (2*y[0],y[1])              Source phase portrait    Consider the system The eigenvalues of this system are and with eigenvectors and , respectively. Since the dominant eigenvalue is , solutions are closer to the straight-line solution containing the vector more as ( ).      f(t,y) = (4*y[0] - 3*y[1],-y[0]+2*y[1])                Source phase portrait      Important Lessons   Given a system of linear differential equations we can use the eigenvalues of to find and classify the solutions of the system.  If then has two distinct real eigenvalues. The general solution to the system is   For the case , the equilibrium point of the system is a saddle.  For the case , the equilibrium point of the system is a sink.  For the case , the equilibrium point of the system is a source.        What is a stable line of solutions?       For a linear system with distinct real eigenvalues, what are the three different possibilities for the phase plane of the system?       Exercises   Phase Plane Analysis of Linear Systems with Distinct Real Eigenvalues  For each of the linear systems in   Find the eigenvalues of .  What is the dominant eigenvalue?  Find the eigenvectors for each eigenvalue of .  What are the straight-line solutions of ?  Describe the nature of the equilibrium solution at .  Sketch the phase plane and several solution curves.                                              Solve each linear systems in for the initial condition .      Consider the linear system , where Suppose the initial conditions for the solution curve are and . We can use the following Sage code to plot the phase portrait of this system, including the straight-line solutions and a solution curve.   Use Sage to graph the direction field for the system linear systems in . Plot a solution curve for the initial condition . Be sure to show the corresponding straight-line solutions on your graph.      "
},
{
  "id": "linear03-2",
  "level": "2",
  "url": "linear03.html#linear03-2",
  "type": "Objectives",
  "number": "3.3",
  "title": "",
  "body": "  To understand that given a system of linear differential equations with distinct real eigenvalues, we can classify the origin as sink, saddle, or source depending on the signs of the eigenvalues.   "
},
{
  "id": "linear03-example-saddle-phase-portrait-0",
  "level": "2",
  "url": "linear03.html#linear03-example-saddle-phase-portrait-0",
  "type": "Example",
  "number": "3.3.1",
  "title": "",
  "body": " The system can be written in matrix form , where The eigenvalues of are or with eigenvectors and , respectively. Therefore, the straight-line solutions must be lines containing and ( ).      f(t,y) = (y[0]+3*y[1], y[0] - y[1])              Straight-line solutions   "
},
{
  "id": "linear03-figure-saddle-phase-portrait-1",
  "level": "2",
  "url": "linear03.html#linear03-figure-saddle-phase-portrait-1",
  "type": "Figure",
  "number": "3.3.3",
  "title": "",
  "body": "    f(t,y) = (-y[0],y[1])              Saddle phase portrait  "
},
{
  "id": "linear03-subsection-eigenvalues-different-signs-5",
  "level": "2",
  "url": "linear03.html#linear03-subsection-eigenvalues-different-signs-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "saddle "
},
{
  "id": "linear03-subsection-eigenvalues-different-signs-6",
  "level": "2",
  "url": "linear03.html#linear03-subsection-eigenvalues-different-signs-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "stable line of solutions unstable line "
},
{
  "id": "linear03-subsection-eigenvalues-different-signs-7",
  "level": "2",
  "url": "linear03.html#linear03-subsection-eigenvalues-different-signs-7",
  "type": "Example",
  "number": "3.3.4",
  "title": "",
  "body": " For the system in , the unstable line of solutions is Each solution tends away from the origin as . The stable line of solutions is given by and each solution on this line approaches the origin as . By the Principle of Superposition, the general solution to the system is If , we have as . If , we have as . Thus, we have the phase portrait in .      f(t,y) = (y[0] + 3*y[1],y[0]-y[1])                Saddle phase portrait   "
},
{
  "id": "linear03-subsection-eigenvalues-different-signs-9",
  "level": "2",
  "url": "linear03.html#linear03-subsection-eigenvalues-different-signs-9",
  "type": "Activity",
  "number": "3.3.1",
  "title": "Planar Systems with Eigenvalues of Different Signs.",
  "body": " Planar Systems with Eigenvalues of Different Signs   Consider the system , where     Find the eigenvalues of . You should find distinct real eigenvalues and .      Find eigenvectors and for the eigenvalues and , respectively.      Find the straight-line solutions of . Plot the solutions in the -plane.      Sketch several solution curves for the system . What do you notice about the solution curves, especially with respect to the straight-line solutions?    "
},
{
  "id": "linear03-subsection-eigenvalues-negative-2",
  "level": "2",
  "url": "linear03.html#linear03-subsection-eigenvalues-negative-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "sink "
},
{
  "id": "linear03-figure-sink-phase-portrait-2",
  "level": "2",
  "url": "linear03.html#linear03-figure-sink-phase-portrait-2",
  "type": "Figure",
  "number": "3.3.6",
  "title": "",
  "body": "    f(t,y) = (-2*y[0],-y[1])              Sink phase portrait  "
},
{
  "id": "linear03-subsection-eigenvalues-negative-4",
  "level": "2",
  "url": "linear03.html#linear03-subsection-eigenvalues-negative-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "dominant eigenvalue "
},
{
  "id": "linear03-subsection-eigenvalues-negative-6",
  "level": "2",
  "url": "linear03.html#linear03-subsection-eigenvalues-negative-6",
  "type": "Example",
  "number": "3.3.7",
  "title": "",
  "body": " Consider the system The eigenvalues of this system are and with eigenvectors and , respectively. Since the dominant eigenvalue is , solutions tend towards the straight-line solution containing the vector more quickly ( ).      f(t,y) = (-5*y[0] - 2*y[1],-y[0]-4*y[1])                Sink phase portrait   "
},
{
  "id": "linear03-subsection-eigenvalues-negative-7",
  "level": "2",
  "url": "linear03.html#linear03-subsection-eigenvalues-negative-7",
  "type": "Activity",
  "number": "3.3.2",
  "title": "Planar Systems with Two Negative Eigenvalues.",
  "body": " Planar Systems with Two Negative Eigenvalues   Consider the system , where     Find the eigenvalues of . You should find distinct real eigenvalues and .      Find eigenvectors and for the eigenvalues and , respectively.      Find the straight-line solutions of . Plot the solutions in the -plane.      Sketch several solution curves for the system . What do you notice about the solution curves, especially with respect to the straight-line solutions?      Which of the two eigenvalues is the dominant eigenvalue? Why?    "
},
{
  "id": "linear03-subsection-eigenvalues-positive-2",
  "level": "2",
  "url": "linear03.html#linear03-subsection-eigenvalues-positive-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "source "
},
{
  "id": "linear03-figure-nodal-source-phase-portrait",
  "level": "2",
  "url": "linear03.html#linear03-figure-nodal-source-phase-portrait",
  "type": "Figure",
  "number": "3.3.9",
  "title": "",
  "body": "    f(t,y) = (2*y[0],y[1])              Source phase portrait  "
},
{
  "id": "linear03-subsection-eigenvalues-positive-4",
  "level": "2",
  "url": "linear03.html#linear03-subsection-eigenvalues-positive-4",
  "type": "Example",
  "number": "3.3.10",
  "title": "",
  "body": " Consider the system The eigenvalues of this system are and with eigenvectors and , respectively. Since the dominant eigenvalue is , solutions are closer to the straight-line solution containing the vector more as ( ).      f(t,y) = (4*y[0] - 3*y[1],-y[0]+2*y[1])                Source phase portrait   "
},
{
  "id": "rq-linear03-stable-line",
  "level": "2",
  "url": "linear03.html#rq-linear03-stable-line",
  "type": "Reading Question",
  "number": "3.3.5.1",
  "title": "",
  "body": "  What is a stable line of solutions?    "
},
{
  "id": "rq-linear03-distinct-real",
  "level": "2",
  "url": "linear03.html#rq-linear03-distinct-real",
  "type": "Reading Question",
  "number": "3.3.5.2",
  "title": "",
  "body": "  For a linear system with distinct real eigenvalues, what are the three different possibilities for the phase plane of the system?    "
},
{
  "id": "linear03-exercises-solving-linear-systems-3",
  "level": "2",
  "url": "linear03.html#linear03-exercises-solving-linear-systems-3",
  "type": "Exercise",
  "number": "3.3.6.1",
  "title": "",
  "body": "    "
},
{
  "id": "linear03-exercises-solving-linear-systems-4",
  "level": "2",
  "url": "linear03.html#linear03-exercises-solving-linear-systems-4",
  "type": "Exercise",
  "number": "3.3.6.2",
  "title": "",
  "body": "    "
},
{
  "id": "linear03-exercises-solving-linear-systems-5",
  "level": "2",
  "url": "linear03.html#linear03-exercises-solving-linear-systems-5",
  "type": "Exercise",
  "number": "3.3.6.3",
  "title": "",
  "body": "    "
},
{
  "id": "linear03-exercises-solving-linear-systems-6",
  "level": "2",
  "url": "linear03.html#linear03-exercises-solving-linear-systems-6",
  "type": "Exercise",
  "number": "3.3.6.4",
  "title": "",
  "body": "    "
},
{
  "id": "linear03-exercises-solving-linear-systems-7",
  "level": "2",
  "url": "linear03.html#linear03-exercises-solving-linear-systems-7",
  "type": "Exercise",
  "number": "3.3.6.5",
  "title": "",
  "body": "    "
},
{
  "id": "linear03-exercises-solving-linear-systems-8",
  "level": "2",
  "url": "linear03.html#linear03-exercises-solving-linear-systems-8",
  "type": "Exercise",
  "number": "3.3.6.6",
  "title": "",
  "body": "    "
},
{
  "id": "linear03-exercises-solving-linear-systems-9",
  "level": "2",
  "url": "linear03.html#linear03-exercises-solving-linear-systems-9",
  "type": "Exercise",
  "number": "3.3.6.7",
  "title": "",
  "body": "    "
},
{
  "id": "linear03-exercises-solving-linear-systems-10",
  "level": "2",
  "url": "linear03.html#linear03-exercises-solving-linear-systems-10",
  "type": "Exercise",
  "number": "3.3.6.8",
  "title": "",
  "body": "    "
},
{
  "id": "linear03-exercises-3",
  "level": "2",
  "url": "linear03.html#linear03-exercises-3",
  "type": "Exercise",
  "number": "3.3.6.9",
  "title": "",
  "body": "  Solve each linear systems in for the initial condition .   "
},
{
  "id": "linear03-exercises-4",
  "level": "2",
  "url": "linear03.html#linear03-exercises-4",
  "type": "Exercise",
  "number": "3.3.6.10",
  "title": "",
  "body": "  Consider the linear system , where Suppose the initial conditions for the solution curve are and . We can use the following Sage code to plot the phase portrait of this system, including the straight-line solutions and a solution curve.   Use Sage to graph the direction field for the system linear systems in . Plot a solution curve for the initial condition . Be sure to show the corresponding straight-line solutions on your graph.    "
},
{
  "id": "linear04",
  "level": "1",
  "url": "linear04.html",
  "type": "Section",
  "number": "3.4",
  "title": "Complex Eigenvalues",
  "body": " Complex Eigenvalues    To understand and be able to apply Euler's formula,  To understand that if a matrix has two complex eigenvalues, , then the general solution will involve sines and cosines. Furthermore, the origin will be a spiral sink, a spiral source or a center.     Consider the following system, The characteristic polynomial of the system is . The roots of this polynomial are and with eigenvectors and , respectively. It is clear from the phase portrait of the system that there are no straight-line solutions ( ). However, we would like to have real solutions for a linear system with real coefficients.      f(t,y) = (-3*y[0] +y[1],-2*y[0] - y[1])            A system with no straight-line solutions     Complex Eigenvalues  Suppose that we have the system where . The characteristic polynomial of this system is , and so we have imaginary eigenvalues . To find the eigenvector corresponding to , we must solve the system however, this reduces to solving the equation . Thus, we can find a complex eigenvector . Consequently, is a complex solution to the system . The problem is that we have a real system of differential equations and would like real solutions. We can remedy the situation if we use Euler's formula , If you are unfamiliar with Euler's formula, try expanding both sides as a power series to check that we do indeed have a correct identity.     Euler's formula   Let us rewrite our solution as and consider the real and imaginary parts of the solution: Since we know that and by setting the real and imaginary parts equal. Thus, both and are solutions to our system. Moreover, since we know that the appropriate linear combination of and will provide a solution to any initial value problem.    real part of a complex number or vector     imaginary part of a complex number or vector   We claim that is a general solution to our system. That is, we must be able to write every solution of our system as a linear combination of and . If is another solution to the system , then In other words, and . Now, define by The derivative of is Therefore, is a complex constant and . We can now write . Thus, Therefore, Consequently,  Notice that the solutions are periodic with period . This type of system is called a center .   Consider the initial value problem The eigenvalues of this system are . Therefore, the general solution to the system is Using the initial conditions to solve for and , the solution to our initial value problem is The phase portrait is a circle of radius 3 about the origin ( ).      f(t,y) = (2*y[1],-2*y[0])            Phase portrait for a center      Spiral Sinks and Sources  Now let us consider the system , where and and are nonzero real numbers. The characteristic equation of is so the eigenvalues are . We can use the equation to show that is an eigenvector for . Therefore, we have a complex solution of the form As before, both are real solutions to . Furthermore, these solutions are linearly independent. Indeed, cannot be a multiple of for all values of . Thus, we have the general solution The factor tells us that the solutions either spiral into the origin if or spiral out to infinity if . In this case we say that the equilibrium points are spiral sinks and spiral sources , respectively.   Consider the initial value problem The matrix has eigenvalues . The eigenvalue has an eigenvector . The complex solution of our system is The real and imaginary parts of this solution are respectively. Thus, we have the general solution Applying our initial conditions, we can determine that and ; hence, the solution to our initial value problem is The phase portrait of this solution indicates that we do indeed have a spiral sink ( ).      f(t,y) = (-y[0]\/10 +y[1],-y[0] - y[1]\/10)            Phase portrait for a spiral sink     The initial value problem The matrix has an eigenvector with eigenvalue . Thus, the complex solution is Following the procedure that we used in the previous example, the solution to our initial value problem is and he phase portrait is a spiral source ( ).      f(t,y) = (y[0]\/10 +y[1],-y[0] + y[1]\/10)            Phase portrait for a spiral sink     Systems with Complex Eigenvalues   Consider the system , where     Find the eigenvalues, and of .      Find eigenvectors, and for the eigenvalues and , respectively.      Find the complex solution to the system .      Find the real solution to the system .      Is the origin a spiral source or a spiral sink? Sketch a solution curve in the -plane.       Solving Systems with Complex Eigenvalues  Suppose that we have the linear system , where The characteristic polynomial of is If , then the eigenvalues of are complex, and we cannot apply the strategy that we used to determine the general solution in the case of distinct real roots.   The system , where The characteristic polynomial of is and so the eigenvalues are complex conjugates, and . It is easy to show that an eigenvector for is . Recalling that , is a complex solution to our system. Taking the real and imaginary parts of this solution, we obtain the general solution to our system     complex conjugate   The nature of the equilibrium solution is determined by the factor in the solution. If , the equilibrium point is a spiral sink . If , the equilibrium point is a spiral source . If , the equilibrium point is a center .  Although we have outlined a procedure to find the general solution of if has complex eigenvalues, we have not shown that this method will work in all cases. We will do so in .   Planar Systems with Complex Eigenvalues   Consider the system , where     Find the eigenvalues, and of .      Find eigenvectors, and for the eigenvalues and , respectively.      Find the complex solution to the system .      Find the real solution to the system .      Is the origin a spiral source or a spiral sink? Sketch a solution curve in the -plane.       Important Lessons   If then has two complex eigenvalues, . The general solution to the system is If , the equilibrium point is a spiral sink. If , the equilibrium point is a spiral source.       When are two complex numbers equal?       What is Euler's formula?       For a linear system with complex eigenvalues, what are the different possibilities for solution curves?       Exercises   Solving Linear Systems with Complex Eigenvalues   Find the general solution of each of the linear systems in .                                             Solving Initial Value Problems  Solve each of the following linear systems for the given initial values in .                                             Consider the linear system , where Suppose the initial conditions for the solution curve are and . We can use the following Sage code to plot the phase portrait of this system, including a solution curve.   Use Sage to graph the direction field for the system linear systems in . Plot the solution curve for the given initial condition.      "
},
{
  "id": "linear04-2",
  "level": "2",
  "url": "linear04.html#linear04-2",
  "type": "Objectives",
  "number": "3.4",
  "title": "",
  "body": "  To understand and be able to apply Euler's formula,  To understand that if a matrix has two complex eigenvalues, , then the general solution will involve sines and cosines. Furthermore, the origin will be a spiral sink, a spiral source or a center.   "
},
{
  "id": "linear04-figure-no-straight-line-solutions",
  "level": "2",
  "url": "linear04.html#linear04-figure-no-straight-line-solutions",
  "type": "Figure",
  "number": "3.4.1",
  "title": "",
  "body": "    f(t,y) = (-3*y[0] +y[1],-2*y[0] - y[1])            A system with no straight-line solutions  "
},
{
  "id": "linear04-subsection-complex-eigenvalues-2",
  "level": "2",
  "url": "linear04.html#linear04-subsection-complex-eigenvalues-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Euler's formula "
},
{
  "id": "linear04-subsection-complex-eigenvalues-8",
  "level": "2",
  "url": "linear04.html#linear04-subsection-complex-eigenvalues-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "center "
},
{
  "id": "linear04-subsection-complex-eigenvalues-9",
  "level": "2",
  "url": "linear04.html#linear04-subsection-complex-eigenvalues-9",
  "type": "Example",
  "number": "3.4.2",
  "title": "",
  "body": " Consider the initial value problem The eigenvalues of this system are . Therefore, the general solution to the system is Using the initial conditions to solve for and , the solution to our initial value problem is The phase portrait is a circle of radius 3 about the origin ( ).      f(t,y) = (2*y[1],-2*y[0])            Phase portrait for a center   "
},
{
  "id": "linear04-subsection-spiral-sinks-sources-2",
  "level": "2",
  "url": "linear04.html#linear04-subsection-spiral-sinks-sources-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "spiral sinks spiral sources "
},
{
  "id": "linear04-subsection-spiral-sinks-sources-3",
  "level": "2",
  "url": "linear04.html#linear04-subsection-spiral-sinks-sources-3",
  "type": "Example",
  "number": "3.4.4",
  "title": "",
  "body": " Consider the initial value problem The matrix has eigenvalues . The eigenvalue has an eigenvector . The complex solution of our system is The real and imaginary parts of this solution are respectively. Thus, we have the general solution Applying our initial conditions, we can determine that and ; hence, the solution to our initial value problem is The phase portrait of this solution indicates that we do indeed have a spiral sink ( ).      f(t,y) = (-y[0]\/10 +y[1],-y[0] - y[1]\/10)            Phase portrait for a spiral sink   "
},
{
  "id": "linear04-subsection-spiral-sinks-sources-4",
  "level": "2",
  "url": "linear04.html#linear04-subsection-spiral-sinks-sources-4",
  "type": "Example",
  "number": "3.4.6",
  "title": "",
  "body": " The initial value problem The matrix has an eigenvector with eigenvalue . Thus, the complex solution is Following the procedure that we used in the previous example, the solution to our initial value problem is and he phase portrait is a spiral source ( ).      f(t,y) = (y[0]\/10 +y[1],-y[0] + y[1]\/10)            Phase portrait for a spiral sink   "
},
{
  "id": "linear04-subsection-spiral-sinks-sources-5",
  "level": "2",
  "url": "linear04.html#linear04-subsection-spiral-sinks-sources-5",
  "type": "Activity",
  "number": "3.4.1",
  "title": "Systems with Complex Eigenvalues.",
  "body": " Systems with Complex Eigenvalues   Consider the system , where     Find the eigenvalues, and of .      Find eigenvectors, and for the eigenvalues and , respectively.      Find the complex solution to the system .      Find the real solution to the system .      Is the origin a spiral source or a spiral sink? Sketch a solution curve in the -plane.    "
},
{
  "id": "linear04-subsection-quick-start-3",
  "level": "2",
  "url": "linear04.html#linear04-subsection-quick-start-3",
  "type": "Example",
  "number": "3.4.8",
  "title": "",
  "body": " The system , where The characteristic polynomial of is and so the eigenvalues are complex conjugates, and . It is easy to show that an eigenvector for is . Recalling that , is a complex solution to our system. Taking the real and imaginary parts of this solution, we obtain the general solution to our system  "
},
{
  "id": "linear04-subsection-quick-start-5",
  "level": "2",
  "url": "linear04.html#linear04-subsection-quick-start-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "spiral sink spiral source center "
},
{
  "id": "linear04-subsection-quick-start-7",
  "level": "2",
  "url": "linear04.html#linear04-subsection-quick-start-7",
  "type": "Activity",
  "number": "3.4.2",
  "title": "Planar Systems with Complex Eigenvalues.",
  "body": " Planar Systems with Complex Eigenvalues   Consider the system , where     Find the eigenvalues, and of .      Find eigenvectors, and for the eigenvalues and , respectively.      Find the complex solution to the system .      Find the real solution to the system .      Is the origin a spiral source or a spiral sink? Sketch a solution curve in the -plane.    "
},
{
  "id": "rq-linear04-complex",
  "level": "2",
  "url": "linear04.html#rq-linear04-complex",
  "type": "Reading Question",
  "number": "3.4.5.1",
  "title": "",
  "body": "  When are two complex numbers equal?    "
},
{
  "id": "rq-linear04-euler",
  "level": "2",
  "url": "linear04.html#rq-linear04-euler",
  "type": "Reading Question",
  "number": "3.4.5.2",
  "title": "",
  "body": "  What is Euler's formula?    "
},
{
  "id": "rq-linear04-complex-ev",
  "level": "2",
  "url": "linear04.html#rq-linear04-complex-ev",
  "type": "Reading Question",
  "number": "3.4.5.3",
  "title": "",
  "body": "  For a linear system with complex eigenvalues, what are the different possibilities for solution curves?    "
},
{
  "id": "linear04-exercises-solving-linear-systems-3",
  "level": "2",
  "url": "linear04.html#linear04-exercises-solving-linear-systems-3",
  "type": "Exercise",
  "number": "3.4.6.1",
  "title": "",
  "body": "    "
},
{
  "id": "linear04-exercises-solving-linear-systems-4",
  "level": "2",
  "url": "linear04.html#linear04-exercises-solving-linear-systems-4",
  "type": "Exercise",
  "number": "3.4.6.2",
  "title": "",
  "body": "    "
},
{
  "id": "linear04-exercises-solving-linear-systems-5",
  "level": "2",
  "url": "linear04.html#linear04-exercises-solving-linear-systems-5",
  "type": "Exercise",
  "number": "3.4.6.3",
  "title": "",
  "body": "    "
},
{
  "id": "linear04-exercises-solving-linear-systems-6",
  "level": "2",
  "url": "linear04.html#linear04-exercises-solving-linear-systems-6",
  "type": "Exercise",
  "number": "3.4.6.4",
  "title": "",
  "body": "    "
},
{
  "id": "linear04-exercises-solving-linear-systems-7",
  "level": "2",
  "url": "linear04.html#linear04-exercises-solving-linear-systems-7",
  "type": "Exercise",
  "number": "3.4.6.5",
  "title": "",
  "body": "    "
},
{
  "id": "linear04-exercises-solving-linear-systems-8",
  "level": "2",
  "url": "linear04.html#linear04-exercises-solving-linear-systems-8",
  "type": "Exercise",
  "number": "3.4.6.6",
  "title": "",
  "body": "    "
},
{
  "id": "linear04-exercises-solving-linear-systems-9",
  "level": "2",
  "url": "linear04.html#linear04-exercises-solving-linear-systems-9",
  "type": "Exercise",
  "number": "3.4.6.7",
  "title": "",
  "body": "    "
},
{
  "id": "linear04-exercises-solving-linear-systems-10",
  "level": "2",
  "url": "linear04.html#linear04-exercises-solving-linear-systems-10",
  "type": "Exercise",
  "number": "3.4.6.8",
  "title": "",
  "body": "    "
},
{
  "id": "linear04-exercises-solving-ivps-3",
  "level": "2",
  "url": "linear04.html#linear04-exercises-solving-ivps-3",
  "type": "Exercise",
  "number": "3.4.6.9",
  "title": "",
  "body": "    "
},
{
  "id": "linear04-exercises-solving-ivps-4",
  "level": "2",
  "url": "linear04.html#linear04-exercises-solving-ivps-4",
  "type": "Exercise",
  "number": "3.4.6.10",
  "title": "",
  "body": "    "
},
{
  "id": "linear04-exercises-solving-ivps-5",
  "level": "2",
  "url": "linear04.html#linear04-exercises-solving-ivps-5",
  "type": "Exercise",
  "number": "3.4.6.11",
  "title": "",
  "body": "    "
},
{
  "id": "linear04-exercises-solving-ivps-6",
  "level": "2",
  "url": "linear04.html#linear04-exercises-solving-ivps-6",
  "type": "Exercise",
  "number": "3.4.6.12",
  "title": "",
  "body": "    "
},
{
  "id": "linear04-exercises-solving-ivps-7",
  "level": "2",
  "url": "linear04.html#linear04-exercises-solving-ivps-7",
  "type": "Exercise",
  "number": "3.4.6.13",
  "title": "",
  "body": "    "
},
{
  "id": "linear04-exercises-solving-ivps-8",
  "level": "2",
  "url": "linear04.html#linear04-exercises-solving-ivps-8",
  "type": "Exercise",
  "number": "3.4.6.14",
  "title": "",
  "body": "    "
},
{
  "id": "linear04-exercises-solving-ivps-9",
  "level": "2",
  "url": "linear04.html#linear04-exercises-solving-ivps-9",
  "type": "Exercise",
  "number": "3.4.6.15",
  "title": "",
  "body": "    "
},
{
  "id": "linear04-exercises-solving-ivps-10",
  "level": "2",
  "url": "linear04.html#linear04-exercises-solving-ivps-10",
  "type": "Exercise",
  "number": "3.4.6.16",
  "title": "",
  "body": "    "
},
{
  "id": "linear04-exercises-4",
  "level": "2",
  "url": "linear04.html#linear04-exercises-4",
  "type": "Exercise",
  "number": "3.4.6.17",
  "title": "",
  "body": "  Consider the linear system , where Suppose the initial conditions for the solution curve are and . We can use the following Sage code to plot the phase portrait of this system, including a solution curve.   Use Sage to graph the direction field for the system linear systems in . Plot the solution curve for the given initial condition.    "
},
{
  "id": "linear05",
  "level": "1",
  "url": "linear05.html",
  "type": "Section",
  "number": "3.5",
  "title": "Repeated Eigenvalues",
  "body": " Repeated Eigenvalues    To understand and be able to solve systems , where is a matrix with a single eigenvalue .     Consider the following system The characteristic polynomial of the system is and . This polynomial has a single root with eigenvector . There is a single straight-line solution for this system ( ). The strategy that we used to find the general solution to a system with distinct real eigenvalues will clearly have to be modified if we are to find a general solution to a system with a single eigenvalue.      f(t,y) = (2*y[0]+y[1], -y[0] + 4*y[1])              A system with one straight-line solution     Repeated Eigenvalues  The remaining case that we must consider is when the characteristic equation of a matrix has repeated roots. The simplest such case is The eigenvalues of are both . Since , any nonzero vector in is an eigenvector for . Thus, solutions to this system are of the form Each solution to our system lies on a straight line through the origin and either tends to the origin if or away from zero if .  A more interesting case occurs if Again, both eigenvalues are ; however, there is only one linearly independent eigenvector, which we can take to be . Therefore, we have a single straight-line solution  To find other solutions, we will rewrite the system as This is a partially coupled system ( ). If , the solution of the second equation is Therefore, the first equation becomes which is a first-order linear differential equation with solution Consequently, a solution to our system is   Consider the linear system The matrix that corresponds to this system is has a single eigenvalue, . An eigenvector for is . The general solution to our system is Applying the initial conditions and , the solution to our initial value problem is Notice that we have only one straight-line solution ( ).      f(t,y) = (-y[0]+y[1], -y[1])              Phase portrait for repeated eigenvalues     Systems with Repeated Eigenvalues   Consider the system , where     Find the eigenvalues of . There should be a single real eigenvalue .      Find the eigenvectors for the eigenvalues .      Find the straight-line solution of . Plot the solution in the -plane.      Find the general solution of .      Sketch several solution curves for the system . What do you notice about the solution curves, especially with respect to the straight-line solution?       Solving Systems with Repeated Eigenvalues  If the characteristic equation has only a single repeated root, there is a single eigenvalue. If this is the situation, then we actually have two separate cases to examine, depending on whether or not we can find two linearly independent eigenvectors.   Suppose we have the system , where The single eigenvalue is , but there are two linearly independent eigenvectors, and . In this case our solution is This is not too surprising since the system is uncoupled and each equation can be solved separately.    Now let us consider the example , where Since the characteristic polynomial of is , we have only a single eigenvalue with eigenvector . This gives us one solution to our system, ; however, we still need a second solution.  Since all other eigenvectors of are a multiple of , we cannot find a second linearly independent eigenvector, and we need to obtain the second solution in a different manner. Furthermore, since this system is not partially coupled, we will need a more general strategy.  First, we must find a vector such that . To do this we can start with any nonzero vector that is not a multiple of , say . We then compute Thus, we can take , and our second solution is Thus, our general solution is   If the eigenvalue is positive, the origin is a source. If it is negative, we will have a sink. Notice that we have only given a recipe for finding a solution to , where has a repeated eigenvalue and any two eigenvectors are linearly dependent. We will justify our procedure in the next section ( ).   Systems with Repeated Eigenvalues Finding a Second Solution   Consider the system , where     Find the eigenvalues of . There should be a single real eigenvalue .      Find the eigenvectors for the eigenvalues .      Find the straight-line solution of . Plot the solution in the -plane.      Find one solution, , of .      To find a second solution of , choose a vector that is not a multiple of and compute . This should give you a vector of the form . Let . The second solution is . What is the general solution?      Sketch several solution curves for the system . What do you notice about the solution curves, especially with respect to the straight-line solution?       Important Lessons   If then has one repeated real eigenvalue. The general solution to the system is If , then the solutions tend towards the origin as . For , the solutions tend away from the origin.  Suppose that a system has a single eigenvalue with an and that all other eigenvectors are multiples of . Then one solution is . To find a second linearly independent solution of , choose a vector that is not a multiple of and compute . This should give you a vector of the form . Let . The second solution is . The general solution of will be .       Given a system with repeated eigenvalues, how many straight-line solutions are there?       Given a system with repeated eigenvalues, explain why it is necessary to find a second linearly independent solution.       Exercises   Solving Linear Systems with Repeated Eigenvalues  Find the general solution of each of the linear systems in .                                            Solving Initial Value Problems  Solve each of the following linear systems for the given initial values in .                                             Consider the linear system , where Suppose the initial conditions for the solution curve are and . We can use the following Sage code to plot the phase portrait of this system, including a solution curve and the straight-line solution.   Use Sage to graph the direction field for the system linear systems in . Plot the straight-line solutions and the solution curve for the given initial condition.      "
},
{
  "id": "linear05-2",
  "level": "2",
  "url": "linear05.html#linear05-2",
  "type": "Objectives",
  "number": "3.5",
  "title": "",
  "body": "  To understand and be able to solve systems , where is a matrix with a single eigenvalue .   "
},
{
  "id": "linear05-figure-one-straight-line-solution",
  "level": "2",
  "url": "linear05.html#linear05-figure-one-straight-line-solution",
  "type": "Figure",
  "number": "3.5.1",
  "title": "",
  "body": "    f(t,y) = (2*y[0]+y[1], -y[0] + 4*y[1])              A system with one straight-line solution  "
},
{
  "id": "linear05-subsection-repeated-eigenvalues-5",
  "level": "2",
  "url": "linear05.html#linear05-subsection-repeated-eigenvalues-5",
  "type": "Example",
  "number": "3.5.2",
  "title": "",
  "body": " Consider the linear system The matrix that corresponds to this system is has a single eigenvalue, . An eigenvector for is . The general solution to our system is Applying the initial conditions and , the solution to our initial value problem is Notice that we have only one straight-line solution ( ).      f(t,y) = (-y[0]+y[1], -y[1])              Phase portrait for repeated eigenvalues   "
},
{
  "id": "linear05-subsection-repeated-eigenvalues-6",
  "level": "2",
  "url": "linear05.html#linear05-subsection-repeated-eigenvalues-6",
  "type": "Activity",
  "number": "3.5.1",
  "title": "Systems with Repeated Eigenvalues.",
  "body": " Systems with Repeated Eigenvalues   Consider the system , where     Find the eigenvalues of . There should be a single real eigenvalue .      Find the eigenvectors for the eigenvalues .      Find the straight-line solution of . Plot the solution in the -plane.      Find the general solution of .      Sketch several solution curves for the system . What do you notice about the solution curves, especially with respect to the straight-line solution?    "
},
{
  "id": "linear05-subsection-quick-start-3",
  "level": "2",
  "url": "linear05.html#linear05-subsection-quick-start-3",
  "type": "Example",
  "number": "3.5.4",
  "title": "",
  "body": " Suppose we have the system , where The single eigenvalue is , but there are two linearly independent eigenvectors, and . In this case our solution is This is not too surprising since the system is uncoupled and each equation can be solved separately.  "
},
{
  "id": "linear05-example-repeated-eigenvalues",
  "level": "2",
  "url": "linear05.html#linear05-example-repeated-eigenvalues",
  "type": "Example",
  "number": "3.5.5",
  "title": "",
  "body": " Now let us consider the example , where Since the characteristic polynomial of is , we have only a single eigenvalue with eigenvector . This gives us one solution to our system, ; however, we still need a second solution.  Since all other eigenvectors of are a multiple of , we cannot find a second linearly independent eigenvector, and we need to obtain the second solution in a different manner. Furthermore, since this system is not partially coupled, we will need a more general strategy.  First, we must find a vector such that . To do this we can start with any nonzero vector that is not a multiple of , say . We then compute Thus, we can take , and our second solution is Thus, our general solution is  "
},
{
  "id": "linear05-subsection-quick-start-6",
  "level": "2",
  "url": "linear05.html#linear05-subsection-quick-start-6",
  "type": "Activity",
  "number": "3.5.2",
  "title": "Systems with Repeated Eigenvalues—Finding a Second Solution.",
  "body": " Systems with Repeated Eigenvalues Finding a Second Solution   Consider the system , where     Find the eigenvalues of . There should be a single real eigenvalue .      Find the eigenvectors for the eigenvalues .      Find the straight-line solution of . Plot the solution in the -plane.      Find one solution, , of .      To find a second solution of , choose a vector that is not a multiple of and compute . This should give you a vector of the form . Let . The second solution is . What is the general solution?      Sketch several solution curves for the system . What do you notice about the solution curves, especially with respect to the straight-line solution?    "
},
{
  "id": "rq-linear05-straightline",
  "level": "2",
  "url": "linear05.html#rq-linear05-straightline",
  "type": "Reading Question",
  "number": "3.5.4.1",
  "title": "",
  "body": "  Given a system with repeated eigenvalues, how many straight-line solutions are there?    "
},
{
  "id": "rq-linear05-repeated-solution",
  "level": "2",
  "url": "linear05.html#rq-linear05-repeated-solution",
  "type": "Reading Question",
  "number": "3.5.4.2",
  "title": "",
  "body": "  Given a system with repeated eigenvalues, explain why it is necessary to find a second linearly independent solution.    "
},
{
  "id": "exercises-linear05-solving-linear-systems-3",
  "level": "2",
  "url": "linear05.html#exercises-linear05-solving-linear-systems-3",
  "type": "Exercise",
  "number": "3.5.5.1",
  "title": "",
  "body": "    "
},
{
  "id": "exercises-linear05-solving-linear-systems-4",
  "level": "2",
  "url": "linear05.html#exercises-linear05-solving-linear-systems-4",
  "type": "Exercise",
  "number": "3.5.5.2",
  "title": "",
  "body": "    "
},
{
  "id": "exercises-linear05-solving-linear-systems-5",
  "level": "2",
  "url": "linear05.html#exercises-linear05-solving-linear-systems-5",
  "type": "Exercise",
  "number": "3.5.5.3",
  "title": "",
  "body": "    "
},
{
  "id": "exercises-linear05-solving-linear-systems-6",
  "level": "2",
  "url": "linear05.html#exercises-linear05-solving-linear-systems-6",
  "type": "Exercise",
  "number": "3.5.5.4",
  "title": "",
  "body": "    "
},
{
  "id": "exercises-linear05-solving-linear-systems-7",
  "level": "2",
  "url": "linear05.html#exercises-linear05-solving-linear-systems-7",
  "type": "Exercise",
  "number": "3.5.5.5",
  "title": "",
  "body": "    "
},
{
  "id": "exercises-linear05-solving-linear-systems-8",
  "level": "2",
  "url": "linear05.html#exercises-linear05-solving-linear-systems-8",
  "type": "Exercise",
  "number": "3.5.5.6",
  "title": "",
  "body": "    "
},
{
  "id": "exercises-linear05-solving-linear-systems-9",
  "level": "2",
  "url": "linear05.html#exercises-linear05-solving-linear-systems-9",
  "type": "Exercise",
  "number": "3.5.5.7",
  "title": "",
  "body": "    "
},
{
  "id": "exercises-linear05-solving-linear-systems-10",
  "level": "2",
  "url": "linear05.html#exercises-linear05-solving-linear-systems-10",
  "type": "Exercise",
  "number": "3.5.5.8",
  "title": "",
  "body": "    "
},
{
  "id": "exercises-linear05-solving-ivps-3",
  "level": "2",
  "url": "linear05.html#exercises-linear05-solving-ivps-3",
  "type": "Exercise",
  "number": "3.5.5.9",
  "title": "",
  "body": "    "
},
{
  "id": "exercises-linear05-solving-ivps-4",
  "level": "2",
  "url": "linear05.html#exercises-linear05-solving-ivps-4",
  "type": "Exercise",
  "number": "3.5.5.10",
  "title": "",
  "body": "    "
},
{
  "id": "exercises-linear05-solving-ivps-5",
  "level": "2",
  "url": "linear05.html#exercises-linear05-solving-ivps-5",
  "type": "Exercise",
  "number": "3.5.5.11",
  "title": "",
  "body": "    "
},
{
  "id": "exercises-linear05-solving-ivps-6",
  "level": "2",
  "url": "linear05.html#exercises-linear05-solving-ivps-6",
  "type": "Exercise",
  "number": "3.5.5.12",
  "title": "",
  "body": "    "
},
{
  "id": "exercises-linear05-solving-ivps-7",
  "level": "2",
  "url": "linear05.html#exercises-linear05-solving-ivps-7",
  "type": "Exercise",
  "number": "3.5.5.13",
  "title": "",
  "body": "    "
},
{
  "id": "exercises-linear05-solving-ivps-8",
  "level": "2",
  "url": "linear05.html#exercises-linear05-solving-ivps-8",
  "type": "Exercise",
  "number": "3.5.5.14",
  "title": "",
  "body": "    "
},
{
  "id": "exercises-linear05-solving-ivps-9",
  "level": "2",
  "url": "linear05.html#exercises-linear05-solving-ivps-9",
  "type": "Exercise",
  "number": "3.5.5.15",
  "title": "",
  "body": "    "
},
{
  "id": "exercises-linear05-solving-ivps-10",
  "level": "2",
  "url": "linear05.html#exercises-linear05-solving-ivps-10",
  "type": "Exercise",
  "number": "3.5.5.16",
  "title": "",
  "body": "    "
},
{
  "id": "exercises-linear05-4",
  "level": "2",
  "url": "linear05.html#exercises-linear05-4",
  "type": "Exercise",
  "number": "3.5.5.17",
  "title": "",
  "body": "  Consider the linear system , where Suppose the initial conditions for the solution curve are and . We can use the following Sage code to plot the phase portrait of this system, including a solution curve and the straight-line solution.   Use Sage to graph the direction field for the system linear systems in . Plot the straight-line solutions and the solution curve for the given initial condition.    "
},
{
  "id": "linear06",
  "level": "1",
  "url": "linear06.html",
  "type": "Section",
  "number": "3.6",
  "title": "Changing Coordinates",
  "body": " Changing Coordinates    To understand that a linear map converts solutions of to solutions of , and, conversely, the inverse of a linear map takes solutions of to solutions of .  To understand that a change of coordinates converts the system to one of the following special cases,     In the previous sections of this chapter, we outlined procedures for solving systems of linear differential equations of the form by determining the eigenvalues of . In this section we will consider the following special cases for , Although it may seem that we have limited ourselves by attacking only a very small part of the problem of finding solutions for , we are actually very close to providing a complete classification of all solutions. We will now show that we can transform any system of first-order linear differential equations with constant coefficients into one of these special systems by using a change of coordinates.    Linear Maps  First, we need to add a few things to our knowledge of matrices and linear algebra. A linear map linear map or linear transformation linear transformation on is a function that is defined by a matrix. That is, When there is no confusion, we will think of the linear map and the matrix as interchangeable.  We will say that is an invertible linear map linear map invertible if we can find a second linear map such that , where is the identity transformation. In terms of matrices, this means that we can find a matrix such that where is the identity matrix. We write for the inverse matrix of . It is easy to check that the inverse of is    A linear map is invertible if and only if .    If , then there are infinitely many nonzero vectors such that . Suppose that exists and such that . Then which is a contradiction. On the other hand, we can certainly compute , at least in the case, if the determinant is nonzero.      Changing Coordinates  In , we discussed what a basis was along with the coordinates with respect to a particular basis. The vectors and form a basis for . Indeed, if , then we can write We say that the coordinates of with respect to the basis are . Now consider the vectors and . Since these vectors are linearly independent form a different basis for . If , then we can write The coordinates of with respect to the basis are .  Suppose we wish to convert the coordinates with repect to one basis to a new set of coordinates with respect to a different basis; that is, we wish to do a change of coordinates coordiantes change of . Observe that It follows that Thus, the coordinates of with respect to the basis can be determined by If we let then the coordinates with respect to the basis are given by . If we are given the coordinates with respect to the basis for a vector, we simply need to multiply by the matrix .  Now suppose that we wish to find the coordinates with respect to the basis if we know that a vector . Since , we need only multiply both sides of the equation by to get . In our example, In our particular example, which are the coordinates of with respect to the basis .    Systems and Changing Coordinates  The idea now is to use a change of coordinates to convert an arbitrary system into one of the special systems mentioned at the beginning of the section , solve the new system, and then convert our new solution back to a solution of the original system using another change of coordinates.  Suppose that we consider a linear system where is an invertible matrix. If is a solution of , we claim that solves the equation . Indeed, We can think of this in two ways.  A linear map converts solutions of to solutions of .  The inverse of a linear map takes solutions of to solutions of .  We are now in a position to solve our problem of finding solutions of an arbitrary linear system    Distinct Real Eigenvalues  Consider the system , where has two real, distinct eigenvalues and with eigenvectors and , respectively. Let be the matrix with columns and . If and , then for . Consequently, for . Thus, we have for . Therefore, the matrix is in canonical form, The eigenvalues of the matrix are and with eigenvectors and , respectively. Thus, the general solution of is Hence, the general solution of is   Suppose , where The eigenvalues of are and and the associated eigenvectors are and , respectively. In this case, our matrix is If and , then for . Consequently, for , where Thus, The eigenvalues of the matrix are and with eigenvectors and , respectively. Thus, the general solution of is Hence, the general solution of is The linear map converts the phase portrait of the system ( ) to the phase portrait of the system ( ).      f(t,y) = (5*y[0], - y[1])              Phase portrait for       f(t,y) = (y[0] + 2*y[1], 4*y[0] + 3*y[1])              Phase portrait for     Distinct Real Eigenvalues and Transformation of Coordinates   Consider the system of linear differential equations , where     Find the eigenvalues of . You should find distinct real eigenvalues and .      Find the general solution for .      Construct the matrix and find .      Calculate . You should obtain the diagonal matrix with eigenvectors and .      The general solution of is Now calculate and compare this solution with the one that you obtained in . Of couurse, we have much quicker ways of solving a system with distinct real eigenvalues. The goal of this section is show that we have covered all possible cases for systems of linear differential equations and not to invent new methods of solution.       Complex Eigenvalues  Suppose the matrix in system has complex eigenvalues. In this case, the characteristic polynomial will have roots and , where The eigenvalues and are complex conjugates. Now, suppose that the eigenvalue has an eigenvector of the form where and are real vectors. Then is an eigenvector for , since Consequently, if is a real matrix with complex eigenvalues, one of the eigenvalues determines the other.    If is an eigenvalue of a real matrix with and eigenvector the form where and are real vectors, then the vectors and are linearly independent.    If and are not linearly independent, then for some . On one hand, we have However, In other words, . However, this is a contradiction since the left-side of the equation says that we have real eigenvector while the right-side of the equation is complex. Thus, and are linearly independent.      Let be a real matrix with eigenvalue , where . If is an eigenvector for , then there exists a matrix such that    Since is an eigenvector associated to the eigenvalue , we have Equating the real and imaginary parts, we find that If is the matrix with columns and , then Thus, we have Similarly, Therefore, we can write the matrix as    The system is in one of the canonical forms and has a phase portrait that is a spiral sink ( ), a center ( ), or a spiral source ( ). After a change of coordinates, the phase portrait of is equivalent to a sink, center, or source.   Suppose that we wish to find the solutions of the second order equation This particular equation might model a damped harmonic oscillator. If we rewrite this second-order equation as a first-order system, we have or equivalently , where The eigenvalues of are The eigenvalue has an eigenvector respectively. Therefore, we can take to be the matrix Consequently, which is in the canonical form The general solution to is The phase portrait of is given in .      f(t,y) = (-y[0]\/2 + y[1]\/2, -y[0]\/2 - y[1]\/2)              Phase portrait for   The general solution of is The phase portrait for this system is given in .      f(t,y) = (y[1], -y[0]\/2 - y[1])              Phase portrait of     Of course, we have a much more efficient way of solving the system , where Since has eigenvalue with an eigenvector , we can apply Euler's formula and write the solution as Taking the real and the imaginary parts of the last expression, the general solution of is which agrees with the solution that we found by transforming coordinates.     Repeated Eigenvalues  Now suppose that has a single real eigenvalue . Then the characteristic polynomial of is , then has an eigenvalue .   If has a single eigenvalue and a pair of linearly independent eigenvectors, then must be of the form    Suppose that and are linearly indeendent eigenvectors for , and let be the matrix whose first column is and second column is . That is, and . Since and are linearly independent, and is invertible. So, it must be the case that or    In this case, the system is uncoupled and is easily solved. That is, we can solve each equation in the system separately to obtain the general solution    Suppose that has a single eigenvalue . If is an eigenvector for and any other eigenvector for is a multiple of , then there exists a matrix such that    If is another vector in such that and are linearly independent, then can be written as a linear combination of and , We can assume that ; otherwise, we would have a second linearly independent eigenvector. We claim that . If this were not the case, then and would be an eigenvalue distinct from . Thus, . If we will let , then We now define and . Since we have Therefore, is in canonical form after a change of coordinates.     Consider the system , where The characteristic polynomial of is , we have only a single eigenvalue with eigenvector . Any other eigenvector for is a multiple of . If we choose , then and are linearly independent. Furthermore, So we can let . Therefore, the matrix that we seek is and From , we know that the general solution to the system is Therefore, the general solution to is This solution agrees with the solution that we found in .   In practice, we find solutions to linear systems using the methods that we outlined in Sections . What we have demonstrated in this section is that those solutions are exactly the ones that we want.    Important Lessons   A linear map is invertible if and only if .  A linear map converts solutions of to solutions of .  The inverse of a linear map takes solutions of to solutions of .  A change of coordinates converts the system to one of the following special cases,       Explain what a change of coordinates is.       Given a linear system, what are the possible types of solutions?       Exercises   Diagonalizing Matrices with Distinct Real Eigenvalues  For each of the matrices in , find (1) the eigenvalues, and ; (2) for each eigenvalue and , find an eigenvector and , respectively; and (3) construct the matrix and calculate .                                  Matrices with Complex Eigenvalues  For each of the matrices in , find (1) an eigenvalue, ; (2) find an eigenvector for ; and (2) construct the matrix and calculate . Compare your result to .                                  Matrices with Repeated Eigenvalues   For each of the matrices in , find (1) the eigenvalue, and an eigenvector for ; (2) choose a vector that is linearly independent of and compute . You should find that for some real number . (3) Let and form the matrix . (4) Calculate , which should be in the form                                  "
},
{
  "id": "linear06-2",
  "level": "2",
  "url": "linear06.html#linear06-2",
  "type": "Objectives",
  "number": "3.6",
  "title": "",
  "body": "  To understand that a linear map converts solutions of to solutions of , and, conversely, the inverse of a linear map takes solutions of to solutions of .  To understand that a change of coordinates converts the system to one of the following special cases,   "
},
{
  "id": "linear06-subsection-linear-maps-2",
  "level": "2",
  "url": "linear06.html#linear06-subsection-linear-maps-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear map linear transformation "
},
{
  "id": "linear06-subsection-linear-maps-3",
  "level": "2",
  "url": "linear06.html#linear06-subsection-linear-maps-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "invertible linear map "
},
{
  "id": "linear06-theorem-invertible-linear-maps",
  "level": "2",
  "url": "linear06.html#linear06-theorem-invertible-linear-maps",
  "type": "Theorem",
  "number": "3.6.1",
  "title": "",
  "body": "  A linear map is invertible if and only if .    If , then there are infinitely many nonzero vectors such that . Suppose that exists and such that . Then which is a contradiction. On the other hand, we can certainly compute , at least in the case, if the determinant is nonzero.   "
},
{
  "id": "linear06-subsection-changing-coordinates-3",
  "level": "2",
  "url": "linear06.html#linear06-subsection-changing-coordinates-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "change of coordinates "
},
{
  "id": "linear06-subsection-distinct-real-eigenvalues-3",
  "level": "2",
  "url": "linear06.html#linear06-subsection-distinct-real-eigenvalues-3",
  "type": "Example",
  "number": "3.6.2",
  "title": "",
  "body": " Suppose , where The eigenvalues of are and and the associated eigenvectors are and , respectively. In this case, our matrix is If and , then for . Consequently, for , where Thus, The eigenvalues of the matrix are and with eigenvectors and , respectively. Thus, the general solution of is Hence, the general solution of is The linear map converts the phase portrait of the system ( ) to the phase portrait of the system ( ).      f(t,y) = (5*y[0], - y[1])              Phase portrait for       f(t,y) = (y[0] + 2*y[1], 4*y[0] + 3*y[1])              Phase portrait for   "
},
{
  "id": "linear06-subsection-distinct-real-eigenvalues-4",
  "level": "2",
  "url": "linear06.html#linear06-subsection-distinct-real-eigenvalues-4",
  "type": "Activity",
  "number": "3.6.1",
  "title": "Distinct Real Eigenvalues and Transformation of Coordinates.",
  "body": " Distinct Real Eigenvalues and Transformation of Coordinates   Consider the system of linear differential equations , where     Find the eigenvalues of . You should find distinct real eigenvalues and .      Find the general solution for .      Construct the matrix and find .      Calculate . You should obtain the diagonal matrix with eigenvectors and .      The general solution of is Now calculate and compare this solution with the one that you obtained in . Of couurse, we have much quicker ways of solving a system with distinct real eigenvalues. The goal of this section is show that we have covered all possible cases for systems of linear differential equations and not to invent new methods of solution.    "
},
{
  "id": "linear06-subsection-complex-eigenvalues-3",
  "level": "2",
  "url": "linear06.html#linear06-subsection-complex-eigenvalues-3",
  "type": "Proposition",
  "number": "3.6.5",
  "title": "",
  "body": "  If is an eigenvalue of a real matrix with and eigenvector the form where and are real vectors, then the vectors and are linearly independent.    If and are not linearly independent, then for some . On one hand, we have However, In other words, . However, this is a contradiction since the left-side of the equation says that we have real eigenvector while the right-side of the equation is complex. Thus, and are linearly independent.   "
},
{
  "id": "linear06-subsection-complex-eigenvalues-4",
  "level": "2",
  "url": "linear06.html#linear06-subsection-complex-eigenvalues-4",
  "type": "Proposition",
  "number": "3.6.6",
  "title": "",
  "body": "  Let be a real matrix with eigenvalue , where . If is an eigenvector for , then there exists a matrix such that    Since is an eigenvector associated to the eigenvalue , we have Equating the real and imaginary parts, we find that If is the matrix with columns and , then Thus, we have Similarly, Therefore, we can write the matrix as   "
},
{
  "id": "linear06-subsection-complex-eigenvalues-6",
  "level": "2",
  "url": "linear06.html#linear06-subsection-complex-eigenvalues-6",
  "type": "Example",
  "number": "3.6.7",
  "title": "",
  "body": " Suppose that we wish to find the solutions of the second order equation This particular equation might model a damped harmonic oscillator. If we rewrite this second-order equation as a first-order system, we have or equivalently , where The eigenvalues of are The eigenvalue has an eigenvector respectively. Therefore, we can take to be the matrix Consequently, which is in the canonical form The general solution to is The phase portrait of is given in .      f(t,y) = (-y[0]\/2 + y[1]\/2, -y[0]\/2 - y[1]\/2)              Phase portrait for   The general solution of is The phase portrait for this system is given in .      f(t,y) = (y[1], -y[0]\/2 - y[1])              Phase portrait of   "
},
{
  "id": "linear06-subsection-complex-eigenvalues-7",
  "level": "2",
  "url": "linear06.html#linear06-subsection-complex-eigenvalues-7",
  "type": "Remark",
  "number": "3.6.10",
  "title": "",
  "body": " Of course, we have a much more efficient way of solving the system , where Since has eigenvalue with an eigenvector , we can apply Euler's formula and write the solution as Taking the real and the imaginary parts of the last expression, the general solution of is which agrees with the solution that we found by transforming coordinates.  "
},
{
  "id": "linear06-subsection-repeated-eigenvalues-3",
  "level": "2",
  "url": "linear06.html#linear06-subsection-repeated-eigenvalues-3",
  "type": "Proposition",
  "number": "3.6.11",
  "title": "",
  "body": " If has a single eigenvalue and a pair of linearly independent eigenvectors, then must be of the form    Suppose that and are linearly indeendent eigenvectors for , and let be the matrix whose first column is and second column is . That is, and . Since and are linearly independent, and is invertible. So, it must be the case that or   "
},
{
  "id": "linear06-subsection-repeated-eigenvalues-5",
  "level": "2",
  "url": "linear06.html#linear06-subsection-repeated-eigenvalues-5",
  "type": "Proposition",
  "number": "3.6.12",
  "title": "",
  "body": "  Suppose that has a single eigenvalue . If is an eigenvector for and any other eigenvector for is a multiple of , then there exists a matrix such that    If is another vector in such that and are linearly independent, then can be written as a linear combination of and , We can assume that ; otherwise, we would have a second linearly independent eigenvector. We claim that . If this were not the case, then and would be an eigenvalue distinct from . Thus, . If we will let , then We now define and . Since we have Therefore, is in canonical form after a change of coordinates.   "
},
{
  "id": "linear06-subsection-repeated-eigenvalues-6",
  "level": "2",
  "url": "linear06.html#linear06-subsection-repeated-eigenvalues-6",
  "type": "Example",
  "number": "3.6.13",
  "title": "",
  "body": " Consider the system , where The characteristic polynomial of is , we have only a single eigenvalue with eigenvector . Any other eigenvector for is a multiple of . If we choose , then and are linearly independent. Furthermore, So we can let . Therefore, the matrix that we seek is and From , we know that the general solution to the system is Therefore, the general solution to is This solution agrees with the solution that we found in .  "
},
{
  "id": "rq-linear06-change-of-coordinates",
  "level": "2",
  "url": "linear06.html#rq-linear06-change-of-coordinates",
  "type": "Reading Question",
  "number": "3.6.8.1",
  "title": "",
  "body": "  Explain what a change of coordinates is.    "
},
{
  "id": "rq-linear06-types-of-solutions",
  "level": "2",
  "url": "linear06.html#rq-linear06-types-of-solutions",
  "type": "Reading Question",
  "number": "3.6.8.2",
  "title": "",
  "body": "  Given a linear system, what are the possible types of solutions?    "
},
{
  "id": "linear06-exercises-diagonalization-3",
  "level": "2",
  "url": "linear06.html#linear06-exercises-diagonalization-3",
  "type": "Exercise",
  "number": "3.6.9.1",
  "title": "",
  "body": "    "
},
{
  "id": "linear06-exercises-diagonalization-4",
  "level": "2",
  "url": "linear06.html#linear06-exercises-diagonalization-4",
  "type": "Exercise",
  "number": "3.6.9.2",
  "title": "",
  "body": "    "
},
{
  "id": "linear06-exercises-diagonalization-5",
  "level": "2",
  "url": "linear06.html#linear06-exercises-diagonalization-5",
  "type": "Exercise",
  "number": "3.6.9.3",
  "title": "",
  "body": "    "
},
{
  "id": "linear06-exercises-diagonalization-6",
  "level": "2",
  "url": "linear06.html#linear06-exercises-diagonalization-6",
  "type": "Exercise",
  "number": "3.6.9.4",
  "title": "",
  "body": "    "
},
{
  "id": "linear06-exercises-diagonalization-7",
  "level": "2",
  "url": "linear06.html#linear06-exercises-diagonalization-7",
  "type": "Exercise",
  "number": "3.6.9.5",
  "title": "",
  "body": "    "
},
{
  "id": "linear06-exercises-diagonalization-8",
  "level": "2",
  "url": "linear06.html#linear06-exercises-diagonalization-8",
  "type": "Exercise",
  "number": "3.6.9.6",
  "title": "",
  "body": "    "
},
{
  "id": "linear06-exercises-complex-3",
  "level": "2",
  "url": "linear06.html#linear06-exercises-complex-3",
  "type": "Exercise",
  "number": "3.6.9.7",
  "title": "",
  "body": "    "
},
{
  "id": "linear06-exercises-complex-4",
  "level": "2",
  "url": "linear06.html#linear06-exercises-complex-4",
  "type": "Exercise",
  "number": "3.6.9.8",
  "title": "",
  "body": "    "
},
{
  "id": "linear06-exercises-complex-5",
  "level": "2",
  "url": "linear06.html#linear06-exercises-complex-5",
  "type": "Exercise",
  "number": "3.6.9.9",
  "title": "",
  "body": "    "
},
{
  "id": "linear06-exercises-complex-6",
  "level": "2",
  "url": "linear06.html#linear06-exercises-complex-6",
  "type": "Exercise",
  "number": "3.6.9.10",
  "title": "",
  "body": "    "
},
{
  "id": "linear06-exercises-complex-7",
  "level": "2",
  "url": "linear06.html#linear06-exercises-complex-7",
  "type": "Exercise",
  "number": "3.6.9.11",
  "title": "",
  "body": "    "
},
{
  "id": "linear06-exercises-complex-8",
  "level": "2",
  "url": "linear06.html#linear06-exercises-complex-8",
  "type": "Exercise",
  "number": "3.6.9.12",
  "title": "",
  "body": "    "
},
{
  "id": "linear06-exercises-repeated-3",
  "level": "2",
  "url": "linear06.html#linear06-exercises-repeated-3",
  "type": "Exercise",
  "number": "3.6.9.13",
  "title": "",
  "body": "    "
},
{
  "id": "linear06-exercises-repeated-4",
  "level": "2",
  "url": "linear06.html#linear06-exercises-repeated-4",
  "type": "Exercise",
  "number": "3.6.9.14",
  "title": "",
  "body": "    "
},
{
  "id": "linear06-exercises-repeated-5",
  "level": "2",
  "url": "linear06.html#linear06-exercises-repeated-5",
  "type": "Exercise",
  "number": "3.6.9.15",
  "title": "",
  "body": "    "
},
{
  "id": "linear06-exercises-repeated-6",
  "level": "2",
  "url": "linear06.html#linear06-exercises-repeated-6",
  "type": "Exercise",
  "number": "3.6.9.16",
  "title": "",
  "body": "    "
},
{
  "id": "linear06-exercises-repeated-7",
  "level": "2",
  "url": "linear06.html#linear06-exercises-repeated-7",
  "type": "Exercise",
  "number": "3.6.9.17",
  "title": "",
  "body": "    "
},
{
  "id": "linear06-exercises-repeated-8",
  "level": "2",
  "url": "linear06.html#linear06-exercises-repeated-8",
  "type": "Exercise",
  "number": "3.6.9.18",
  "title": "",
  "body": "    "
},
{
  "id": "linear07",
  "level": "1",
  "url": "linear07.html",
  "type": "Section",
  "number": "3.7",
  "title": "The Trace-Determinant Plane",
  "body": " The Trace-Determinant Plane    To understand that the characteristic polynomial of a matrix can be written as where and . Furthermore, if a matrix has eigenvalues and , then is and , and the trace and determinant of a matrix are invariant under a change of coordinates.  To understand that the trace-determinant plane is determined by the graph of the parabola on the -plane and that the trace-determinant plane can be used to determine the phase portrait of a linear system.  To understand that the trace-determinant plane is useful for studying bifurcations.     Suppose that we have two tanks, Tank and Tank , that both have a volume of liters and are both filled with a brine solution. Suppose that pure water enters Tank at a rate of liters per minute, and a salt mixture enters Tank from Tank at a rate of liters per minute. Brine also enters Tank from Tank at a rate of liters per minute. Finally, brine is drained from Tank at a rate of so that the volume in each tank is constant ( ).         Tank A        Tank B          r_A   r_B  r_\\text{in}            r_\\text{out}                 Mixing example with two tanks   If and are the amounts of salt in Tank and Tank , respectively, then our problem can be modeled with a linear system of two equations, Furthermore, , since the volume in Tank is constant. Consequently, our system now becomes If we have initial conditions and , it is not too difficult to deduce that the amount of salt in each tank will approach zero as , and we will have a stable equilibrium solution at . Determining the nature of the equilibrium solution is a more difficult question. For example, is it ever possible that the equilibrium solution is a spiral sink? One solution is provided by studying the trace-determinant plane trace-determinant plane .    The Trace-Determinant Plane  The key to solving the system is determining the eigenvalues of . To find these eigenvalues, we need to derive the characteristic polynomial of , Of course, is the determinant of . The quantity is the sum of the diagonal elements of the matrix . We call this quantity the trace matrix trace of and write . Thus, we can rewrite the characteristic polynomial as We can use the trace and determinant to establish the nature of a solution to a linear system.    If a matrix has eigenvalues and , then the trace of is and .    The proof follows from a direct computation. Indeed, we can rewrite the characteristic polynomial as The eigenvalues of are now given by Hence, and .    tells us that we can determine the determinant and trace of a matrix from its eigenvalues. Thus, we should be able to determine the phase portrait of a system by simply examining the trace and determinant of . Since the eigenvalues of are given by we can immediately see that the expression determines the nature of the eigenvalues of .  If , we have two distinct real eigenvalues.  If , we have two complex eigenvalues, and these eigenvalues are complex conjugates.  If , we have repeated eigenvalues.  If or equivalently if , we have repeated eigenvalues. In fact, we can represent those systems with repeated eigenvalues by graphing the parabola on the -plane or trace-determinant plane ( ). Therefore, points on the parabola correspond to systems with repeated eigenvalues, points above the parabola ( or equivalently ) correspond to systems with complex eigenvalues, and points below the parabola ( or equivalently ) correspond to systems with real eigenvalues.        T  D   f(x)=x^2\/4    Complex Eigenvalues    Distinct Real Eigenvalues    Repeated Eigenvalues    D = T^2\/4        The trace-determinant plane     The trace and determinant of a matrix are invariant under a change of coordinates. That is, and for any matrix and any invertible matrix .    It is straightforward to verify that and for matrices and . Therefore, A direct computation shows that . Thus,    Furthermore, the expression is not affected by a change of coordinates by . That is, we only need to consider systems , where is one of the following matrices:  The system has eigenvalues . The general solution to this system is The factor tells us that the solutions either spiral into the origin if , spiral out to infinity if , or stay in a closed orbit if . The equilibrium points are spiral sinks equilibrium solution spiral sink and spiral sources equilibrium solution spiral source , or centers equilibrium solution center , respectively.  The eigenvalues of are given by If , then we have a complex eigenvalues, and the type of equilibrium point depends on the real part of the eigenvalue. The sign of the real part is determined solely by . If we have a source. If , we have a sink. If , we have a center. See .        T  D   f(x)=x^2\/4    Center    Spiral Source    Spiral Sink    D = T^2\/4          The situation for distinct real eigenvalues is a bit more complicated. Suppose that we have a system with distinct eigenvalues and . We will have three cases to consider if none of our eigenvalues are zero:  Both eigenvalues are positive (source).  Both eigenvalues are negative (sink).  One eigenvalue is negative and the other is positive (saddle).  Our two eigenvalues are given by  If , then the eigenvalue is positive and we need only determine the sign of the second eigenvalue If , we have one positive and one zero eigenvalue. That is, we have a saddle equilibrium solution saddle if and .  If , then Since we are considering the case , we have and the value of the second eigenvalue is postive. Therefore, any point in the first quadrant below the parabola corresponds to a system with two positive eigenvalues and must correspond to a nodal source equilibrium solution nodal source .  One the other hand, suppose that . Then the eigenvalue is always negative, and we need to determine if other eigenvalue is positive or negative. If , then and . Therefore, the other eigenvalue is positive, telling us that any point in the fourth quadrant must correspond to a saddle. If , then and the second eigenvalue is negative. In this case, we will have a nodal sink equilibrium solution nodal sink . We summarize our findings in .        T  D   f(x)=x^2\/4    Center    Spiral Source    Spiral Sink    Saddle    Nodal Source    Nodal Sink    D = T^2\/4        The trace-determinant plane for real and complex eigenvalues   For repeated eigenvalues, the analysis depends only on . Since the only eigenvalue is . Thus, we have sources if and sinks if ( ).        T  D   f(x)=x^2\/4    Center    Spiral Source    Spiral Sink    Saddle    Nodal Source    Nodal Sink    D = T^2\/4    Source (unstable line)    Sink (stable line)           Let us return to the mixing problem that we proposed at the beginning of this section. The problem could be modeled by the system of equations The matrix corresponding to this system is Computing the trace and determinant of the matrix yields and , where and are both positive. Certainly, and Therefore, any solution must be stable. Finally, since we are below the parabola in the trace-determinant plane and know that our solution must be a nodal sink.     Parameterized Families of Linear Systems  The trace-determinant plane is an example of a parameter plane parameter plane . We can adjust the entries of a matrix and, thus, change the value of the trace and the determinant.  Recall that a harmonic oscillator can be modeled by the second-order equation where is the mass, is the damping coefficient, and is the spring constant. If we rewrite this equation as a first-order system, we have Thus, for the harmonic oscillator and . If we use the trace-determinant plane to analyze the harmonic oscillator, we need only concern ourselves with the second quadrant (Figure ).        T  D   f(x)=x^2\/4    Undamped    Under Damped    Over Damped    D = T^2\/4    Critically Damped        A one-parameter family for a harmonic oscillator   If lies above the parabola, we have an underdamped oscillator. If lies below the parabola, we have an overdamped oscillator. If lies on the parabola, we have a critically damped oscillator. If , we have an undamped oscillator.   Now let us see what happens to our harmonic oscillator when we fix and and let the damping vary between zero and infinity. We can rewrite our system as Thus, and . We can see how the phase portrait varies with the parameter in Figure .        T  D   f(x)=x^2\/4    Undamped    Under Dampled    Over Damped    D = T^2\/4    Critically Damped      3        The trace-determinant plane for varying damping   The line in the trace-determinant plane crosses the repeated eigenvalue parabola, if or when . If , we have purely imaginary eigenvalues. This is the undamped harmonic oscillator. If , the eigenvalues are complex with a nonzero real part the underdamped case. If , the eigenvalues are negative and repeated the critically damped case. Finally, if , we have the overdamped case. In this case, the eigenvalues are real, distinct, and negative. A bifurcation occurs at .    Harmonic Oscillator with a Varying Spring Constant   Consider a harmonic oscillator modeled by the second-order equation where is the mass, is the damping coefficient, and is the spring constant.     Rewrite as a system of first-order differential equations, .      Calculate the trace and determinant of .      Sketch a line in the trace-determinant plane that parameterizes the family of equations .      For what values of is the harmonic oscillator underdamped? Overdamped? For what value of do we have a bifurcation?      Consider the system The trace of is always , but . We are on the parabola if Thus, a bifurcation occurs at . If , we have a spiral sink. If , we have a sink with real eigenvalues. Further more, if , our sink becomes a saddle ( ).        T  D   f(x)=x^2\/4    Center    Spiral Sink    Saddle    Nodal Sink    D = T^2\/4    Sink (stable line)     -2        A one-parameter family of linear systems     Parameterized Families of Linear Systems   Consider the parameterized system of linear differential equations , where     Find the trace, , and determinant, , of .      Calculate .      For what values of and is the origin a spiral sink of ? A spiral source? A center?      For what values of and is the origin a nodal sink of ? A nodal source? A saddle?      Identify all of the regions in the -plane where the system possesses a saddle, a sink, a spiral sink, and so on. Plot your results on the -plane.      Although the trace-determinant plane gives us a great deal of information about our system, we can not determine everything from this parameter plane. For example, the matrices both have the same trace and determinant, but the solutions to wind around the origin in a clockwise direction while those of wind around in a counterclockwise direction.     Important Lessons   The characteristic polynomial of a matrix can be written as where and .  If a matrix has eigenvalues and , then is and .  The trace and determinant of a matrix are invariant under a change of coordinates.  The trace-determinant plane is separated by the graph of the parabola on the -plane. Points on the trace-determinant plane correspond to the trace and determinant of a linear system . Since the trace and the determinant of a matrix determine the eigenvalues of , we can use the trace-determinant plane to parameterize the phase portraits of linear systems.  The trace-determinant plane is useful for studying bifurcations.       What is the trace of a matrix?       Explain what information the trace-determinant plane provides about a linear system.       Exercises   Classifiying Equilibrium Points  Classify the equilibrium points of the system based on the position of in the trace-determinant plane in . Sketch the phase portrait by hand and then use Sage to verify your result.                                            One-Parameter Families and Bifurcations  Each of the following matrices in describes a family of differential equations that depends on the parameter . For each one-parameter family sketch the curve in the trace-determinant plane determined by . Identify any values of where the type of system changes. These values are bifurcation values bifurcation value of .                                   Consider the two-parameter family of linear systems Identify all of the regions in the -plane where this system possesses a saddle, a sink, a spiral sink, and so on.      Consider the two-parameter family of linear systems Identify all of the regions in the -plane where this system possesses a saddle, a sink, a spiral sink, and so on.      Consider the two-parameter family of linear systems Identify all of the regions in the -plane where this system possesses a saddle, a sink, a spiral sink, and so on.     "
},
{
  "id": "linear07-2",
  "level": "2",
  "url": "linear07.html#linear07-2",
  "type": "Objectives",
  "number": "3.7",
  "title": "",
  "body": "  To understand that the characteristic polynomial of a matrix can be written as where and . Furthermore, if a matrix has eigenvalues and , then is and , and the trace and determinant of a matrix are invariant under a change of coordinates.  To understand that the trace-determinant plane is determined by the graph of the parabola on the -plane and that the trace-determinant plane can be used to determine the phase portrait of a linear system.  To understand that the trace-determinant plane is useful for studying bifurcations.   "
},
{
  "id": "linear07-figure-mixing-example-trace-determinant",
  "level": "2",
  "url": "linear07.html#linear07-figure-mixing-example-trace-determinant",
  "type": "Figure",
  "number": "3.7.1",
  "title": "",
  "body": "      Tank A        Tank B          r_A   r_B  r_\\text{in}            r_\\text{out}                 Mixing example with two tanks  "
},
{
  "id": "linear07-3-3",
  "level": "2",
  "url": "linear07.html#linear07-3-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "trace-determinant plane "
},
{
  "id": "linear07-subsection-trace-determinant-2",
  "level": "2",
  "url": "linear07.html#linear07-subsection-trace-determinant-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "trace "
},
{
  "id": "linear07-theorem-trace-determinant",
  "level": "2",
  "url": "linear07.html#linear07-theorem-trace-determinant",
  "type": "Theorem",
  "number": "3.7.2",
  "title": "",
  "body": "  If a matrix has eigenvalues and , then the trace of is and .    The proof follows from a direct computation. Indeed, we can rewrite the characteristic polynomial as The eigenvalues of are now given by Hence, and .   "
},
{
  "id": "linear07-subsection-trace-determinant-4",
  "level": "2",
  "url": "linear07.html#linear07-subsection-trace-determinant-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "trace-determinant plane "
},
{
  "id": "linear07-figure-trace-determinant-plane",
  "level": "2",
  "url": "linear07.html#linear07-figure-trace-determinant-plane",
  "type": "Figure",
  "number": "3.7.3",
  "title": "",
  "body": "      T  D   f(x)=x^2\/4    Complex Eigenvalues    Distinct Real Eigenvalues    Repeated Eigenvalues    D = T^2\/4        The trace-determinant plane  "
},
{
  "id": "linear07-theorem-trace-determinant-coordinates",
  "level": "2",
  "url": "linear07.html#linear07-theorem-trace-determinant-coordinates",
  "type": "Theorem",
  "number": "3.7.4",
  "title": "",
  "body": "  The trace and determinant of a matrix are invariant under a change of coordinates. That is, and for any matrix and any invertible matrix .    It is straightforward to verify that and for matrices and . Therefore, A direct computation shows that . Thus,   "
},
{
  "id": "linear07-subsection-trace-determinant-8",
  "level": "2",
  "url": "linear07.html#linear07-subsection-trace-determinant-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "spiral sinks spiral sources centers "
},
{
  "id": "linear07-figure-trace-determinant-complex",
  "level": "2",
  "url": "linear07.html#linear07-figure-trace-determinant-complex",
  "type": "Figure",
  "number": "3.7.5",
  "title": "",
  "body": "      T  D   f(x)=x^2\/4    Center    Spiral Source    Spiral Sink    D = T^2\/4         "
},
{
  "id": "linear07-subsection-trace-determinant-12",
  "level": "2",
  "url": "linear07.html#linear07-subsection-trace-determinant-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "saddle "
},
{
  "id": "linear07-subsection-trace-determinant-13",
  "level": "2",
  "url": "linear07.html#linear07-subsection-trace-determinant-13",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "nodal source "
},
{
  "id": "linear07-subsection-trace-determinant-14",
  "level": "2",
  "url": "linear07.html#linear07-subsection-trace-determinant-14",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "nodal sink "
},
{
  "id": "linear07-figure-trace-determinant-real",
  "level": "2",
  "url": "linear07.html#linear07-figure-trace-determinant-real",
  "type": "Figure",
  "number": "3.7.6",
  "title": "",
  "body": "      T  D   f(x)=x^2\/4    Center    Spiral Source    Spiral Sink    Saddle    Nodal Source    Nodal Sink    D = T^2\/4        The trace-determinant plane for real and complex eigenvalues  "
},
{
  "id": "linear07-figure-trace-determinant-repeated",
  "level": "2",
  "url": "linear07.html#linear07-figure-trace-determinant-repeated",
  "type": "Figure",
  "number": "3.7.7",
  "title": "",
  "body": "      T  D   f(x)=x^2\/4    Center    Spiral Source    Spiral Sink    Saddle    Nodal Source    Nodal Sink    D = T^2\/4    Source (unstable line)    Sink (stable line)         "
},
{
  "id": "linear07-subsection-trace-determinant-18",
  "level": "2",
  "url": "linear07.html#linear07-subsection-trace-determinant-18",
  "type": "Example",
  "number": "3.7.8",
  "title": "",
  "body": " Let us return to the mixing problem that we proposed at the beginning of this section. The problem could be modeled by the system of equations The matrix corresponding to this system is Computing the trace and determinant of the matrix yields and , where and are both positive. Certainly, and Therefore, any solution must be stable. Finally, since we are below the parabola in the trace-determinant plane and know that our solution must be a nodal sink.  "
},
{
  "id": "linear07-subsection-parameterized-families-2",
  "level": "2",
  "url": "linear07.html#linear07-subsection-parameterized-families-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "parameter plane "
},
{
  "id": "linear07-figure-one-parameter-harmonic",
  "level": "2",
  "url": "linear07.html#linear07-figure-one-parameter-harmonic",
  "type": "Figure",
  "number": "3.7.9",
  "title": "",
  "body": "      T  D   f(x)=x^2\/4    Undamped    Under Damped    Over Damped    D = T^2\/4    Critically Damped        A one-parameter family for a harmonic oscillator  "
},
{
  "id": "linear07-subsection-parameterized-families-6",
  "level": "2",
  "url": "linear07.html#linear07-subsection-parameterized-families-6",
  "type": "Example",
  "number": "3.7.10",
  "title": "",
  "body": " Now let us see what happens to our harmonic oscillator when we fix and and let the damping vary between zero and infinity. We can rewrite our system as Thus, and . We can see how the phase portrait varies with the parameter in Figure .        T  D   f(x)=x^2\/4    Undamped    Under Dampled    Over Damped    D = T^2\/4    Critically Damped      3        The trace-determinant plane for varying damping   The line in the trace-determinant plane crosses the repeated eigenvalue parabola, if or when . If , we have purely imaginary eigenvalues. This is the undamped harmonic oscillator. If , the eigenvalues are complex with a nonzero real part the underdamped case. If , the eigenvalues are negative and repeated the critically damped case. Finally, if , we have the overdamped case. In this case, the eigenvalues are real, distinct, and negative. A bifurcation occurs at .  "
},
{
  "id": "linear07-subsection-parameterized-families-7",
  "level": "2",
  "url": "linear07.html#linear07-subsection-parameterized-families-7",
  "type": "Activity",
  "number": "3.7.1",
  "title": "Harmonic Oscillator with a Varying Spring Constant.",
  "body": " Harmonic Oscillator with a Varying Spring Constant   Consider a harmonic oscillator modeled by the second-order equation where is the mass, is the damping coefficient, and is the spring constant.     Rewrite as a system of first-order differential equations, .      Calculate the trace and determinant of .      Sketch a line in the trace-determinant plane that parameterizes the family of equations .      For what values of is the harmonic oscillator underdamped? Overdamped? For what value of do we have a bifurcation?    "
},
{
  "id": "linear07-subsection-parameterized-families-8",
  "level": "2",
  "url": "linear07.html#linear07-subsection-parameterized-families-8",
  "type": "Example",
  "number": "3.7.12",
  "title": "",
  "body": " Consider the system The trace of is always , but . We are on the parabola if Thus, a bifurcation occurs at . If , we have a spiral sink. If , we have a sink with real eigenvalues. Further more, if , our sink becomes a saddle ( ).        T  D   f(x)=x^2\/4    Center    Spiral Sink    Saddle    Nodal Sink    D = T^2\/4    Sink (stable line)     -2        A one-parameter family of linear systems   "
},
{
  "id": "linear07-subsection-parameterized-families-9",
  "level": "2",
  "url": "linear07.html#linear07-subsection-parameterized-families-9",
  "type": "Activity",
  "number": "3.7.2",
  "title": "Parameterized Families of Linear Systems.",
  "body": " Parameterized Families of Linear Systems   Consider the parameterized system of linear differential equations , where     Find the trace, , and determinant, , of .      Calculate .      For what values of and is the origin a spiral sink of ? A spiral source? A center?      For what values of and is the origin a nodal sink of ? A nodal source? A saddle?      Identify all of the regions in the -plane where the system possesses a saddle, a sink, a spiral sink, and so on. Plot your results on the -plane.    "
},
{
  "id": "linear07-subsection-parameterized-families-10",
  "level": "2",
  "url": "linear07.html#linear07-subsection-parameterized-families-10",
  "type": "Example",
  "number": "3.7.14",
  "title": "",
  "body": " Although the trace-determinant plane gives us a great deal of information about our system, we can not determine everything from this parameter plane. For example, the matrices both have the same trace and determinant, but the solutions to wind around the origin in a clockwise direction while those of wind around in a counterclockwise direction.  "
},
{
  "id": "rq-linear07-matrix-trace",
  "level": "2",
  "url": "linear07.html#rq-linear07-matrix-trace",
  "type": "Reading Question",
  "number": "3.7.4.1",
  "title": "",
  "body": "  What is the trace of a matrix?    "
},
{
  "id": "rq-linear07-trace-determinant-plane",
  "level": "2",
  "url": "linear07.html#rq-linear07-trace-determinant-plane",
  "type": "Reading Question",
  "number": "3.7.4.2",
  "title": "",
  "body": "  Explain what information the trace-determinant plane provides about a linear system.    "
},
{
  "id": "linear07-exercises-trace-determinant-3",
  "level": "2",
  "url": "linear07.html#linear07-exercises-trace-determinant-3",
  "type": "Exercise",
  "number": "3.7.5.1",
  "title": "",
  "body": "    "
},
{
  "id": "linear07-exercises-trace-determinant-4",
  "level": "2",
  "url": "linear07.html#linear07-exercises-trace-determinant-4",
  "type": "Exercise",
  "number": "3.7.5.2",
  "title": "",
  "body": "    "
},
{
  "id": "linear07-exercises-trace-determinant-5",
  "level": "2",
  "url": "linear07.html#linear07-exercises-trace-determinant-5",
  "type": "Exercise",
  "number": "3.7.5.3",
  "title": "",
  "body": "    "
},
{
  "id": "linear07-exercises-trace-determinant-6",
  "level": "2",
  "url": "linear07.html#linear07-exercises-trace-determinant-6",
  "type": "Exercise",
  "number": "3.7.5.4",
  "title": "",
  "body": "    "
},
{
  "id": "linear07-exercises-trace-determinant-7",
  "level": "2",
  "url": "linear07.html#linear07-exercises-trace-determinant-7",
  "type": "Exercise",
  "number": "3.7.5.5",
  "title": "",
  "body": "    "
},
{
  "id": "linear07-exercises-trace-determinant-8",
  "level": "2",
  "url": "linear07.html#linear07-exercises-trace-determinant-8",
  "type": "Exercise",
  "number": "3.7.5.6",
  "title": "",
  "body": "    "
},
{
  "id": "linear07-exercises-trace-determinant-9",
  "level": "2",
  "url": "linear07.html#linear07-exercises-trace-determinant-9",
  "type": "Exercise",
  "number": "3.7.5.7",
  "title": "",
  "body": "    "
},
{
  "id": "linear07-exercises-trace-determinant-10",
  "level": "2",
  "url": "linear07.html#linear07-exercises-trace-determinant-10",
  "type": "Exercise",
  "number": "3.7.5.8",
  "title": "",
  "body": "    "
},
{
  "id": "linear07-exercises-bifurcation-2-1",
  "level": "2",
  "url": "linear07.html#linear07-exercises-bifurcation-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "bifurcation values "
},
{
  "id": "linear07-exercises-bifurcation-3",
  "level": "2",
  "url": "linear07.html#linear07-exercises-bifurcation-3",
  "type": "Exercise",
  "number": "3.7.5.9",
  "title": "",
  "body": "    "
},
{
  "id": "linear07-exercises-bifurcation-4",
  "level": "2",
  "url": "linear07.html#linear07-exercises-bifurcation-4",
  "type": "Exercise",
  "number": "3.7.5.10",
  "title": "",
  "body": "    "
},
{
  "id": "linear07-exercises-bifurcation-5",
  "level": "2",
  "url": "linear07.html#linear07-exercises-bifurcation-5",
  "type": "Exercise",
  "number": "3.7.5.11",
  "title": "",
  "body": "    "
},
{
  "id": "linear07-exercises-bifurcation-6",
  "level": "2",
  "url": "linear07.html#linear07-exercises-bifurcation-6",
  "type": "Exercise",
  "number": "3.7.5.12",
  "title": "",
  "body": "    "
},
{
  "id": "linear07-exercises-bifurcation-7",
  "level": "2",
  "url": "linear07.html#linear07-exercises-bifurcation-7",
  "type": "Exercise",
  "number": "3.7.5.13",
  "title": "",
  "body": "    "
},
{
  "id": "linear07-exercises-bifurcation-8",
  "level": "2",
  "url": "linear07.html#linear07-exercises-bifurcation-8",
  "type": "Exercise",
  "number": "3.7.5.14",
  "title": "",
  "body": "    "
},
{
  "id": "linear07-exercises-4",
  "level": "2",
  "url": "linear07.html#linear07-exercises-4",
  "type": "Exercise",
  "number": "3.7.5.15",
  "title": "",
  "body": "  Consider the two-parameter family of linear systems Identify all of the regions in the -plane where this system possesses a saddle, a sink, a spiral sink, and so on.   "
},
{
  "id": "linear07-exercises-5",
  "level": "2",
  "url": "linear07.html#linear07-exercises-5",
  "type": "Exercise",
  "number": "3.7.5.16",
  "title": "",
  "body": "  Consider the two-parameter family of linear systems Identify all of the regions in the -plane where this system possesses a saddle, a sink, a spiral sink, and so on.   "
},
{
  "id": "linear07-exercises-6",
  "level": "2",
  "url": "linear07.html#linear07-exercises-6",
  "type": "Exercise",
  "number": "3.7.5.17",
  "title": "",
  "body": "  Consider the two-parameter family of linear systems Identify all of the regions in the -plane where this system possesses a saddle, a sink, a spiral sink, and so on.   "
},
{
  "id": "linear08",
  "level": "1",
  "url": "linear08.html",
  "type": "Section",
  "number": "3.8",
  "title": "Linear Systems in Higher Dimensions",
  "body": " Linear Systems in Higher Dimensions    To understand we can solve the system by finding eigenvalues and eigenvectors for , where is an matrix.  To understand that the Principle of Superposition holds for higher-order systems.  To understand that the geometry of a system in is characterized by stable lines and stable planes.     Suppose that we have two masses on a table, and , connected by three springs with the outside springs connected to two walls ( ), and the masses are free to move horizontally. We will assume that the springs are uniform and all have the same spring constant . The horizontal displacements of the springs are denoted by and for the masses and , respectively. Assuming that there is no damping, the only forces acting on mass at time are those of left and middle springs. The force from the left spring will be while the force from middle spring will be . By Newton's Second Law of motion, we have Similarly, the only forces acting on the second mass, , will come from middle and right springs. Again using Newton's Second Law,                       \\text{wall}  \\text{wall}  m_1  m_2  x_1 = 0  x_2 = 0   x_1   x_2       A double spring-mass system   We now have a system of two second-order linear equations If we define and by and , we now have first-order linear system of four equations, We can represent this system in the matrix form , where We will learn how to analyze and solve such systems in the next two sections.    Higher-Order Linear Systems  We can write the system in matrix form , where  The strategy for finding solutions to the system is the same as for systems of two equations. If is an eigenvalue of with eigenvector , is a solution for our system. Indeed,   The system can be rewritten as We can compute the eigenvalues of by finding the roots of its characteristic polynomial Thus, the eigenvalues of are , , and . To find an eigenvector for , we must find a nontrivial solution for system of equations , It is easy to check that is a solution. Similarly, we can determine that is an eigenvector for and is an eigenvector for . Thus, we have found three solutions for the system ,  The Principle of Superposition also holds for higher-order systems. If and are solutions for , then is a solution for the system, since Consequently, is a solution for our system. This is, in fact, the general solution for the system.   Although we shall not cover the notions of linear independence, canonical matrices, and change of coordinates for , the same ideas that we used for systems of first-order linear differential equations in carry over to . The necessary linear algebra is covered in any good linear algebra course. Also, see Chapters 5 and 6 in . In addition, finding eigenvalues for matrices greater than , we will need to find the roots of a characteristic polynomial of degree greater than two, which can be difficult. A good course in linear algebra will cover techniques of finding eigenvalues for larger matrices.   Let us see how the linear algebra works in the previous example. If we form the matrix from the eigenvectors of , we can convert the system to the system which we can immediately solve: Multiplying our solution by yields the general solution the solution to the system .     The Geometry of Solutions  In , we classified all of the geometry of the solutions for planar systems using the trace-determinant plane. The geometry for linear systems in three variables is a bit more complicated. For a system our solution curves live in , and there is simply a lot more room to move around in three dimensions than in two dimensions. The origin is still an equilibrium solution for a system of linear differential equations in three variables. The origin is a stable equilibrium solution stable equilibrium solution if any solution approaches as ; otherwise, is an unstable equilibrium solution unstable equilibrium solution. In the case of planar systems, an unstable solution is a nodal saddle, a nodal source, a spiral source, or a source with a single unstable line. In the case of , we could have a stable line equilibrium solution stable line of solutions and an unstable plane equilibrium solution unstable plane of solutions. In this case, all solutions of the system with initial condition lying on the stable line would approach the origin as , but all solutions with initial conditions that are a nonzero point on the unstable plane would move away from the origin.   In , we had solutions The straight line through the origin and the point is a stable line. That is, for any initial condition lying on this line, our solution will tend toward the origin as . On the other hand, the plane spanned by and is unstable plane. Solutions on this plane move away from the origin as . Of course, is an equlibrium solution for our system. We say that the origin is a saddle equilibrium solution saddle in this example ( ).    a stable line and an unstable plane in three dimensions with a transformation to another unstable plane and stable line    A saddle in     For the system we have a very different type of unstable equilibrium solution. The eigenvalues of this matrix are and . Thus, a solution satisfying the initial condition is given by If , then our initial condition is in the -plane and all of the solutions lie on circles centered at the origin. On the other hand, if and , we have a stable line of solutions lying along the -axis. In fact, each solution that does not lie on the stable line lies on a cylinder in given by for some constant . These solutions spiral towards the circular solution of radius in the -plane if ( ).   A spiral center in         For an example of a stable plane and an unstable line, let us consider the system The characteristic equation of the matrix is Thus, the eigenvalues of are and . Solving gives us an eigenvector for . Since we will let and . Since is an eigenvector for , our system has solution where . If , our initial condition lies in the -plane and solution curves spiral in towards the origin. Thus, we have a stable plane. On the other hand, if and but , then our solution approaches as . In this case, the -axis is an unstable line ( ).    A spiral saddle in       For an example of a stable equilibrium solution at the origin, consider the system where . For an initial condition with at least one coordinate nonzero, the corresponding solution tends towards the origin tangentially to the -axis as ( ).        A sink in   Changing the system that in Example to be we obtain the solution satisfying the initial condition to be where . In this case, all solutions will approach the origin as .   Solving Higher Order Systems    Find the eigenvalues of . You may find Sage useful.  Find the eigenvectors for each eigenvalue of .  What is the general solution of ?  Describe the nature of the nature of the solution space in . Are there stable lines or planes?                      The Double Spring-Mass Systems Revisited  Let us return to our spring-mass system , where To keep matters simple, we will assume that . Thus, our matrix now becomes The characteristic polynomial of is Thus, the eigenvalues of are and . We can find eigenvectors corresponding to the eigenvalues , , , , respectively. Consequently, the general solution to our system is however, this form of the solution is not very useful. By examining real and imaginary parts of and , we can rewrite the solution as If we have the following initial conditions, we can determine and . Thus, the solution to our initial value problem is and the two masses will oscillate with a frequency of one and an amplitude of two. We leave the details as an exercise.    Important Lessons   can be written in matrix form , where  As in the case of , we can solve the system by finding eigenvalues and eigenvectors for .  The Principle of Superposition holds for higher-order systems. If and are solutions for , then is a solution for the system.  The geometry for a system in is more complicated than the planar case. However, the solutions are usually characterized by stable lines or stable planes.       Is it possible for a to have a line of stable solutions and a plane of unstable solutions? Explain.       Exercises   Finding Solutions of Systems  For each of the linear systems in   Find the eigenvalues of . You may find Sage useful.  Find the eigenvectors for each eigenvalue of .  What is the general solution of ?  Describe the nature of the nature of the solution space in . Are there stable lines or planes?                                             Solving Initial-Value Problems Systems  Solve each of initial-value problems in                                            "
},
{
  "id": "linear08-2",
  "level": "2",
  "url": "linear08.html#linear08-2",
  "type": "Objectives",
  "number": "3.8",
  "title": "",
  "body": "  To understand we can solve the system by finding eigenvalues and eigenvectors for , where is an matrix.  To understand that the Principle of Superposition holds for higher-order systems.  To understand that the geometry of a system in is characterized by stable lines and stable planes.   "
},
{
  "id": "linear08-figure-double-spring-mass-system",
  "level": "2",
  "url": "linear08.html#linear08-figure-double-spring-mass-system",
  "type": "Figure",
  "number": "3.8.1",
  "title": "",
  "body": "                     \\text{wall}  \\text{wall}  m_1  m_2  x_1 = 0  x_2 = 0   x_1   x_2       A double spring-mass system  "
},
{
  "id": "linear08-example-saddle",
  "level": "2",
  "url": "linear08.html#linear08-example-saddle",
  "type": "Example",
  "number": "3.8.2",
  "title": "",
  "body": " The system can be rewritten as We can compute the eigenvalues of by finding the roots of its characteristic polynomial Thus, the eigenvalues of are , , and . To find an eigenvector for , we must find a nontrivial solution for system of equations , It is easy to check that is a solution. Similarly, we can determine that is an eigenvector for and is an eigenvector for . Thus, we have found three solutions for the system ,  The Principle of Superposition also holds for higher-order systems. If and are solutions for , then is a solution for the system, since Consequently, is a solution for our system. This is, in fact, the general solution for the system.  "
},
{
  "id": "linear08-subsection-higher-order-systems-6",
  "level": "2",
  "url": "linear08.html#linear08-subsection-higher-order-systems-6",
  "type": "Example",
  "number": "3.8.3",
  "title": "",
  "body": " Let us see how the linear algebra works in the previous example. If we form the matrix from the eigenvectors of , we can convert the system to the system which we can immediately solve: Multiplying our solution by yields the general solution the solution to the system .  "
},
{
  "id": "linear08-subsection-geometry-2",
  "level": "2",
  "url": "linear08.html#linear08-subsection-geometry-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "stable unstable stable line unstable plane "
},
{
  "id": "linear08-subsection-geometry-3",
  "level": "2",
  "url": "linear08.html#linear08-subsection-geometry-3",
  "type": "Example",
  "number": "3.8.4",
  "title": "",
  "body": " In , we had solutions The straight line through the origin and the point is a stable line. That is, for any initial condition lying on this line, our solution will tend toward the origin as . On the other hand, the plane spanned by and is unstable plane. Solutions on this plane move away from the origin as . Of course, is an equlibrium solution for our system. We say that the origin is a saddle equilibrium solution saddle in this example ( ).    a stable line and an unstable plane in three dimensions with a transformation to another unstable plane and stable line    A saddle in   "
},
{
  "id": "linear08-subsection-geometry-4",
  "level": "2",
  "url": "linear08.html#linear08-subsection-geometry-4",
  "type": "Example",
  "number": "3.8.6",
  "title": "",
  "body": " For the system we have a very different type of unstable equilibrium solution. The eigenvalues of this matrix are and . Thus, a solution satisfying the initial condition is given by If , then our initial condition is in the -plane and all of the solutions lie on circles centered at the origin. On the other hand, if and , we have a stable line of solutions lying along the -axis. In fact, each solution that does not lie on the stable line lies on a cylinder in given by for some constant . These solutions spiral towards the circular solution of radius in the -plane if ( ).   A spiral center in       "
},
{
  "id": "linear08-example-spiral-saddle-r3",
  "level": "2",
  "url": "linear08.html#linear08-example-spiral-saddle-r3",
  "type": "Example",
  "number": "3.8.8",
  "title": "",
  "body": " For an example of a stable plane and an unstable line, let us consider the system The characteristic equation of the matrix is Thus, the eigenvalues of are and . Solving gives us an eigenvector for . Since we will let and . Since is an eigenvector for , our system has solution where . If , our initial condition lies in the -plane and solution curves spiral in towards the origin. Thus, we have a stable plane. On the other hand, if and but , then our solution approaches as . In this case, the -axis is an unstable line ( ).    A spiral saddle in      "
},
{
  "id": "linear08-figure-sink-r3",
  "level": "2",
  "url": "linear08.html#linear08-figure-sink-r3",
  "type": "Figure",
  "number": "3.8.10",
  "title": "",
  "body": "     A sink in  "
},
{
  "id": "linear08-subsection-geometry-9",
  "level": "2",
  "url": "linear08.html#linear08-subsection-geometry-9",
  "type": "Activity",
  "number": "3.8.1",
  "title": "Solving Higher Order Systems.",
  "body": " Solving Higher Order Systems    Find the eigenvalues of . You may find Sage useful.  Find the eigenvectors for each eigenvalue of .  What is the general solution of ?  Describe the nature of the nature of the solution space in . Are there stable lines or planes?                   "
},
{
  "id": "rq-linear08-stable-line",
  "level": "2",
  "url": "linear08.html#rq-linear08-stable-line",
  "type": "Reading Question",
  "number": "3.8.5.1",
  "title": "",
  "body": "  Is it possible for a to have a line of stable solutions and a plane of unstable solutions? Explain.    "
},
{
  "id": "linear08-exercises-solving-linear-systems-3",
  "level": "2",
  "url": "linear08.html#linear08-exercises-solving-linear-systems-3",
  "type": "Exercise",
  "number": "3.8.6.1",
  "title": "",
  "body": "    "
},
{
  "id": "linear08-exercises-solving-linear-systems-4",
  "level": "2",
  "url": "linear08.html#linear08-exercises-solving-linear-systems-4",
  "type": "Exercise",
  "number": "3.8.6.2",
  "title": "",
  "body": "    "
},
{
  "id": "linear08-exercises-solving-linear-systems-5",
  "level": "2",
  "url": "linear08.html#linear08-exercises-solving-linear-systems-5",
  "type": "Exercise",
  "number": "3.8.6.3",
  "title": "",
  "body": "    "
},
{
  "id": "linear08-exercises-solving-linear-systems-6",
  "level": "2",
  "url": "linear08.html#linear08-exercises-solving-linear-systems-6",
  "type": "Exercise",
  "number": "3.8.6.4",
  "title": "",
  "body": "    "
},
{
  "id": "linear08-exercises-solving-linear-systems-7",
  "level": "2",
  "url": "linear08.html#linear08-exercises-solving-linear-systems-7",
  "type": "Exercise",
  "number": "3.8.6.5",
  "title": "",
  "body": "    "
},
{
  "id": "linear08-exercises-solving-linear-systems-8",
  "level": "2",
  "url": "linear08.html#linear08-exercises-solving-linear-systems-8",
  "type": "Exercise",
  "number": "3.8.6.6",
  "title": "",
  "body": "    "
},
{
  "id": "linear08-exercises-solving-linear-systems-9",
  "level": "2",
  "url": "linear08.html#linear08-exercises-solving-linear-systems-9",
  "type": "Exercise",
  "number": "3.8.6.7",
  "title": "",
  "body": "    "
},
{
  "id": "linear08-exercises-solving-linear-systems-10",
  "level": "2",
  "url": "linear08.html#linear08-exercises-solving-linear-systems-10",
  "type": "Exercise",
  "number": "3.8.6.8",
  "title": "",
  "body": "    "
},
{
  "id": "linear08-exercises-solving-ivps-3",
  "level": "2",
  "url": "linear08.html#linear08-exercises-solving-ivps-3",
  "type": "Exercise",
  "number": "3.8.6.9",
  "title": "",
  "body": "    "
},
{
  "id": "linear08-exercises-solving-ivps-4",
  "level": "2",
  "url": "linear08.html#linear08-exercises-solving-ivps-4",
  "type": "Exercise",
  "number": "3.8.6.10",
  "title": "",
  "body": "    "
},
{
  "id": "linear08-exercises-solving-ivps-5",
  "level": "2",
  "url": "linear08.html#linear08-exercises-solving-ivps-5",
  "type": "Exercise",
  "number": "3.8.6.11",
  "title": "",
  "body": "    "
},
{
  "id": "linear08-exercises-solving-ivps-6",
  "level": "2",
  "url": "linear08.html#linear08-exercises-solving-ivps-6",
  "type": "Exercise",
  "number": "3.8.6.12",
  "title": "",
  "body": "    "
},
{
  "id": "linear08-exercises-solving-ivps-7",
  "level": "2",
  "url": "linear08.html#linear08-exercises-solving-ivps-7",
  "type": "Exercise",
  "number": "3.8.6.13",
  "title": "",
  "body": "    "
},
{
  "id": "linear08-exercises-solving-ivps-8",
  "level": "2",
  "url": "linear08.html#linear08-exercises-solving-ivps-8",
  "type": "Exercise",
  "number": "3.8.6.14",
  "title": "",
  "body": "    "
},
{
  "id": "linear08-exercises-solving-ivps-9",
  "level": "2",
  "url": "linear08.html#linear08-exercises-solving-ivps-9",
  "type": "Exercise",
  "number": "3.8.6.15",
  "title": "",
  "body": "    "
},
{
  "id": "linear08-exercises-solving-ivps-10",
  "level": "2",
  "url": "linear08.html#linear08-exercises-solving-ivps-10",
  "type": "Exercise",
  "number": "3.8.6.16",
  "title": "",
  "body": "    "
},
{
  "id": "linear09",
  "level": "1",
  "url": "linear09.html",
  "type": "Section",
  "number": "3.9",
  "title": "The Matrix Exponential",
  "body": " The Matrix Exponential    To understand that is the solution to the initial value problem where is the matrix exponential.  To understand that if be an eigenvalue of an matrix A and is an eigenvector for , then .  To understand and be able to apply the properties of the matrix exponential to matrices and .  To understand and be able to use the matrix exponential to solve a linear system     Consider the linear system The matrix associated with this system is The characteristic polynomial of is hence, there is only a single eigenvalue . Moreover, we can only find a single linearly independent eigenvector . Thus, is a solution to our system. However, this is not the general solution to the system. We can only solve initial value problems where the initial condition lies on the line through the origin containing the vector . To construct a general solution to our system, we will need two other linearly independent solutions. One way of doing this is with the matrix exponential.    The Exponential of a Matrix  Our goal is to construct a solution to the initial value problem where is an matrix. Recalling that the solution to the initial value problem is , we might guess that a solution to the initial value problem has the form if we can make sense of the expression .    matrix exponential   We will define the exponential of using the power series for . Thus, where is an matrix, where by convention. Each term makes sense in our definition since each is an expression of matrices; however, there are some issues surrounding the convergence of the power series. A series, even a series whose individual terms are matrix expressions, converges if and only if its partial sums, converge. Although we shall not provide a proof, the matrix exponential converges for all .    matrix exponential    Let us compute the exponential of Actually, this is quite easy,     If is an matrix, then    We simply need to differentiate term by term. Since we are differentiating an infinite series, we still need to show that differentiating term by term is something that can be done. We will, however, leave the details to a course in advanced calculus. However,     Let be an matrix. Then is the solution to the initial value problem     The corollary follows immediately from . If , then   Thus, solving linear systems is simply a matter of computing matrix exponentials. The problem is that matrix exponentials may not be so easy to compute.   The matrix has repeated eigenvalues . If we try to compute , then It is not at all clear that this series converges to a matrix whose entries can be expressed in terms of elementary functions.   Now let us see how we can use the matrix exponential to solve a linear system as well as invent a more direct way to compute the matrix exponential.    Let be an eigenvalue of an matrix . If is an eigenvector for , then .     Since is an eigenvalue for , we know that . Using mathematical induction, we can show that has eigenvalue with associated eigenvector . Indeed, Hence,   The matrix exponential shares several properties with the exponential function that we studied in calculus.    Let and be matrices. Then  ;  if , then ;  has inverse .      To prove (1), we can simply expand both sides of the equality in a power series, Proving (2) is a only bit more complicated if we notice that the binomial expansion holds for matrices, where providing . Simply expand each series out to see that this is true. Part (3) follows directly from Part (2), since and commute.    Now let us compute once again for First notice that Since the identity matrix commutes with every matrix, we know that We also know that by . Thus, The matrix has repeated eigenvalue . Consequently, and is the zero matrix. Thus,   Our example suggests at the following proposition. We leave the proof of this proposition as an exercise.    If is an matrix with a single eigenvalue , then there exists a nonnegative integer such that     We are now ready to return to our original system , where This matrix has a single eigenvalue . It is easy to show that the only nonzero powers of are Therefore, Now, to compute three linearly independent solutions for , we simply compute for three linearly independent vectors. We will use the standard basis vectors Thus, the general solution to our system is     Generalized Eigenvalues   Consider the system , where . The characteristic polynomial of is The eigenvalue has eigenvector and the eigenvalue has eigenvector . Thus, we can find two linearly independent solutions in this case Since has multiplicity two and we can find only one linearly independent eigenvector, it is not possible to apply in this case.  If we consider the exponential where and are linearly independent, our goal is to choose for which the series truncates. That is, we must look for vectors such that . If , then , which means that is an eigenvector. Thus, must be a multiple of in this case. Since we already know that the eigenspace associated with this eigenvector has dimension one and is generated by , we must consider higher powers.  Since we have The nullspace of this matrix has dimension two. Certainly, is in the nullspace of , since it is the nullspace of . We wish to find a vector that is not a multiple of the vector that is also in the nullspace of . The vector will do. Now our series truncates, We now have a general solution for our system,   If is an eigenvalue of and for some , then is called a generalized eigenvector of . When eigenvalues have algebraic multiplicity greater than one, we can compute extra solutions by looking for vectors in the nullspace of for . The following theorem tells us that this is always possible. We leave the proof of the theorem as an exercise in linear algebra.    Suppose that is an eigenvalue of with multiplicity . Then there exists an integer such that the dimension of the nullspace of is .    We now have a procedure for finding linearly independent solutions corresponding to an eigenvalue of multiplicity .  Find the smallest integer such that the nullspace of has dimension .  Find a basis for the nullspace of .  For each ( ), we have the solution  This procedure works for complex eigenvalues as well as real. If has eigenvector , then set and .   Solving Systems Using the Matrix Exponential   Consider the system , where     Find the eigenvalue, of (there is only one).      Find eigenvectors, for the eigenvalue .      Compute .      Compute as in .      Find the general solution to .       Important Lessons   If is an matrix, we define the exponential of to be  If is an matrix, then  Let be an matrix. Then is the solution to the initial value problem  Let be an eigenvalue of an matrix A. If is an eigenvector for , then .  Let and be matrices. Then  ;  if , then ;  is nonsingular with inverse .   If is an matrix with a single eigenvalue , then there exists nonnegative integer such that  Suppose that is an eigenvalue of with multiplicity . Then there exists an integer such that the dimension of the nullspace of is .  The procedure for finding linearly independent solutions corresponding to an eigenvalue of multiplicity is the following.  Find the smallest integer such that the nullspace of has dimension .  Find a basis for the nullspace of .  For each ( ), we have the solution  The procedure works for complex eigenvalues as well as real. If has eigenvector , then set and .       What is the exponential of a matrix ?       Explain what a generalized eigenvector for a matrix is.       Exercises   Finding Solutions Using the Matrix Exponential  For each of the linear systems in   Find the eigenvalues of . You may find Sage useful.  Find the eigenvectors for each eigenvalue of .  Compute .  Compute  Find the general solution to .                                             Solving Initial-value Problems  Solve each of initial-value problems in                                             Let Verify that      Prove .      Suppose that we are given the system where is a matrix of constants. For example, the system can be written in the form , , where   Show that is a solution to .  Use to solve the system      "
},
{
  "id": "linear09-2",
  "level": "2",
  "url": "linear09.html#linear09-2",
  "type": "Objectives",
  "number": "3.9",
  "title": "",
  "body": "  To understand that is the solution to the initial value problem where is the matrix exponential.  To understand that if be an eigenvalue of an matrix A and is an eigenvector for , then .  To understand and be able to apply the properties of the matrix exponential to matrices and .  To understand and be able to use the matrix exponential to solve a linear system   "
},
{
  "id": "linear09-subsection-matrix-exponential-4",
  "level": "2",
  "url": "linear09.html#linear09-subsection-matrix-exponential-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "exponential "
},
{
  "id": "linear09-example-exp-diag-matrix",
  "level": "2",
  "url": "linear09.html#linear09-example-exp-diag-matrix",
  "type": "Example",
  "number": "3.9.1",
  "title": "",
  "body": " Let us compute the exponential of Actually, this is quite easy,  "
},
{
  "id": "linear09-theorem-matrix-exponential",
  "level": "2",
  "url": "linear09.html#linear09-theorem-matrix-exponential",
  "type": "Theorem",
  "number": "3.9.2",
  "title": "",
  "body": "  If is an matrix, then   "
},
{
  "id": "linear09-subsection-matrix-exponential-8",
  "level": "2",
  "url": "linear09.html#linear09-subsection-matrix-exponential-8",
  "type": "Proof",
  "number": "3.9.1.1",
  "title": "",
  "body": "We simply need to differentiate term by term. Since we are differentiating an infinite series, we still need to show that differentiating term by term is something that can be done. We will, however, leave the details to a course in advanced calculus. However,  "
},
{
  "id": "linear09-corollary-matrix-exponential",
  "level": "2",
  "url": "linear09.html#linear09-corollary-matrix-exponential",
  "type": "Corollary",
  "number": "3.9.3",
  "title": "",
  "body": "  Let be an matrix. Then is the solution to the initial value problem   "
},
{
  "id": "linear09-subsection-matrix-exponential-10",
  "level": "2",
  "url": "linear09.html#linear09-subsection-matrix-exponential-10",
  "type": "Proof",
  "number": "3.9.1.2",
  "title": "",
  "body": " The corollary follows immediately from . If , then  "
},
{
  "id": "linear09-subsection-matrix-exponential-12",
  "level": "2",
  "url": "linear09.html#linear09-subsection-matrix-exponential-12",
  "type": "Example",
  "number": "3.9.4",
  "title": "",
  "body": " The matrix has repeated eigenvalues . If we try to compute , then It is not at all clear that this series converges to a matrix whose entries can be expressed in terms of elementary functions.  "
},
{
  "id": "linear09-theorem-compute-matrix-exponential-1",
  "level": "2",
  "url": "linear09.html#linear09-theorem-compute-matrix-exponential-1",
  "type": "Theorem",
  "number": "3.9.5",
  "title": "",
  "body": "  Let be an eigenvalue of an matrix . If is an eigenvector for , then .   "
},
{
  "id": "linear09-subsection-matrix-exponential-15",
  "level": "2",
  "url": "linear09.html#linear09-subsection-matrix-exponential-15",
  "type": "Proof",
  "number": "3.9.1.3",
  "title": "",
  "body": " Since is an eigenvalue for , we know that . Using mathematical induction, we can show that has eigenvalue with associated eigenvector . Indeed, Hence,  "
},
{
  "id": "linear09-theorem-matrix-exponential-properties",
  "level": "2",
  "url": "linear09.html#linear09-theorem-matrix-exponential-properties",
  "type": "Theorem",
  "number": "3.9.6",
  "title": "",
  "body": "  Let and be matrices. Then  ;  if , then ;  has inverse .    "
},
{
  "id": "linear09-subsection-matrix-exponential-18",
  "level": "2",
  "url": "linear09.html#linear09-subsection-matrix-exponential-18",
  "type": "Proof",
  "number": "3.9.1.4",
  "title": "",
  "body": " To prove (1), we can simply expand both sides of the equality in a power series, Proving (2) is a only bit more complicated if we notice that the binomial expansion holds for matrices, where providing . Simply expand each series out to see that this is true. Part (3) follows directly from Part (2), since and commute.  "
},
{
  "id": "linear09-subsection-matrix-exponential-19",
  "level": "2",
  "url": "linear09.html#linear09-subsection-matrix-exponential-19",
  "type": "Example",
  "number": "3.9.7",
  "title": "",
  "body": " Now let us compute once again for First notice that Since the identity matrix commutes with every matrix, we know that We also know that by . Thus, The matrix has repeated eigenvalue . Consequently, and is the zero matrix. Thus,  "
},
{
  "id": "linear09-proposition-compute-matrix-exponential-2",
  "level": "2",
  "url": "linear09.html#linear09-proposition-compute-matrix-exponential-2",
  "type": "Proposition",
  "number": "3.9.8",
  "title": "",
  "body": "  If is an matrix with a single eigenvalue , then there exists a nonnegative integer such that   "
},
{
  "id": "linear09-example-3x3",
  "level": "2",
  "url": "linear09.html#linear09-example-3x3",
  "type": "Example",
  "number": "3.9.9",
  "title": "",
  "body": " We are now ready to return to our original system , where This matrix has a single eigenvalue . It is easy to show that the only nonzero powers of are Therefore, Now, to compute three linearly independent solutions for , we simply compute for three linearly independent vectors. We will use the standard basis vectors Thus, the general solution to our system is  "
},
{
  "id": "linear09-subsection-generalized-eigenvalues-2",
  "level": "2",
  "url": "linear09.html#linear09-subsection-generalized-eigenvalues-2",
  "type": "Example",
  "number": "3.9.10",
  "title": "",
  "body": " Consider the system , where . The characteristic polynomial of is The eigenvalue has eigenvector and the eigenvalue has eigenvector . Thus, we can find two linearly independent solutions in this case Since has multiplicity two and we can find only one linearly independent eigenvector, it is not possible to apply in this case.  If we consider the exponential where and are linearly independent, our goal is to choose for which the series truncates. That is, we must look for vectors such that . If , then , which means that is an eigenvector. Thus, must be a multiple of in this case. Since we already know that the eigenspace associated with this eigenvector has dimension one and is generated by , we must consider higher powers.  Since we have The nullspace of this matrix has dimension two. Certainly, is in the nullspace of , since it is the nullspace of . We wish to find a vector that is not a multiple of the vector that is also in the nullspace of . The vector will do. Now our series truncates, We now have a general solution for our system,  "
},
{
  "id": "linear09-subsection-generalized-eigenvalues-3",
  "level": "2",
  "url": "linear09.html#linear09-subsection-generalized-eigenvalues-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "generalized eigenvector "
},
{
  "id": "linear09-theorem-dimension-nullspace",
  "level": "2",
  "url": "linear09.html#linear09-theorem-dimension-nullspace",
  "type": "Theorem",
  "number": "3.9.11",
  "title": "",
  "body": "  Suppose that is an eigenvalue of with multiplicity . Then there exists an integer such that the dimension of the nullspace of is .   "
},
{
  "id": "linear09-subsection-generalized-eigenvalues-6",
  "level": "2",
  "url": "linear09.html#linear09-subsection-generalized-eigenvalues-6",
  "type": "Activity",
  "number": "3.9.1",
  "title": "Solving Systems Using the Matrix Exponential.",
  "body": " Solving Systems Using the Matrix Exponential   Consider the system , where     Find the eigenvalue, of (there is only one).      Find eigenvectors, for the eigenvalue .      Compute .      Compute as in .      Find the general solution to .    "
},
{
  "id": "linear09-subsection-important-lessons-2",
  "level": "2",
  "url": "linear09.html#linear09-subsection-important-lessons-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "exponential "
},
{
  "id": "rq-linear09-matrix-exp",
  "level": "2",
  "url": "linear09.html#rq-linear09-matrix-exp",
  "type": "Reading Question",
  "number": "3.9.4.1",
  "title": "",
  "body": "  What is the exponential of a matrix ?    "
},
{
  "id": "rq-linear09-generalized-ev",
  "level": "2",
  "url": "linear09.html#rq-linear09-generalized-ev",
  "type": "Reading Question",
  "number": "3.9.4.2",
  "title": "",
  "body": "  Explain what a generalized eigenvector for a matrix is.    "
},
{
  "id": "linear09-exercises-solving-linear-systems-3",
  "level": "2",
  "url": "linear09.html#linear09-exercises-solving-linear-systems-3",
  "type": "Exercise",
  "number": "3.9.5.1",
  "title": "",
  "body": "    "
},
{
  "id": "linear09-exercises-solving-linear-systems-4",
  "level": "2",
  "url": "linear09.html#linear09-exercises-solving-linear-systems-4",
  "type": "Exercise",
  "number": "3.9.5.2",
  "title": "",
  "body": "    "
},
{
  "id": "linear09-exercises-solving-linear-systems-5",
  "level": "2",
  "url": "linear09.html#linear09-exercises-solving-linear-systems-5",
  "type": "Exercise",
  "number": "3.9.5.3",
  "title": "",
  "body": "    "
},
{
  "id": "linear09-exercises-solving-linear-systems-6",
  "level": "2",
  "url": "linear09.html#linear09-exercises-solving-linear-systems-6",
  "type": "Exercise",
  "number": "3.9.5.4",
  "title": "",
  "body": "    "
},
{
  "id": "linear09-exercises-solving-linear-systems-7",
  "level": "2",
  "url": "linear09.html#linear09-exercises-solving-linear-systems-7",
  "type": "Exercise",
  "number": "3.9.5.5",
  "title": "",
  "body": "    "
},
{
  "id": "linear09-exercises-solving-linear-systems-8",
  "level": "2",
  "url": "linear09.html#linear09-exercises-solving-linear-systems-8",
  "type": "Exercise",
  "number": "3.9.5.6",
  "title": "",
  "body": "    "
},
{
  "id": "linear09-exercises-solving-linear-systems-9",
  "level": "2",
  "url": "linear09.html#linear09-exercises-solving-linear-systems-9",
  "type": "Exercise",
  "number": "3.9.5.7",
  "title": "",
  "body": "    "
},
{
  "id": "linear09-exercises-solving-linear-systems-10",
  "level": "2",
  "url": "linear09.html#linear09-exercises-solving-linear-systems-10",
  "type": "Exercise",
  "number": "3.9.5.8",
  "title": "",
  "body": "    "
},
{
  "id": "linear09-exercises-solving-ivps-3",
  "level": "2",
  "url": "linear09.html#linear09-exercises-solving-ivps-3",
  "type": "Exercise",
  "number": "3.9.5.9",
  "title": "",
  "body": "    "
},
{
  "id": "linear09-exercises-solving-ivps-4",
  "level": "2",
  "url": "linear09.html#linear09-exercises-solving-ivps-4",
  "type": "Exercise",
  "number": "3.9.5.10",
  "title": "",
  "body": "    "
},
{
  "id": "linear09-exercises-solving-ivps-5",
  "level": "2",
  "url": "linear09.html#linear09-exercises-solving-ivps-5",
  "type": "Exercise",
  "number": "3.9.5.11",
  "title": "",
  "body": "    "
},
{
  "id": "linear09-exercises-solving-ivps-6",
  "level": "2",
  "url": "linear09.html#linear09-exercises-solving-ivps-6",
  "type": "Exercise",
  "number": "3.9.5.12",
  "title": "",
  "body": "    "
},
{
  "id": "linear09-exercises-solving-ivps-7",
  "level": "2",
  "url": "linear09.html#linear09-exercises-solving-ivps-7",
  "type": "Exercise",
  "number": "3.9.5.13",
  "title": "",
  "body": "    "
},
{
  "id": "linear09-exercises-solving-ivps-8",
  "level": "2",
  "url": "linear09.html#linear09-exercises-solving-ivps-8",
  "type": "Exercise",
  "number": "3.9.5.14",
  "title": "",
  "body": "    "
},
{
  "id": "linear09-exercises-solving-ivps-9",
  "level": "2",
  "url": "linear09.html#linear09-exercises-solving-ivps-9",
  "type": "Exercise",
  "number": "3.9.5.15",
  "title": "",
  "body": "    "
},
{
  "id": "linear09-exercises-solving-ivps-10",
  "level": "2",
  "url": "linear09.html#linear09-exercises-solving-ivps-10",
  "type": "Exercise",
  "number": "3.9.5.16",
  "title": "",
  "body": "    "
},
{
  "id": "linear09-exercises-4",
  "level": "2",
  "url": "linear09.html#linear09-exercises-4",
  "type": "Exercise",
  "number": "3.9.5.17",
  "title": "",
  "body": "  Let Verify that   "
},
{
  "id": "linear09-exercises-5",
  "level": "2",
  "url": "linear09.html#linear09-exercises-5",
  "type": "Exercise",
  "number": "3.9.5.18",
  "title": "",
  "body": "  Prove .   "
},
{
  "id": "linear09-exercises-6",
  "level": "2",
  "url": "linear09.html#linear09-exercises-6",
  "type": "Exercise",
  "number": "3.9.5.19",
  "title": "",
  "body": "  Suppose that we are given the system where is a matrix of constants. For example, the system can be written in the form , , where   Show that is a solution to .  Use to solve the system    "
},
{
  "id": "linear10",
  "level": "1",
  "url": "linear10.html",
  "type": "Section",
  "number": "3.10",
  "title": "Projects Systems of Linear Differential Equations",
  "body": " Projects Systems of Linear Differential Equations   Project Parameter Space Analysis   This project is about classifying all of the possible behaviors for a system of linear differential equations. Consider the family of systems of linear differential equations, , where The goal of this project is to produce a picture of how the values of , , and affect the behavior of solutions to your system of differential equations. This means that you will need to precisely describe each possible region of -space and the corresponding types of behaviors in that region (spiral, sink, repeated eigenvalue, etc.). Representing these regions in three dimensional space can be difficult, so start early on this project and be creative in your creations. Your report should address the following questions at a minimum (but you will likely need to explore more than just these questions to fully understand your parameter space).  You might want to consider a strategy similar to the following.  First examine the case when . You should compute the eigenvalues for this case and determine how the behavior of solutions to your system depend on and . Be sure to think about what is happening on the boundary between different regions and specify what is happening to solutions for each case. You may want to draw example phase planes for each of the regions. You should have a clear, accurate, and complete picture of the -space in terms of these behaviors.  You should now do the same analysis for the case as you did for .  Describe the behavior of your system when and be specific about what is changing.  Completely describe what behaviors occur when .  You should now use the cases from your previous parts to help make a general picture. You need to draw the three dimensional parameter space showing all of the possible behaviors in the system and identify which regions (in terms of , , and ) exhibit which behaviors. Be creative in your display of this information. You may even want ot build a physical model to display your findings.      Describe the parameter space for , where      Describe the parameter space for , where      Describe the parameter space for , where     "
},
{
  "id": "linear10-project-1",
  "level": "2",
  "url": "linear10.html#linear10-project-1",
  "type": "Project",
  "number": "3.10.1",
  "title": "Project—Parameter Space Analysis.",
  "body": " Project Parameter Space Analysis   This project is about classifying all of the possible behaviors for a system of linear differential equations. Consider the family of systems of linear differential equations, , where The goal of this project is to produce a picture of how the values of , , and affect the behavior of solutions to your system of differential equations. This means that you will need to precisely describe each possible region of -space and the corresponding types of behaviors in that region (spiral, sink, repeated eigenvalue, etc.). Representing these regions in three dimensional space can be difficult, so start early on this project and be creative in your creations. Your report should address the following questions at a minimum (but you will likely need to explore more than just these questions to fully understand your parameter space).  You might want to consider a strategy similar to the following.  First examine the case when . You should compute the eigenvalues for this case and determine how the behavior of solutions to your system depend on and . Be sure to think about what is happening on the boundary between different regions and specify what is happening to solutions for each case. You may want to draw example phase planes for each of the regions. You should have a clear, accurate, and complete picture of the -space in terms of these behaviors.  You should now do the same analysis for the case as you did for .  Describe the behavior of your system when and be specific about what is changing.  Completely describe what behaviors occur when .  You should now use the cases from your previous parts to help make a general picture. You need to draw the three dimensional parameter space showing all of the possible behaviors in the system and identify which regions (in terms of , , and ) exhibit which behaviors. Be creative in your display of this information. You may even want ot build a physical model to display your findings.      Describe the parameter space for , where      Describe the parameter space for , where      Describe the parameter space for , where    "
},
{
  "id": "secondorder01",
  "level": "1",
  "url": "secondorder01.html",
  "type": "Section",
  "number": "4.1",
  "title": "Homogeneous Linear Equations",
  "body": " Homogeneous Linear Equations    To understand that a second-order linear differential equation with constant coefficients is an equation of the form and can be solved by examining the roots of the characteristic polynomial .  To understand that simple harmonic oscillator can be modeled by the equation where , , and .     A differential equation of the form is called a second-order linear differential equation . We will first consider the case where , , and are constants and . An equation of this form is said to be homogeneous with constant coefficients . We already know how to solve such equations since we can rewrite them as a system of first-order linear equations. Thus, we can find the general solution of a homogeneous second-order linear differential equation with constant coefficients by computing the eigenvalues and eigenvectors of the matrix of the corresponding system.    second-order linear differential equation     RLC Circuits  Recall the RC circuits that we studied earlier (see ). Such circuits contained a voltage source, a capacitor, and a resistor. A battery or generator is an example of a voltage source, and a toaster or an electric stove is an example of something that might provide a resistance in a circuit. Capacitors store an electrical charge and are used in electronic flashes for cameras. We will now add an inductor such as a solenoid, a coil that generates a magnetic field. Inductor applications include transformers, power supplies, televisions, and radios. Our new circuit is called an RLC circuit ( ).              E(t)    +    -    R    C    I(t)    L            An RLC Circuit   Current, , is the rate at which a charge flows through this circuit and is measured in amperes or amps. We assign a direction to the current, and a current flowing in the opposite direction will be given negative values. The impressed voltage, , is measured in volts, the resistance is measured in ohms, and the capacitance is measured in farads. The charge on the capacitor at time is measured in coulombs. Inductance on the coil, , is measured in henrys.  The following laws from physics govern how our circuit behaves.  .  The voltage drop across a resistor is (Ohm's Law).  The voltage drop across a capacitor is .  The voltage drop across an inductor is .  In a closed circuit the impressed voltage is equal to the sum of the voltage drops in the rest of the circuit (Kirchhoff's Second Law).  Applying Kirchhoff's Second Law to our circuit, we have the differential equation or Differentiating both sides of , we have  For example, we might consider an RLC circuit with , , and . At when both and , the impressed voltage on the circuit is given by . Our equation becomes This is an example of a second-order linear differential equation .    Second-Order Linear Equations  Suppose that we have a homogeneous second-order linear differential equation with constant coefficients, The goal of this section is to be able to solve all such equations. However, we did a great deal of work finding unique solutions to systems of first-order linear systems equations in . Our efforts are now rewarded. Since each second-order homogeneous system with constant coefficients can be rewritten as a first-order linear system, we are guaranteed the existence and uniqueness of solutions. Indeed, we can rewrite as a system of first-order linear equations, and then find the general solution by computing the eigenvalues and eigenvectors of the matrix of the corresponding system.   Solutions of a linear system often include terms of the form . It makes sense that solutions to equation take the same form. Consider the equation If we assume that a solution is of the form , we can substitute this expression into the left-hand side of to obtain Since is never zero, we find that or or . Thus, we have two solutions By the Principle of Superposition, is a solution to .  Indeed, this is the general solution of our second-order equation since we have a one-to-one correspondence between the solutions of and the system The matrix associated with this system has characteristic polynomial . The eigenvalues of are and with eigenvectors and , respectively. Consequently, the solution to our system is which agrees with .   In general, suppose that where . Applying the strategy in , we can find the general solution for this equation by finding the roots of the quadratic polynomial , If , we have real roots and the solution to our second-order differential equation is where and are arbitrary constants.  To prove that equation is indeed the general solution to the second-order equation , we can study the equivalent system of linear equations. If we let , the corresponding linear system is , where The characteristic polynomial of is The roots of are the same as the roots of .    characteristic polynomial   If , we have real roots We can find eigenvectors for and , respectively. Thus, the general solution to the system of differential equations is which agrees with .   Now let us solve the initial value problem Again, we will assume that our solution has the form . Substituting this function into our differential equation, we find that As in , ; however, the roots of this polynomial are complex, Using Euler's formula, we can find a complex solution The real and imaginary parts of our solution are respectively. We claim that both and are solutions to our differential equation. Indeed, since is a solution, Since the real part and the imaginary part of must both be zero, we can conclude that and . Therefore, the general solution to our equation is  To apply our initial conditions and , we first calculate Thus, and and . Hence, the solution to our initial value problem is   As before, the corresponding linear sytem is , where If , the eigenvalue of are and , where The vector is an eigenvector for . Thus, a solution to our system of differential equations is Taking the real and imaginary parts of , we obtain two real solutions to the system, and . Therefore, the general solution to is  Given a second-order linear differential equation with constant coefficients, , our strategy has been to solve the characteristic equation  to obtain two linearly independent solutions. We have covered the case where this equation has two distinct real solutions as well as when there are complex solutions, but what if there is only a single real solution ?   Consider the equation If we choose as our guess, we find Thus, and we have a solution .  In order to find a general solution to , we must find a second solution that is not a multiple of . Since we already know that is a solution to our differential equation, we will try to generalize this observation by replacing with a nonconstant function and then try to determine so that is a solution to . Indeed, if then and Consequently, and . Therefore, . Letting and , we can assume that , and the second solution to our equation is . Hence, the general solution to is We leave it as an exercise to show that our solution agrees with the solution that we would obtain from solving the equivalent first-order linear system.   The technique that we have used in is called reduction of order . reduction of order We leave it as an exercise to show that this technique works in general. That is, given a second-order linear differential equation such that , then the general solution is given by where .   Solving Second-Order Homogeneous Linear Differential Equations   Solve each of the following initial value problems.                               Classifying Harmonic Oscillators  Recall from that we can model harmonic motion using the equation In the case of a spring-mass system, is the oscillating mass, is the damping coefficient, and is the spring constant. It is important to remember that both and are positive constants and .  If , then the oscillator is undamped harmonic oscillator damped In this case, The characteristic equation is and we have eigenvalues . Hence, the complex solution to our undamped oscillator is where . Since both the real and imaginary parts of the complex solution are also solutions to , the general solution to the undamped harmonic oscillator is giving us the position of the mass at time . Now, of course, it is easy to determine the velocity of the mass at time to be   Suppose that an undamped harmonic oscillator is modeled by the initial value problem We can quickly determine the solution of this initial value problem to be where is the velocity of the oscillator ( ). Examining the phase plane of the undamped oscillator, we find that the period of the oscillations is given by ( ).       f(t) = 2*cos(3*t) + (1\/3)* sin(3*t)  g(t) = cos(3*t) - 6*sin(3*t)       x(t)  v(t)         Position and velocity of an undamped harmonic oscillator        f(t)=(2*cos(3*t) + (1\/3)* sin(3*t),cos(3*t) - 6*sin(3*t))           The phase plane of an undamped harmonic oscillator    If we add damping to the oscillator, the equation becomes where . The charactersitic equation of is , which has roots There are three possible types of types of motion for the oscillator depending on the nature of the roots of .  If the damping value of is small when compared to , then and the roots of will be complex. Furthermore, the real part of each root, , is always negative. In such a situation, we say that the oscillator is under-damped . harmonic oscillator under-damped  If the damping value of is large , then , and we obtain distinct real negative roots for . The oscillator is over-damped . harmonic oscillator over-damped  Finally, we say that the oscillator is critically-damped  harmonic oscillator critically-damped if .    An Under-Damped Oscillator  Suppose that an oscillator is modeled by the initial value problem Notice that the damping is very small compared with the spring constant . The characteristic equation of the differential equation is , which has roots . Therefore, the complex solution must be and the general solution must be Applying the initial conditions, our solution becomes Notice that the period of the oscillations, , does not change; however, the amplitude slowly decreases ( and ).       f(t) = exp(-0.2*t)*sin(t)  g(t) = cos(t)*e^(-0.2*t) - 0.2*e^(-0.2*t)*sin(t)       x(t)  v(t)         Position and velocity of an under-damped harmonic oscillator        f(t)=(exp(-0.2*t)*sin(t),cos(t)*e^(-0.2*t) - 0.2*e^(-0.2*t)*sin(t))           The phase plane of an under-damped harmonic oscillator     An Over-Damped Oscillator  We can expect a different type of behavior in the case of an over-damped oscillator. For example, The characteristic equation of this initial value problem is hence, we have the general solution Applying the initial conditions, our solution is Notice that the damping is too strong for any oscillations to occur ( and ).       f(t) = exp(-t)\/2 - exp(-3*t)\/2  g(t) = -1\/2*e^(-t) + 3\/2*e^(-3*t)       x(t)  v(t)         The phase plane of an over-damped harmonic oscillator        f(t)=(exp(-t)\/2 - exp(-3*t)\/2, -1\/2*exp(-t) + 3\/2*exp(-3*t))           The phase plane of an over-damped harmonic oscillator     A Critically-Damped Oscillator  As we increase the damping, the oscillations will cease to occur for some value of . This will happen when . the At this point we have critical damping. Consider the system The general solution to this initial value problem is The solution to the initial value problem is Although we see that no oscillations for this oscillator ( and ), oscillations will commence as soon as we start to reduce the damping constant .       f(t) = t*exp(-2*t)  g(t) = -2*t*e^(-2*t) + e^(-2*t)       x(t)  v(t)         Position and velocity of a critically damped harmonic oscillator        f(t)=(t*exp(-2*t), -2*t*e^(-2*t) + e^(-2*t))           The phase plane of a critically damped harmonic oscillator      Important Lessons   A second-order linear differential equation with constant coefficients is an equation of the form We can guess the solution to this equation. Since we can rewrite this equation as a system of first-order linear differential equations, we can determine the general solution to .  Suppose that where and . If the roots of are and , the general solution to this differential equation is  If , the differential equation has a general solution where are the roots of .  If , the differential equation has a general solution  A simple harmonic oscillator can be modeled by the equation where , , and . There are three possible types of motion for the oscillator depending on the sign of .  If , the oscillator is under-damped.  If , the oscillator is over-damped.  If , the oscillator is critically damped.        What is the characteristic equation of ?       Describe the possible types of damping of a harmonic oscillator?       Exercises   Finding General Solutions  Find the general solution for each equation in .                                                      Solving Initial Value Problems  Solve the initial value problems in .    , ,      , ,      , ,      , ,      , ,      , ,      , ,      , ,      , ,      , ,      Harmonic Oscillators  Consider the harmonic oscillators with mass , damping coeeficient , and spring constant in .  Write the second-order initial value problem corresponding for the harmonic oscillator.  Classify the oscillator as undamped, under-damped, over-damped, or critically damped.  Solve the initial value problem.  Sketch the and -graphs of the solution of the initial value problem.  Sketch the phase portrait of the initial value problem.     ,  , ,      ,  , ,      ,  , ,      ,  , ,      ,  , ,      ,  , ,      ,  , ,      ,  , ,      Oscillations of a Hanging Mass   In , we will consider the motion of a mass hanging at the end of a vertical spring as in . The mass stretches the spring in a downward (positive) direction by length . There are two forces acting on the point where the mass is attached to the spring the force exerted by the spring and gravity. The force of gravity, the weight of the mass, acts downward with a magnitude of , where is the acceleration due to gravity. On the other hand, the force of the spring acts upward and is given by , where is the length of the spring. This is commonly known as Hooke's law. See . When the mass is hanging in equilibrium the force of gravity and the force of the spring balance each other out; that is,                             \\text{mass } m  \\text{mass } m  mg - kL = 0  \\text{length } \\ell  L  x  \\ell + L + x        A spring-mass system   We would like to investigate the motion of the mass if is initially displaced or acted on by an external force. Let be the displacement of the mass from its equilibrium position, where a downward displacement is positive. The force acting on the mass are the weight of the mass and the force exerted by the spring, which is the total elongation of the spring, or By Newton's second law of motion, Furthermore, it is possible to add a damping term, , or even an external force to obtain Since , we obtain the familiar equation     Suppose that a mass of grams stretches a spring centimeters.  Determine the spring constant .  If the mass is displaced an additional centimeters and released, write an initial value problem that will model the motion of the oscillating mass.  Solve the initial value problem.       Suppose that a mass of kilogram stretches a spring centimeters.  Determine the spring constant .  If the mass is displaced an additional centimeters and released, write an initial value problem that will model the motion of the oscillating mass.  Suppose the the spring-mass system is suspended in a fluid that exerts a resistance of kilograms when the mass has a velocity of centimeters per second. Modify the intial-value problem that you wrote in (b) to take this fact into account.  Solve the initial value problem.       Suppose that a mass weighing 4 lbs stretches a spring 3 inches.  If , determine .  Determine the spring constant .  If the mass is displaced an additional 6 inches and released, write an initial value problem that will model the motion of the oscillating mass.  Solve the initial value problem.     Pay careful attention to units.       Let , where and .  Show that is a solution to .  Assume that is a solution to and show that . Thus, is a general solution for .      Observe that  If is a solution to our differential equation, then Since , we know that . Hence, .       Suppose that is a solution (not identically zero) to the equation   Assume that is a solution to and derive the equation  Let and show that is a first-order linear differential equation in .  Show that is a solution to for and find a second linearly independent solution to .       If , then .  If , then If we assume that is a second solution, then If we let , then a solution of is and . Therefore, the second solution to our equation is       Let , where and .  Show that is a solution to .  Assume that is a solution to and show that . Thus, is a general solution for .       Consider the equation Determine all values of , if any, for which all solutions tend toward zero as . Also, determine the values of , if any, for which all nonzero solutions become unbounded as .      Solve each of the following initial value problems.          Reduction of Order   Suppose that is a solution (not identically zero) to the equation   Assume that is a solution to and derive the equation  Let and show that ( ) is a first-order linear differential equation in .  Show that is a solution to for and find a second linearly independent solution to ( ).      Euler Equations   An important class of second-order linear differential equations are equations of the form where and and are real constants. An equation of this form is called an Euler equation .  Show that the substitution transforms an Euler equation into an equation of constant coefficients.  Solve the equation     Show that     Higher Order Linear Equqtions with Constant Coefficients   The characteristic equation of the th order linear differential equation is For example, the characteristic equation of is . This equation factors as . Since the roots of the characteristic equation are , , and . As with second-order linear differntial equations, we can immediately write down our solution as   Find the general solution of the equation .  Find the general solution of the equation .  Find the general solution of the equation .  In general, we can always factor the characteristic polynomial over the complex numbers; however, this may be very difficult to do in practice. We are often forced to numerical techniques, especially for systems of very high order.    Show that      Solving Second Order Linear Equations with Sage  Second order homogeneous linear differential equations with constant coefficeints can be solved sybolically using Sage . For example, can be solved using the following Sage commands.   We can even solve initial value problems such as   Of course, we can add a forcing term to our initial value problem,     Exercises  Solve each of the following differential equations using Sage .          , ,             , ,             , ,             , ,                  "
},
{
  "id": "secondorder01-2",
  "level": "2",
  "url": "secondorder01.html#secondorder01-2",
  "type": "Objectives",
  "number": "4.1",
  "title": "",
  "body": "  To understand that a second-order linear differential equation with constant coefficients is an equation of the form and can be solved by examining the roots of the characteristic polynomial .  To understand that simple harmonic oscillator can be modeled by the equation where , , and .   "
},
{
  "id": "secondorder01-3-1",
  "level": "2",
  "url": "secondorder01.html#secondorder01-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "second-order linear differential equation homogeneous constant coefficients "
},
{
  "id": "secondorder01-figure-rlc-circuit",
  "level": "2",
  "url": "secondorder01.html#secondorder01-figure-rlc-circuit",
  "type": "Figure",
  "number": "4.1.1",
  "title": "",
  "body": "            E(t)    +    -    R    C    I(t)    L            An RLC Circuit  "
},
{
  "id": "secondorder01-subsection-rlc-circuit-6",
  "level": "2",
  "url": "secondorder01.html#secondorder01-subsection-rlc-circuit-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "second-order linear differential equation "
},
{
  "id": "secondorder01-example-real-solutions",
  "level": "2",
  "url": "secondorder01.html#secondorder01-example-real-solutions",
  "type": "Example",
  "number": "4.1.2",
  "title": "",
  "body": " Solutions of a linear system often include terms of the form . It makes sense that solutions to equation take the same form. Consider the equation If we assume that a solution is of the form , we can substitute this expression into the left-hand side of to obtain Since is never zero, we find that or or . Thus, we have two solutions By the Principle of Superposition, is a solution to .  Indeed, this is the general solution of our second-order equation since we have a one-to-one correspondence between the solutions of and the system The matrix associated with this system has characteristic polynomial . The eigenvalues of are and with eigenvectors and , respectively. Consequently, the solution to our system is which agrees with .  "
},
{
  "id": "secondorder01-subsection-second-order-linear-de-8",
  "level": "2",
  "url": "secondorder01.html#secondorder01-subsection-second-order-linear-de-8",
  "type": "Example",
  "number": "4.1.3",
  "title": "",
  "body": " Now let us solve the initial value problem Again, we will assume that our solution has the form . Substituting this function into our differential equation, we find that As in , ; however, the roots of this polynomial are complex, Using Euler's formula, we can find a complex solution The real and imaginary parts of our solution are respectively. We claim that both and are solutions to our differential equation. Indeed, since is a solution, Since the real part and the imaginary part of must both be zero, we can conclude that and . Therefore, the general solution to our equation is  To apply our initial conditions and , we first calculate Thus, and and . Hence, the solution to our initial value problem is  "
},
{
  "id": "secondorder01-subsection-second-order-linear-de-10",
  "level": "2",
  "url": "secondorder01.html#secondorder01-subsection-second-order-linear-de-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "characteristic equation "
},
{
  "id": "secondorder01-example-reduction-of-order",
  "level": "2",
  "url": "secondorder01.html#secondorder01-example-reduction-of-order",
  "type": "Example",
  "number": "4.1.4",
  "title": "",
  "body": " Consider the equation If we choose as our guess, we find Thus, and we have a solution .  In order to find a general solution to , we must find a second solution that is not a multiple of . Since we already know that is a solution to our differential equation, we will try to generalize this observation by replacing with a nonconstant function and then try to determine so that is a solution to . Indeed, if then and Consequently, and . Therefore, . Letting and , we can assume that , and the second solution to our equation is . Hence, the general solution to is We leave it as an exercise to show that our solution agrees with the solution that we would obtain from solving the equivalent first-order linear system.  "
},
{
  "id": "secondorder01-subsection-second-order-linear-de-12",
  "level": "2",
  "url": "secondorder01.html#secondorder01-subsection-second-order-linear-de-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "reduction of order "
},
{
  "id": "secondorder01-subsection-second-order-linear-de-13",
  "level": "2",
  "url": "secondorder01.html#secondorder01-subsection-second-order-linear-de-13",
  "type": "Activity",
  "number": "4.1.1",
  "title": "Solving Second-Order Homogeneous Linear Differential Equations.",
  "body": " Solving Second-Order Homogeneous Linear Differential Equations   Solve each of the following initial value problems.                            "
},
{
  "id": "secondorder01-subsection-harmonic-oscillators-3",
  "level": "2",
  "url": "secondorder01.html#secondorder01-subsection-harmonic-oscillators-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "undamped "
},
{
  "id": "secondorder01-subsection-harmonic-oscillators-4",
  "level": "2",
  "url": "secondorder01.html#secondorder01-subsection-harmonic-oscillators-4",
  "type": "Example",
  "number": "4.1.5",
  "title": "",
  "body": " Suppose that an undamped harmonic oscillator is modeled by the initial value problem We can quickly determine the solution of this initial value problem to be where is the velocity of the oscillator ( ). Examining the phase plane of the undamped oscillator, we find that the period of the oscillations is given by ( ).       f(t) = 2*cos(3*t) + (1\/3)* sin(3*t)  g(t) = cos(3*t) - 6*sin(3*t)       x(t)  v(t)         Position and velocity of an undamped harmonic oscillator        f(t)=(2*cos(3*t) + (1\/3)* sin(3*t),cos(3*t) - 6*sin(3*t))           The phase plane of an undamped harmonic oscillator   "
},
{
  "id": "secondorder01-subsection-harmonic-oscillators-5",
  "level": "2",
  "url": "secondorder01.html#secondorder01-subsection-harmonic-oscillators-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "under-damped over-damped critically-damped "
},
{
  "id": "secondorder01-subsection-harmonic-oscillators-6",
  "level": "2",
  "url": "secondorder01.html#secondorder01-subsection-harmonic-oscillators-6",
  "type": "Example",
  "number": "4.1.8",
  "title": "An Under-Damped Oscillator.",
  "body": " An Under-Damped Oscillator  Suppose that an oscillator is modeled by the initial value problem Notice that the damping is very small compared with the spring constant . The characteristic equation of the differential equation is , which has roots . Therefore, the complex solution must be and the general solution must be Applying the initial conditions, our solution becomes Notice that the period of the oscillations, , does not change; however, the amplitude slowly decreases ( and ).       f(t) = exp(-0.2*t)*sin(t)  g(t) = cos(t)*e^(-0.2*t) - 0.2*e^(-0.2*t)*sin(t)       x(t)  v(t)         Position and velocity of an under-damped harmonic oscillator        f(t)=(exp(-0.2*t)*sin(t),cos(t)*e^(-0.2*t) - 0.2*e^(-0.2*t)*sin(t))           The phase plane of an under-damped harmonic oscillator   "
},
{
  "id": "secondorder01-subsection-harmonic-oscillators-7",
  "level": "2",
  "url": "secondorder01.html#secondorder01-subsection-harmonic-oscillators-7",
  "type": "Example",
  "number": "4.1.11",
  "title": "An Over-Damped Oscillator.",
  "body": " An Over-Damped Oscillator  We can expect a different type of behavior in the case of an over-damped oscillator. For example, The characteristic equation of this initial value problem is hence, we have the general solution Applying the initial conditions, our solution is Notice that the damping is too strong for any oscillations to occur ( and ).       f(t) = exp(-t)\/2 - exp(-3*t)\/2  g(t) = -1\/2*e^(-t) + 3\/2*e^(-3*t)       x(t)  v(t)         The phase plane of an over-damped harmonic oscillator        f(t)=(exp(-t)\/2 - exp(-3*t)\/2, -1\/2*exp(-t) + 3\/2*exp(-3*t))           The phase plane of an over-damped harmonic oscillator   "
},
{
  "id": "secondorder01-subsection-harmonic-oscillators-8",
  "level": "2",
  "url": "secondorder01.html#secondorder01-subsection-harmonic-oscillators-8",
  "type": "Example",
  "number": "4.1.14",
  "title": "A Critically-Damped Oscillator.",
  "body": " A Critically-Damped Oscillator  As we increase the damping, the oscillations will cease to occur for some value of . This will happen when . the At this point we have critical damping. Consider the system The general solution to this initial value problem is The solution to the initial value problem is Although we see that no oscillations for this oscillator ( and ), oscillations will commence as soon as we start to reduce the damping constant .       f(t) = t*exp(-2*t)  g(t) = -2*t*e^(-2*t) + e^(-2*t)       x(t)  v(t)         Position and velocity of a critically damped harmonic oscillator        f(t)=(t*exp(-2*t), -2*t*e^(-2*t) + e^(-2*t))           The phase plane of a critically damped harmonic oscillator   "
},
{
  "id": "rq-secondorder01-char-equation",
  "level": "2",
  "url": "secondorder01.html#rq-secondorder01-char-equation",
  "type": "Reading Question",
  "number": "4.1.5.1",
  "title": "",
  "body": "  What is the characteristic equation of ?    "
},
{
  "id": "rq-secondorder01-harmonic-oscillator",
  "level": "2",
  "url": "secondorder01.html#rq-secondorder01-harmonic-oscillator",
  "type": "Reading Question",
  "number": "4.1.5.2",
  "title": "",
  "body": "  Describe the possible types of damping of a harmonic oscillator?    "
},
{
  "id": "secondorder01-exercises-find-solutions-3",
  "level": "2",
  "url": "secondorder01.html#secondorder01-exercises-find-solutions-3",
  "type": "Exercise",
  "number": "4.1.6.1",
  "title": "",
  "body": "    "
},
{
  "id": "secondorder01-exercises-find-solutions-4",
  "level": "2",
  "url": "secondorder01.html#secondorder01-exercises-find-solutions-4",
  "type": "Exercise",
  "number": "4.1.6.2",
  "title": "",
  "body": "    "
},
{
  "id": "secondorder01-exercises-find-solutions-5",
  "level": "2",
  "url": "secondorder01.html#secondorder01-exercises-find-solutions-5",
  "type": "Exercise",
  "number": "4.1.6.3",
  "title": "",
  "body": "    "
},
{
  "id": "secondorder01-exercises-find-solutions-6",
  "level": "2",
  "url": "secondorder01.html#secondorder01-exercises-find-solutions-6",
  "type": "Exercise",
  "number": "4.1.6.4",
  "title": "",
  "body": "    "
},
{
  "id": "secondorder01-exercises-find-solutions-7",
  "level": "2",
  "url": "secondorder01.html#secondorder01-exercises-find-solutions-7",
  "type": "Exercise",
  "number": "4.1.6.5",
  "title": "",
  "body": "    "
},
{
  "id": "secondorder01-exercises-find-solutions-8",
  "level": "2",
  "url": "secondorder01.html#secondorder01-exercises-find-solutions-8",
  "type": "Exercise",
  "number": "4.1.6.6",
  "title": "",
  "body": "    "
},
{
  "id": "secondorder01-exercises-find-solutions-9",
  "level": "2",
  "url": "secondorder01.html#secondorder01-exercises-find-solutions-9",
  "type": "Exercise",
  "number": "4.1.6.7",
  "title": "",
  "body": "    "
},
{
  "id": "secondorder01-exercises-find-solutions-10",
  "level": "2",
  "url": "secondorder01.html#secondorder01-exercises-find-solutions-10",
  "type": "Exercise",
  "number": "4.1.6.8",
  "title": "",
  "body": "    "
},
{
  "id": "secondorder01-exercises-find-solutions-11",
  "level": "2",
  "url": "secondorder01.html#secondorder01-exercises-find-solutions-11",
  "type": "Exercise",
  "number": "4.1.6.9",
  "title": "",
  "body": "    "
},
{
  "id": "secondorder01-exercises-find-solutions-12",
  "level": "2",
  "url": "secondorder01.html#secondorder01-exercises-find-solutions-12",
  "type": "Exercise",
  "number": "4.1.6.10",
  "title": "",
  "body": "    "
},
{
  "id": "secondorder01-exercises-solve-ivps-3",
  "level": "2",
  "url": "secondorder01.html#secondorder01-exercises-solve-ivps-3",
  "type": "Exercise",
  "number": "4.1.6.11",
  "title": "",
  "body": "  , ,   "
},
{
  "id": "secondorder01-exercises-solve-ivps-4",
  "level": "2",
  "url": "secondorder01.html#secondorder01-exercises-solve-ivps-4",
  "type": "Exercise",
  "number": "4.1.6.12",
  "title": "",
  "body": "  , ,   "
},
{
  "id": "secondorder01-exercises-solve-ivps-5",
  "level": "2",
  "url": "secondorder01.html#secondorder01-exercises-solve-ivps-5",
  "type": "Exercise",
  "number": "4.1.6.13",
  "title": "",
  "body": "  , ,   "
},
{
  "id": "secondorder01-exercises-solve-ivps-6",
  "level": "2",
  "url": "secondorder01.html#secondorder01-exercises-solve-ivps-6",
  "type": "Exercise",
  "number": "4.1.6.14",
  "title": "",
  "body": "  , ,   "
},
{
  "id": "secondorder01-exercises-solve-ivps-7",
  "level": "2",
  "url": "secondorder01.html#secondorder01-exercises-solve-ivps-7",
  "type": "Exercise",
  "number": "4.1.6.15",
  "title": "",
  "body": "  , ,   "
},
{
  "id": "secondorder01-exercises-solve-ivps-8",
  "level": "2",
  "url": "secondorder01.html#secondorder01-exercises-solve-ivps-8",
  "type": "Exercise",
  "number": "4.1.6.16",
  "title": "",
  "body": "  , ,   "
},
{
  "id": "secondorder01-exercises-solve-ivps-9",
  "level": "2",
  "url": "secondorder01.html#secondorder01-exercises-solve-ivps-9",
  "type": "Exercise",
  "number": "4.1.6.17",
  "title": "",
  "body": "  , ,   "
},
{
  "id": "secondorder01-exercises-solve-ivps-10",
  "level": "2",
  "url": "secondorder01.html#secondorder01-exercises-solve-ivps-10",
  "type": "Exercise",
  "number": "4.1.6.18",
  "title": "",
  "body": "  , ,   "
},
{
  "id": "secondorder01-exercises-solve-ivps-11",
  "level": "2",
  "url": "secondorder01.html#secondorder01-exercises-solve-ivps-11",
  "type": "Exercise",
  "number": "4.1.6.19",
  "title": "",
  "body": "  , ,   "
},
{
  "id": "secondorder01-exercises-solve-ivps-12",
  "level": "2",
  "url": "secondorder01.html#secondorder01-exercises-solve-ivps-12",
  "type": "Exercise",
  "number": "4.1.6.20",
  "title": "",
  "body": "  , ,   "
},
{
  "id": "secondorder01-exercises-harmonic-oscillators-3",
  "level": "2",
  "url": "secondorder01.html#secondorder01-exercises-harmonic-oscillators-3",
  "type": "Exercise",
  "number": "4.1.6.21",
  "title": "",
  "body": "  ,  , ,   "
},
{
  "id": "secondorder01-exercises-harmonic-oscillators-4",
  "level": "2",
  "url": "secondorder01.html#secondorder01-exercises-harmonic-oscillators-4",
  "type": "Exercise",
  "number": "4.1.6.22",
  "title": "",
  "body": "  ,  , ,   "
},
{
  "id": "secondorder01-exercises-harmonic-oscillators-5",
  "level": "2",
  "url": "secondorder01.html#secondorder01-exercises-harmonic-oscillators-5",
  "type": "Exercise",
  "number": "4.1.6.23",
  "title": "",
  "body": "  ,  , ,   "
},
{
  "id": "secondorder01-exercises-harmonic-oscillators-6",
  "level": "2",
  "url": "secondorder01.html#secondorder01-exercises-harmonic-oscillators-6",
  "type": "Exercise",
  "number": "4.1.6.24",
  "title": "",
  "body": "  ,  , ,   "
},
{
  "id": "secondorder01-exercises-harmonic-oscillators-7",
  "level": "2",
  "url": "secondorder01.html#secondorder01-exercises-harmonic-oscillators-7",
  "type": "Exercise",
  "number": "4.1.6.25",
  "title": "",
  "body": "  ,  , ,   "
},
{
  "id": "secondorder01-exercises-harmonic-oscillators-8",
  "level": "2",
  "url": "secondorder01.html#secondorder01-exercises-harmonic-oscillators-8",
  "type": "Exercise",
  "number": "4.1.6.26",
  "title": "",
  "body": "  ,  , ,   "
},
{
  "id": "secondorder01-exercises-harmonic-oscillators-9",
  "level": "2",
  "url": "secondorder01.html#secondorder01-exercises-harmonic-oscillators-9",
  "type": "Exercise",
  "number": "4.1.6.27",
  "title": "",
  "body": "  ,  , ,   "
},
{
  "id": "secondorder01-exercises-harmonic-oscillators-10",
  "level": "2",
  "url": "secondorder01.html#secondorder01-exercises-harmonic-oscillators-10",
  "type": "Exercise",
  "number": "4.1.6.28",
  "title": "",
  "body": "  ,  , ,   "
},
{
  "id": "secondorder01-figure-hanging-mass",
  "level": "2",
  "url": "secondorder01.html#secondorder01-figure-hanging-mass",
  "type": "Figure",
  "number": "4.1.17",
  "title": "",
  "body": "                           \\text{mass } m  \\text{mass } m  mg - kL = 0  \\text{length } \\ell  L  x  \\ell + L + x        A spring-mass system  "
},
{
  "id": "secondorder01-exercises-hanging-mass-3",
  "level": "2",
  "url": "secondorder01.html#secondorder01-exercises-hanging-mass-3",
  "type": "Exercise",
  "number": "4.1.6.29",
  "title": "",
  "body": "  Suppose that a mass of grams stretches a spring centimeters.  Determine the spring constant .  If the mass is displaced an additional centimeters and released, write an initial value problem that will model the motion of the oscillating mass.  Solve the initial value problem.    "
},
{
  "id": "secondorder01-exercises-hanging-mass-4",
  "level": "2",
  "url": "secondorder01.html#secondorder01-exercises-hanging-mass-4",
  "type": "Exercise",
  "number": "4.1.6.30",
  "title": "",
  "body": "  Suppose that a mass of kilogram stretches a spring centimeters.  Determine the spring constant .  If the mass is displaced an additional centimeters and released, write an initial value problem that will model the motion of the oscillating mass.  Suppose the the spring-mass system is suspended in a fluid that exerts a resistance of kilograms when the mass has a velocity of centimeters per second. Modify the intial-value problem that you wrote in (b) to take this fact into account.  Solve the initial value problem.    "
},
{
  "id": "secondorder01-exercises-hanging-mass-5",
  "level": "2",
  "url": "secondorder01.html#secondorder01-exercises-hanging-mass-5",
  "type": "Exercise",
  "number": "4.1.6.31",
  "title": "",
  "body": "  Suppose that a mass weighing 4 lbs stretches a spring 3 inches.  If , determine .  Determine the spring constant .  If the mass is displaced an additional 6 inches and released, write an initial value problem that will model the motion of the oscillating mass.  Solve the initial value problem.     Pay careful attention to units.   "
},
{
  "id": "secondorder01-exercises-6",
  "level": "2",
  "url": "secondorder01.html#secondorder01-exercises-6",
  "type": "Exercise",
  "number": "4.1.6.32",
  "title": "",
  "body": "  Let , where and .  Show that is a solution to .  Assume that is a solution to and show that . Thus, is a general solution for .      Observe that  If is a solution to our differential equation, then Since , we know that . Hence, .    "
},
{
  "id": "secondorder01-exercises-7",
  "level": "2",
  "url": "secondorder01.html#secondorder01-exercises-7",
  "type": "Exercise",
  "number": "4.1.6.33",
  "title": "",
  "body": "  Suppose that is a solution (not identically zero) to the equation   Assume that is a solution to and derive the equation  Let and show that is a first-order linear differential equation in .  Show that is a solution to for and find a second linearly independent solution to .       If , then .  If , then If we assume that is a second solution, then If we let , then a solution of is and . Therefore, the second solution to our equation is    "
},
{
  "id": "secondorder01-exercises-8",
  "level": "2",
  "url": "secondorder01.html#secondorder01-exercises-8",
  "type": "Exercise",
  "number": "4.1.6.34",
  "title": "",
  "body": "  Let , where and .  Show that is a solution to .  Assume that is a solution to and show that . Thus, is a general solution for .    "
},
{
  "id": "secondorder01-exercises-9",
  "level": "2",
  "url": "secondorder01.html#secondorder01-exercises-9",
  "type": "Exercise",
  "number": "4.1.6.35",
  "title": "",
  "body": "  Consider the equation Determine all values of , if any, for which all solutions tend toward zero as . Also, determine the values of , if any, for which all nonzero solutions become unbounded as .   "
},
{
  "id": "secondorder01-exercises-10",
  "level": "2",
  "url": "secondorder01.html#secondorder01-exercises-10",
  "type": "Exercise",
  "number": "4.1.6.36",
  "title": "",
  "body": "  Solve each of the following initial value problems.        "
},
{
  "id": "secondorder01-exercises-11",
  "level": "2",
  "url": "secondorder01.html#secondorder01-exercises-11",
  "type": "Exercise",
  "number": "4.1.6.37",
  "title": "Reduction of Order.",
  "body": " Reduction of Order   Suppose that is a solution (not identically zero) to the equation   Assume that is a solution to and derive the equation  Let and show that ( ) is a first-order linear differential equation in .  Show that is a solution to for and find a second linearly independent solution to ( ).    "
},
{
  "id": "secondorder01-exercises-12",
  "level": "2",
  "url": "secondorder01.html#secondorder01-exercises-12",
  "type": "Exercise",
  "number": "4.1.6.38",
  "title": "Euler Equations.",
  "body": " Euler Equations   An important class of second-order linear differential equations are equations of the form where and and are real constants. An equation of this form is called an Euler equation .  Show that the substitution transforms an Euler equation into an equation of constant coefficients.  Solve the equation     Show that   "
},
{
  "id": "secondorder01-exercises-13",
  "level": "2",
  "url": "secondorder01.html#secondorder01-exercises-13",
  "type": "Exercise",
  "number": "4.1.6.39",
  "title": "Higher Order Linear Equqtions with Constant Coefficients.",
  "body": " Higher Order Linear Equqtions with Constant Coefficients   The characteristic equation of the th order linear differential equation is For example, the characteristic equation of is . This equation factors as . Since the roots of the characteristic equation are , , and . As with second-order linear differntial equations, we can immediately write down our solution as   Find the general solution of the equation .  Find the general solution of the equation .  Find the general solution of the equation .  In general, we can always factor the characteristic polynomial over the complex numbers; however, this may be very difficult to do in practice. We are often forced to numerical techniques, especially for systems of very high order.    Show that   "
},
{
  "id": "secondorder01-exercises-sage-3",
  "level": "2",
  "url": "secondorder01.html#secondorder01-exercises-sage-3",
  "type": "Exercise",
  "number": "4.1.8.1",
  "title": "",
  "body": "    "
},
{
  "id": "secondorder01-exercises-sage-5",
  "level": "2",
  "url": "secondorder01.html#secondorder01-exercises-sage-5",
  "type": "Exercise",
  "number": "4.1.8.2",
  "title": "",
  "body": "  , ,   "
},
{
  "id": "secondorder01-exercises-sage-7",
  "level": "2",
  "url": "secondorder01.html#secondorder01-exercises-sage-7",
  "type": "Exercise",
  "number": "4.1.8.3",
  "title": "",
  "body": "    "
},
{
  "id": "secondorder01-exercises-sage-9",
  "level": "2",
  "url": "secondorder01.html#secondorder01-exercises-sage-9",
  "type": "Exercise",
  "number": "4.1.8.4",
  "title": "",
  "body": "  , ,   "
},
{
  "id": "secondorder01-exercises-sage-11",
  "level": "2",
  "url": "secondorder01.html#secondorder01-exercises-sage-11",
  "type": "Exercise",
  "number": "4.1.8.5",
  "title": "",
  "body": "    "
},
{
  "id": "secondorder01-exercises-sage-13",
  "level": "2",
  "url": "secondorder01.html#secondorder01-exercises-sage-13",
  "type": "Exercise",
  "number": "4.1.8.6",
  "title": "",
  "body": "  , ,   "
},
{
  "id": "secondorder01-exercises-sage-15",
  "level": "2",
  "url": "secondorder01.html#secondorder01-exercises-sage-15",
  "type": "Exercise",
  "number": "4.1.8.7",
  "title": "",
  "body": "    "
},
{
  "id": "secondorder01-exercises-sage-17",
  "level": "2",
  "url": "secondorder01.html#secondorder01-exercises-sage-17",
  "type": "Exercise",
  "number": "4.1.8.8",
  "title": "",
  "body": "  , ,   "
},
{
  "id": "secondorder01-exercises-sage-19",
  "level": "2",
  "url": "secondorder01.html#secondorder01-exercises-sage-19",
  "type": "Exercise",
  "number": "4.1.8.9",
  "title": "",
  "body": "    "
},
{
  "id": "secondorder01-exercises-sage-21",
  "level": "2",
  "url": "secondorder01.html#secondorder01-exercises-sage-21",
  "type": "Exercise",
  "number": "4.1.8.10",
  "title": "",
  "body": "    "
},
{
  "id": "secondorder02",
  "level": "1",
  "url": "secondorder02.html",
  "type": "Section",
  "number": "4.2",
  "title": "Forcing",
  "body": " Forcing    To understand that the general solution to the equation is , where is a particular solution to and is the general solution of the corresponding homogeneous equation   To understand and be able to apply the Method of Undetermined Coefficients to find particular solutions to .     Harmonic oscillators such as a spring-mass system ( ) or an RLC circuit ( ) can be modeled with second-order linear differential equations. Indeed, we can model a spring-mass system with the equation where is the mass, is the damping coefficient, is the spring constant, and represents some external force applied to our system. RLC circuits can also be modeled to provide another example of forcing. If is the rate at which a charge flows through a circuit (measured in amperes or amps), is the resistance (measured in ohms), is the capacitance (measured in farads), and the inductance, , is (measured in henrys), then the derivative of the impressed voltage (measured in volts), , is the forcing term What is different about these two equations from those that we considered in is that the terms on the righthand side, and , are not zero. Such a term is called a forcing term .    Nonhomogeneous Equations  A nonhomogeneous second-order linear differential equation is an equation of the form We have already seen how examples of such equations arise when examining models of harmonic oscillators with forcing terms. Our goal is to be able to solve such equations. In general, these equations can be difficult to solve for an arbitrary function . Before we attempt to find solutions for some of the more common functions that might occur for , let us derive some fundamental facts about second-order linear differential equations.    Suppose that has solutions and . Then is a solution of the homogeneous linear differential equation     Since and are solutions of , we know that Thus,   We can use to derive the fact that the general solution to can be written in the form where is the general solution of the homogeneous equation and is any solution of . Indeed, suppose that is another solution to . Then is a solution to the homogeneous equation Therefore, or We state this fact in the following theorem.    Let be a particular solution of the equation and be the general solution of the corresponding homogeneous equation Then the general solution to is .      Forcing Terms  The equation can be used to model a harmonic oscillator where forcing occurs. In general, we will not be able to solve this equation explicitly for a given ; however, certain forcing functions often occur in practice. Some of the more important forcing functions are , where the external force decreases exponentially over time; , where a constant force is applied; and or , where a force is applied periodically.  In the case of the unforced damped harmonic oscillator, we know that , , and . Thus, we can rewrite this equation as where and are both positive. As a first-order linear system, the harmonic oscillator is The matrix corresponding to this system, has trace of and determinant . Since and , we know that any solution of the unforced equation tends toward the origin as . That is, the solution is a sink. This leads us to the following conclusion.    Suppose has solution , where and . If is the general solution to the equation, then as .    In other words, all solutions of a damped harmonic oscillator with nonzero damping are essentially the same for large values of .    The Method of Undetermined Coefficients   Let us solve the differential equation a harmonic oscillator with a constant forcing function. It is easy to check that the general solution to the homogeneous equation is A particular solution to is given by . Thus, the general solution is As , all solutions approach the constant solution ( ).      b = 5  k = 4  f(t,y) = (y[1],-k*y[0] - b*y[1] + 1)                 x(t)  dx\/dt        Solutions to     Now let us consider a more complicated example. Suppose that we wish to solve This is the equation of a harmonic oscillator with a forcing function that decreases exponentially with time. We already know the solution to the homogeneous equation. We will use the Method of Undetermined Coefficients Method of Undetermined Coefficients to find a particular solution to . It is reasonable to guess that a particular solution will have the form Substituting this expression into , we find that Hence, . Therefore, the solution that we seek is Again, all solutions approach zero as ( ).      b = 5  k = 4  f(t,y) = (y[1],-k*y[0] - b*y[1] + exp(-2*t))                 x(t)  dx\/dt        Solutions to     Now let us examine what happens if we have a periodic forcing function. Let us assume that the particular solution to the equation takes the form Then Substituting these expressions into the differential equation, we see that We must solve the following system of equations to find a particular solution: The solution of this system is and . Consequently, is a particular solution to . The general solution to our equation is The solutions to this equation are given in .      b = 5  k = 4  f(t,y) = (y[1],-k*y[0] - b*y[1] + 2*cos(t))                 x(t)  dx\/dt        Solutions to     As a final example, consider the equation Recall that the solution to the homogeneous equation is Our guess of for a particular solution will no longer work since is a solution to the homogeneous equation. We must therefore consider a function of a different form. Such a function must yield a multiple of when differentiated. The simplest such function is of the form Using this guess, Thus, and our general solution is Solutions to the differential equation are given in .      b = 5  k = 4  f(t,y) = (y[1],-k*y[0] - b*y[1] + exp(-t))                 x(t)  dx\/dt        Solutions to     Solving Forced Second-Order Linear Differential Equations   Find (1) a particular solution and (2) a general solution for each of the following differential equations.                               A Strategy  We outline a general strategy for choosing for the Method of Undetermined Coefficients in . Here is the smallest integer that will ensure that no term in is a solution of the corresponding homogeneous equation.                   Particular solutions of .     Important Lessons   A nonhomogeneous second-order linear differential equation is an equation of the form Forced harmonic oscillators and RLC circuits provide good examples of nonhomogeneous second-order linear differential equations.  Suppose that has solutions and . Then is a solution of the homogeneous linear differential equation  Let be a particular solution of the equation and be the general solution of the corresponding homogeneous equation Then the general solution to is . In particular, if the solution to has a sink at the origin, all solutions of the equation approach as .  The Method of Undetermined Coefficients is useful for solving the equation , when is of the form       Suppose that and are two solutions for . How are these two solutions related?       Describe the Method of Undetermined Coefficients in your own words.       Exercises   Finding Particular Solutions  Find a particular solution for each equation in .                                       ,      Finding General Solutions  Find the general solution for each equation in .                                       ,      Solving Initial Value Problems  Solve the initial problems in .    , ,      , ,      , ,      , ,      , ,      , ,      , ,      , , ,       We define two functions, and , to be linearly independent linearly independent on an open interval if there do not exist nonzero constants and such that for all . Equivalently, two functions are linearly independent, if one function is not a multiple of the other. Otherwise, and are linearly dependent linearly dependent . Suppose that and are solutions to the homogeneous linear equation Show that and are linearly dependent on an interval if and only if , where is the Wronskian Wronskian of and .    Suppose that that and are linearly dependent on an interval . Then one function is a multiple of the other, say . Thus, .  Conversely, suppose that for all in . If , then and the two functions are linearly dependent. Assume that for some in . Since is differentiable, it must also be continuous and there is some interval contained in such that and does not vanish on this interval. Therefore, and is constant on the interval . Thus, and . Since and are both solutions to the differential equation and have the same initial condition, for all by the existence and uniqueness theorem. Consequently, and are linearly dependent.      Wronskian     Abel's Theorem Abel's Theorem . If and are solutions of the homogeneous equation where and are continuous on an open interval , show that for some constant that depends on and but not on .  Use Abel's Theorem to find the Wronskian of up to a constant multiple, where .  Prove Abel's Theorem.      We can rewrite as Since , Abel's Theorem tells us that  Since and are solutions to our differential equation, we know that Multiplying the first equation by and the second equation by and subtracting, we obtain If then and equation becomes This equation is separable with solution       The Method of Variation of Parameters Method of Variation of Parameters . In this problem we will describe another method of finding a particular solution to a nonhomogeneous equation, if we know know that the general solution to the homogeneous equation is   Assume that a particular solution of has the form where Substitute into the left-hand side of to show that  Show that where is the Wronskian of and .  If , , and are continuous on an interval , show that for any point in . Consequently, a particular solution to is  Find the general solution of the differential equation      If , then Substituting these expressions into equation , we have  If we solve the system for and , we obtain  Integrate the two equations from part (2).  The general solution to the homogeneous equation is To find a particular solution, assume that the solution has the form By part (2) Integrating, we obtain Therefore, and the general solution is      "
},
{
  "id": "secondorder02-2",
  "level": "2",
  "url": "secondorder02.html#secondorder02-2",
  "type": "Objectives",
  "number": "4.2",
  "title": "",
  "body": "  To understand that the general solution to the equation is , where is a particular solution to and is the general solution of the corresponding homogeneous equation   To understand and be able to apply the Method of Undetermined Coefficients to find particular solutions to .   "
},
{
  "id": "secondorder02-3-1",
  "level": "2",
  "url": "secondorder02.html#secondorder02-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "forcing term "
},
{
  "id": "secondorder02-subsection-nonhomogeneous-de-2",
  "level": "2",
  "url": "secondorder02.html#secondorder02-subsection-nonhomogeneous-de-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "nonhomogeneous second-order linear differential equation "
},
{
  "id": "secondorder02-theorem-nonhomogeneous-difference",
  "level": "2",
  "url": "secondorder02.html#secondorder02-theorem-nonhomogeneous-difference",
  "type": "Theorem",
  "number": "4.2.1",
  "title": "",
  "body": "  Suppose that has solutions and . Then is a solution of the homogeneous linear differential equation   "
},
{
  "id": "secondorder02-subsection-nonhomogeneous-de-4",
  "level": "2",
  "url": "secondorder02.html#secondorder02-subsection-nonhomogeneous-de-4",
  "type": "Proof",
  "number": "4.2.1.1",
  "title": "",
  "body": " Since and are solutions of , we know that Thus,  "
},
{
  "id": "secondorder02-theorem-nonhomogeneous-general-solution",
  "level": "2",
  "url": "secondorder02.html#secondorder02-theorem-nonhomogeneous-general-solution",
  "type": "Theorem",
  "number": "4.2.2",
  "title": "",
  "body": "  Let be a particular solution of the equation and be the general solution of the corresponding homogeneous equation Then the general solution to is .   "
},
{
  "id": "secondorder02-theorem-steady-state",
  "level": "2",
  "url": "secondorder02.html#secondorder02-theorem-steady-state",
  "type": "Theorem",
  "number": "4.2.3",
  "title": "",
  "body": "  Suppose has solution , where and . If is the general solution to the equation, then as .   "
},
{
  "id": "secondorder02-subsection-undetermined-coefficients-2",
  "level": "2",
  "url": "secondorder02.html#secondorder02-subsection-undetermined-coefficients-2",
  "type": "Example",
  "number": "4.2.4",
  "title": "",
  "body": " Let us solve the differential equation a harmonic oscillator with a constant forcing function. It is easy to check that the general solution to the homogeneous equation is A particular solution to is given by . Thus, the general solution is As , all solutions approach the constant solution ( ).      b = 5  k = 4  f(t,y) = (y[1],-k*y[0] - b*y[1] + 1)                 x(t)  dx\/dt        Solutions to   "
},
{
  "id": "secondorder02-subsection-undetermined-coefficients-3",
  "level": "2",
  "url": "secondorder02.html#secondorder02-subsection-undetermined-coefficients-3",
  "type": "Example",
  "number": "4.2.6",
  "title": "",
  "body": " Now let us consider a more complicated example. Suppose that we wish to solve This is the equation of a harmonic oscillator with a forcing function that decreases exponentially with time. We already know the solution to the homogeneous equation. We will use the Method of Undetermined Coefficients Method of Undetermined Coefficients to find a particular solution to . It is reasonable to guess that a particular solution will have the form Substituting this expression into , we find that Hence, . Therefore, the solution that we seek is Again, all solutions approach zero as ( ).      b = 5  k = 4  f(t,y) = (y[1],-k*y[0] - b*y[1] + exp(-2*t))                 x(t)  dx\/dt        Solutions to   "
},
{
  "id": "secondorder02-subsection-undetermined-coefficients-4",
  "level": "2",
  "url": "secondorder02.html#secondorder02-subsection-undetermined-coefficients-4",
  "type": "Example",
  "number": "4.2.8",
  "title": "",
  "body": " Now let us examine what happens if we have a periodic forcing function. Let us assume that the particular solution to the equation takes the form Then Substituting these expressions into the differential equation, we see that We must solve the following system of equations to find a particular solution: The solution of this system is and . Consequently, is a particular solution to . The general solution to our equation is The solutions to this equation are given in .      b = 5  k = 4  f(t,y) = (y[1],-k*y[0] - b*y[1] + 2*cos(t))                 x(t)  dx\/dt        Solutions to   "
},
{
  "id": "secondorder02-subsection-undetermined-coefficients-5",
  "level": "2",
  "url": "secondorder02.html#secondorder02-subsection-undetermined-coefficients-5",
  "type": "Example",
  "number": "4.2.10",
  "title": "",
  "body": " As a final example, consider the equation Recall that the solution to the homogeneous equation is Our guess of for a particular solution will no longer work since is a solution to the homogeneous equation. We must therefore consider a function of a different form. Such a function must yield a multiple of when differentiated. The simplest such function is of the form Using this guess, Thus, and our general solution is Solutions to the differential equation are given in .      b = 5  k = 4  f(t,y) = (y[1],-k*y[0] - b*y[1] + exp(-t))                 x(t)  dx\/dt        Solutions to   "
},
{
  "id": "secondorder02-subsection-undetermined-coefficients-6",
  "level": "2",
  "url": "secondorder02.html#secondorder02-subsection-undetermined-coefficients-6",
  "type": "Activity",
  "number": "4.2.1",
  "title": "Solving Forced Second-Order Linear Differential Equations.",
  "body": " Solving Forced Second-Order Linear Differential Equations   Find (1) a particular solution and (2) a general solution for each of the following differential equations.                            "
},
{
  "id": "secondorder02-table-undetermined-coefficients",
  "level": "2",
  "url": "secondorder02.html#secondorder02-table-undetermined-coefficients",
  "type": "Table",
  "number": "4.2.12",
  "title": "Particular solutions of <span class=\"process-math\">\\(x'' + px' + qx = g(t)\\text{.}\\)<\/span>",
  "body": "                 Particular solutions of .  "
},
{
  "id": "secondorder02-subsection-important-lessons-2",
  "level": "2",
  "url": "secondorder02.html#secondorder02-subsection-important-lessons-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "nonhomogeneous second-order linear differential equation Method of Undetermined Coefficients "
},
{
  "id": "rq-secondorder02-two-solutions",
  "level": "2",
  "url": "secondorder02.html#rq-secondorder02-two-solutions",
  "type": "Reading Question",
  "number": "4.2.6.1",
  "title": "",
  "body": "  Suppose that and are two solutions for . How are these two solutions related?    "
},
{
  "id": "rq-secondorder02-undetermined-coeff",
  "level": "2",
  "url": "secondorder02.html#rq-secondorder02-undetermined-coeff",
  "type": "Reading Question",
  "number": "4.2.6.2",
  "title": "",
  "body": "  Describe the Method of Undetermined Coefficients in your own words.    "
},
{
  "id": "secondorder02-exercises-find-particular-solutions-3",
  "level": "2",
  "url": "secondorder02.html#secondorder02-exercises-find-particular-solutions-3",
  "type": "Exercise",
  "number": "4.2.7.1",
  "title": "",
  "body": "    "
},
{
  "id": "secondorder02-exercises-find-particular-solutions-4",
  "level": "2",
  "url": "secondorder02.html#secondorder02-exercises-find-particular-solutions-4",
  "type": "Exercise",
  "number": "4.2.7.2",
  "title": "",
  "body": "    "
},
{
  "id": "secondorder02-exercises-find-particular-solutions-5",
  "level": "2",
  "url": "secondorder02.html#secondorder02-exercises-find-particular-solutions-5",
  "type": "Exercise",
  "number": "4.2.7.3",
  "title": "",
  "body": "    "
},
{
  "id": "secondorder02-exercises-find-particular-solutions-6",
  "level": "2",
  "url": "secondorder02.html#secondorder02-exercises-find-particular-solutions-6",
  "type": "Exercise",
  "number": "4.2.7.4",
  "title": "",
  "body": "    "
},
{
  "id": "secondorder02-exercises-find-particular-solutions-7",
  "level": "2",
  "url": "secondorder02.html#secondorder02-exercises-find-particular-solutions-7",
  "type": "Exercise",
  "number": "4.2.7.5",
  "title": "",
  "body": "    "
},
{
  "id": "secondorder02-exercises-find-particular-solutions-8",
  "level": "2",
  "url": "secondorder02.html#secondorder02-exercises-find-particular-solutions-8",
  "type": "Exercise",
  "number": "4.2.7.6",
  "title": "",
  "body": "    "
},
{
  "id": "secondorder02-exercises-find-particular-solutions-9",
  "level": "2",
  "url": "secondorder02.html#secondorder02-exercises-find-particular-solutions-9",
  "type": "Exercise",
  "number": "4.2.7.7",
  "title": "",
  "body": "    "
},
{
  "id": "secondorder02-exercises-find-particular-solutions-10",
  "level": "2",
  "url": "secondorder02.html#secondorder02-exercises-find-particular-solutions-10",
  "type": "Exercise",
  "number": "4.2.7.8",
  "title": "",
  "body": "  ,   "
},
{
  "id": "secondorder02-exercises-find-general-solutions-3",
  "level": "2",
  "url": "secondorder02.html#secondorder02-exercises-find-general-solutions-3",
  "type": "Exercise",
  "number": "4.2.7.9",
  "title": "",
  "body": "    "
},
{
  "id": "secondorder02-exercises-find-general-solutions-4",
  "level": "2",
  "url": "secondorder02.html#secondorder02-exercises-find-general-solutions-4",
  "type": "Exercise",
  "number": "4.2.7.10",
  "title": "",
  "body": "    "
},
{
  "id": "secondorder02-exercises-find-general-solutions-5",
  "level": "2",
  "url": "secondorder02.html#secondorder02-exercises-find-general-solutions-5",
  "type": "Exercise",
  "number": "4.2.7.11",
  "title": "",
  "body": "    "
},
{
  "id": "secondorder02-exercises-find-general-solutions-6",
  "level": "2",
  "url": "secondorder02.html#secondorder02-exercises-find-general-solutions-6",
  "type": "Exercise",
  "number": "4.2.7.12",
  "title": "",
  "body": "    "
},
{
  "id": "secondorder02-exercises-find-general-solutions-7",
  "level": "2",
  "url": "secondorder02.html#secondorder02-exercises-find-general-solutions-7",
  "type": "Exercise",
  "number": "4.2.7.13",
  "title": "",
  "body": "    "
},
{
  "id": "secondorder02-exercises-find-general-solutions-8",
  "level": "2",
  "url": "secondorder02.html#secondorder02-exercises-find-general-solutions-8",
  "type": "Exercise",
  "number": "4.2.7.14",
  "title": "",
  "body": "    "
},
{
  "id": "secondorder02-exercises-find-general-solutions-9",
  "level": "2",
  "url": "secondorder02.html#secondorder02-exercises-find-general-solutions-9",
  "type": "Exercise",
  "number": "4.2.7.15",
  "title": "",
  "body": "    "
},
{
  "id": "secondorder02-exercises-find-general-solutions-10",
  "level": "2",
  "url": "secondorder02.html#secondorder02-exercises-find-general-solutions-10",
  "type": "Exercise",
  "number": "4.2.7.16",
  "title": "",
  "body": "  ,   "
},
{
  "id": "secondorder02-exercises-solve-ivps-3",
  "level": "2",
  "url": "secondorder02.html#secondorder02-exercises-solve-ivps-3",
  "type": "Exercise",
  "number": "4.2.7.17",
  "title": "",
  "body": "  , ,   "
},
{
  "id": "secondorder02-exercises-solve-ivps-4",
  "level": "2",
  "url": "secondorder02.html#secondorder02-exercises-solve-ivps-4",
  "type": "Exercise",
  "number": "4.2.7.18",
  "title": "",
  "body": "  , ,   "
},
{
  "id": "secondorder02-exercises-solve-ivps-5",
  "level": "2",
  "url": "secondorder02.html#secondorder02-exercises-solve-ivps-5",
  "type": "Exercise",
  "number": "4.2.7.19",
  "title": "",
  "body": "  , ,   "
},
{
  "id": "secondorder02-exercises-solve-ivps-6",
  "level": "2",
  "url": "secondorder02.html#secondorder02-exercises-solve-ivps-6",
  "type": "Exercise",
  "number": "4.2.7.20",
  "title": "",
  "body": "  , ,   "
},
{
  "id": "secondorder02-exercises-solve-ivps-7",
  "level": "2",
  "url": "secondorder02.html#secondorder02-exercises-solve-ivps-7",
  "type": "Exercise",
  "number": "4.2.7.21",
  "title": "",
  "body": "  , ,   "
},
{
  "id": "secondorder02-exercises-solve-ivps-8",
  "level": "2",
  "url": "secondorder02.html#secondorder02-exercises-solve-ivps-8",
  "type": "Exercise",
  "number": "4.2.7.22",
  "title": "",
  "body": "  , ,   "
},
{
  "id": "secondorder02-exercises-solve-ivps-9",
  "level": "2",
  "url": "secondorder02.html#secondorder02-exercises-solve-ivps-9",
  "type": "Exercise",
  "number": "4.2.7.23",
  "title": "",
  "body": "  , ,   "
},
{
  "id": "secondorder02-exercises-solve-ivps-10",
  "level": "2",
  "url": "secondorder02.html#secondorder02-exercises-solve-ivps-10",
  "type": "Exercise",
  "number": "4.2.7.24",
  "title": "",
  "body": "  , , ,   "
},
{
  "id": "secondorder02-exercises-5",
  "level": "2",
  "url": "secondorder02.html#secondorder02-exercises-5",
  "type": "Exercise",
  "number": "4.2.7.25",
  "title": "",
  "body": "  We define two functions, and , to be linearly independent linearly independent on an open interval if there do not exist nonzero constants and such that for all . Equivalently, two functions are linearly independent, if one function is not a multiple of the other. Otherwise, and are linearly dependent linearly dependent . Suppose that and are solutions to the homogeneous linear equation Show that and are linearly dependent on an interval if and only if , where is the Wronskian Wronskian of and .    Suppose that that and are linearly dependent on an interval . Then one function is a multiple of the other, say . Thus, .  Conversely, suppose that for all in . If , then and the two functions are linearly dependent. Assume that for some in . Since is differentiable, it must also be continuous and there is some interval contained in such that and does not vanish on this interval. Therefore, and is constant on the interval . Thus, and . Since and are both solutions to the differential equation and have the same initial condition, for all by the existence and uniqueness theorem. Consequently, and are linearly dependent.   "
},
{
  "id": "secondorder02-exercises-7",
  "level": "2",
  "url": "secondorder02.html#secondorder02-exercises-7",
  "type": "Exercise",
  "number": "4.2.7.26",
  "title": "",
  "body": "  Abel's Theorem Abel's Theorem . If and are solutions of the homogeneous equation where and are continuous on an open interval , show that for some constant that depends on and but not on .  Use Abel's Theorem to find the Wronskian of up to a constant multiple, where .  Prove Abel's Theorem.      We can rewrite as Since , Abel's Theorem tells us that  Since and are solutions to our differential equation, we know that Multiplying the first equation by and the second equation by and subtracting, we obtain If then and equation becomes This equation is separable with solution    "
},
{
  "id": "secondorder02-exercises-8",
  "level": "2",
  "url": "secondorder02.html#secondorder02-exercises-8",
  "type": "Exercise",
  "number": "4.2.7.27",
  "title": "",
  "body": "  The Method of Variation of Parameters Method of Variation of Parameters . In this problem we will describe another method of finding a particular solution to a nonhomogeneous equation, if we know know that the general solution to the homogeneous equation is   Assume that a particular solution of has the form where Substitute into the left-hand side of to show that  Show that where is the Wronskian of and .  If , , and are continuous on an interval , show that for any point in . Consequently, a particular solution to is  Find the general solution of the differential equation      If , then Substituting these expressions into equation , we have  If we solve the system for and , we obtain  Integrate the two equations from part (2).  The general solution to the homogeneous equation is To find a particular solution, assume that the solution has the form By part (2) Integrating, we obtain Therefore, and the general solution is    "
},
{
  "id": "secondorder03",
  "level": "1",
  "url": "secondorder03.html",
  "type": "Section",
  "number": "4.3",
  "title": "Sinusoidal Forcing",
  "body": " Sinusoidal Forcing    To understand and be able to use Euler's formula and complexification to solve the equation where the forcing function is or .  To understand and be able to use complex numbers to express solutions in the form where is the amplitude of the solution, is the frequency of the solution, and is the phase angle.     If we consider different forcing functions for the equation functions that are periodic are especially important. Recall that a function is periodic periodic function if for all and some fixed constant . The most familiar periodic functions are The period period of a function for each of these two functions is and the frequency frequency is . These two functions share the additional property that their average value is zero. That is, We say that sinusoidal forcing sinusoidal forcing occurs in the differential equation    Complexification  Given a second-order linear differential equation we can use Euler's formula, to derive a particular solution. That is, we will assume that our particular solution has the form and use the properties of complex numbers. If complex numbers make you uncomfortable, the alternative is to become an expert in trigonometric identities   Let us consider the equation The solution to the corresponding homogeneous equation, , is To find a particular solution, we can use the method of undetermined coefficients and assume that the solution has the form If we carry out the appropriate calculations, we will obtain a particular solution Thus, the general solution is Notice that all solutions of will approach the particular solution as .    Now let us solve using complex numbers. If we assume that the equation has a complex solution of the form , then Equating the real and imaginary parts of this equation, we obtain Thus, if we can find a complex solution, we can find a solution to simply by examining the imaginary part of the solution.  Now let us assume that our solution has the form . Then Equating the real and imaginary parts of this equation, we obtain and we immediately see that Therefore, the complex solution to is The imaginary part of this function is which is the particular solution that we have been seeking. Thus, our general solution agrees with what we found in .    Second-Order Linear Differential Equations and Complexification   Find (1) a particular solution and (2) a general solution for each of the following differential equations.                               Qualitative Analysis  We can use the complex solution of to analyze the qualitative behavior of solutions.   We discovered that the complex solution of to be , where . Let us rewrite in polar form. Since we know that where . Therefore, Our particular solution is the imaginary part of , where . We say that is the phase angle phase angle of our solution. The amplitude of our solution is and the period is ( ).      A = 1\/sqrt(145)  B = atan(-12)  f(t) = A*cos(2*t + B - pi\/2)          Steady state solution to     Finding Particular Solutions of the Form   Consider the differential equation     Find the general solution to the homogeneous equation .      Find the complex solution particular solution, to . That is, find for .      Determine and , so that is a particular solution to      Write from in polar form, to obtain the solution .      Find a real particular solution in the form .      Plot the solution you found in , labeling the amplitude, period, and frequency of your solution.     The corresponding first order system for the differential equation is This is a nonautonomous system nonautonomous system , and the tangent vector of a solution curve in the phase plane depends not only on the position , but also on the time . In other words, the direction field changes with time. Since the direction field changes with time, two solutions with the same value at different times can follow different paths. Consequently, solutions can cross each other in the -plane without violating the Existence and Uniqueness Theorem.   Consider the harmonic oscillator that is modeled by the differential equation The solution to the homogeneous equation is The complex version of this equation is and we will use the Method of Undetermined Coefficients and assume that we can find a particular solution of the form . Substituting into equation , we find that Thus, is a solution if We have The imaginary part of this function is the solution that we seek, Thus, the general solution to is  Now suppose that and . We can quickly determine that To solve this initial value problem, we must solve the linear system We obtain and , and the solution to our initial value problem is The graph of our solution is given in .      b = 2  k = 17  f(t,y) = (y[1],-k*y[0] - b*y[1] - 2*sin(3*t))           Solution to , ,   Since , we can now graph the solution curve in the phase plane ( ). Notice how the solution curve can intersect itself. The restoring force and damping are proportional to and , respectively. When and are close to the origin, the external force is as large or larger than the restoring and damping forces. In this part of the -plane, the external force overcomes the damping and pushes the solution away from the origin.      b = 2  k = 17  f(t,y) = (y[1],-k*y[0] - b*y[1] - 2*sin(3*t))          Phase Plane for , ,   On the other hand, suppose we have initial conditions and , we can solve the linear system to obtain and . Thus, solution to our initial value problem is The graph of our solution is given in .      b = 2  k = 17  f(t,y) = (y[1],-k*y[0] - b*y[1] - 2*sin(3*t))           Solution to , ,   If we examine the phase plane for this solution ( ), we see that the initial damping and restoring forces are much larger than the external force. Thus, if we are far from the origin, the solutions in the -plane tend to spiral towards the origin and are similar to the solutions of the unforced equation.      b = 2  k = 17  f(t,y) = (y[1],-k*y[0] - b*y[1] - 2*sin(3*t))          Solution to , ,      Important Lessons   The functions and are periodic with period and frequency . The average value of each of these functions is zero.  We can use Euler's formula and complexification to solve the equation where the forcing function is or . Furthermore, we can use complex numbers to express our solution in the form where is the amplitude of the solution, is the frequency of the solution, and is the phase angle.  If we write the equation as a first-order system, we obtain a nonautonomous system. In this case the direction field changes with time, and two solutions with the same value at different times can follow different paths. Therefore, solutions can cross each other without violating the Existence and Uniqueness Theorem.  If we are far from the origin, the solutions in the -plane tend to spiral towards the origin and are similar to the solutions of the unforced equation. When and are close to the origin, the external force is as large or larger than the restoring and damping forces. In this part of the -plane, the external force overcomes the damping and pushes the solution away from the origin.       What does complexification mean?       Is it possible for solution curves to intersect in the phase plane of a nonautonomous system? Why or why not?       Exercises   Finding Particular Solutions  Find a particular solution for each equation in using complexification.            Assume the complex solution has form .                                              Finding Frequencies, Amplitudes, and Phase Angles  Find a particular solution of the form for each equation in and determine the frequency , amplitude , and phase angle of the solution.            Assume the complex solution has form .                               Solving Initial Value Problems  Solve the initial problems in and discuss the long-term behavior of the solution.    , ,      , ,      , ,      , ,      , ,      , ,      , ,      "
},
{
  "id": "secondorder03-2",
  "level": "2",
  "url": "secondorder03.html#secondorder03-2",
  "type": "Objectives",
  "number": "4.3",
  "title": "",
  "body": "  To understand and be able to use Euler's formula and complexification to solve the equation where the forcing function is or .  To understand and be able to use complex numbers to express solutions in the form where is the amplitude of the solution, is the frequency of the solution, and is the phase angle.   "
},
{
  "id": "secondorder03-3-1",
  "level": "2",
  "url": "secondorder03.html#secondorder03-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "periodic period frequency sinusoidal forcing "
},
{
  "id": "secondorder03-example-sinusoidal",
  "level": "2",
  "url": "secondorder03.html#secondorder03-example-sinusoidal",
  "type": "Example",
  "number": "4.3.1",
  "title": "",
  "body": " Let us consider the equation The solution to the corresponding homogeneous equation, , is To find a particular solution, we can use the method of undetermined coefficients and assume that the solution has the form If we carry out the appropriate calculations, we will obtain a particular solution Thus, the general solution is Notice that all solutions of will approach the particular solution as .  "
},
{
  "id": "secondorder03-subsection-complexification-4",
  "level": "2",
  "url": "secondorder03.html#secondorder03-subsection-complexification-4",
  "type": "Example",
  "number": "4.3.2",
  "title": "",
  "body": " Now let us solve using complex numbers. If we assume that the equation has a complex solution of the form , then Equating the real and imaginary parts of this equation, we obtain Thus, if we can find a complex solution, we can find a solution to simply by examining the imaginary part of the solution.  Now let us assume that our solution has the form . Then Equating the real and imaginary parts of this equation, we obtain and we immediately see that Therefore, the complex solution to is The imaginary part of this function is which is the particular solution that we have been seeking. Thus, our general solution agrees with what we found in .  "
},
{
  "id": "secondorder03-subsection-complexification-5",
  "level": "2",
  "url": "secondorder03.html#secondorder03-subsection-complexification-5",
  "type": "Activity",
  "number": "4.3.1",
  "title": "Second-Order Linear Differential Equations and Complexification.",
  "body": " Second-Order Linear Differential Equations and Complexification   Find (1) a particular solution and (2) a general solution for each of the following differential equations.                            "
},
{
  "id": "secondorder03-subsection-qualitative-analysis-3",
  "level": "2",
  "url": "secondorder03.html#secondorder03-subsection-qualitative-analysis-3",
  "type": "Example",
  "number": "4.3.3",
  "title": "",
  "body": " We discovered that the complex solution of to be , where . Let us rewrite in polar form. Since we know that where . Therefore, Our particular solution is the imaginary part of , where . We say that is the phase angle phase angle of our solution. The amplitude of our solution is and the period is ( ).      A = 1\/sqrt(145)  B = atan(-12)  f(t) = A*cos(2*t + B - pi\/2)          Steady state solution to   "
},
{
  "id": "secondorder03-subsection-qualitative-analysis-4",
  "level": "2",
  "url": "secondorder03.html#secondorder03-subsection-qualitative-analysis-4",
  "type": "Activity",
  "number": "4.3.2",
  "title": "Finding Particular Solutions of the Form <span class=\"process-math\">\\(y_p = A \\cos(\\omega t - \\phi)\\)<\/span>.",
  "body": " Finding Particular Solutions of the Form   Consider the differential equation     Find the general solution to the homogeneous equation .      Find the complex solution particular solution, to . That is, find for .      Determine and , so that is a particular solution to      Write from in polar form, to obtain the solution .      Find a real particular solution in the form .      Plot the solution you found in , labeling the amplitude, period, and frequency of your solution.    "
},
{
  "id": "secondorder03-subsection-qualitative-analysis-5",
  "level": "2",
  "url": "secondorder03.html#secondorder03-subsection-qualitative-analysis-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "nonautonomous system "
},
{
  "id": "secondorder03-subsection-qualitative-analysis-6",
  "level": "2",
  "url": "secondorder03.html#secondorder03-subsection-qualitative-analysis-6",
  "type": "Example",
  "number": "4.3.5",
  "title": "",
  "body": " Consider the harmonic oscillator that is modeled by the differential equation The solution to the homogeneous equation is The complex version of this equation is and we will use the Method of Undetermined Coefficients and assume that we can find a particular solution of the form . Substituting into equation , we find that Thus, is a solution if We have The imaginary part of this function is the solution that we seek, Thus, the general solution to is  Now suppose that and . We can quickly determine that To solve this initial value problem, we must solve the linear system We obtain and , and the solution to our initial value problem is The graph of our solution is given in .      b = 2  k = 17  f(t,y) = (y[1],-k*y[0] - b*y[1] - 2*sin(3*t))           Solution to , ,   Since , we can now graph the solution curve in the phase plane ( ). Notice how the solution curve can intersect itself. The restoring force and damping are proportional to and , respectively. When and are close to the origin, the external force is as large or larger than the restoring and damping forces. In this part of the -plane, the external force overcomes the damping and pushes the solution away from the origin.      b = 2  k = 17  f(t,y) = (y[1],-k*y[0] - b*y[1] - 2*sin(3*t))          Phase Plane for , ,   On the other hand, suppose we have initial conditions and , we can solve the linear system to obtain and . Thus, solution to our initial value problem is The graph of our solution is given in .      b = 2  k = 17  f(t,y) = (y[1],-k*y[0] - b*y[1] - 2*sin(3*t))           Solution to , ,   If we examine the phase plane for this solution ( ), we see that the initial damping and restoring forces are much larger than the external force. Thus, if we are far from the origin, the solutions in the -plane tend to spiral towards the origin and are similar to the solutions of the unforced equation.      b = 2  k = 17  f(t,y) = (y[1],-k*y[0] - b*y[1] - 2*sin(3*t))          Solution to , ,   "
},
{
  "id": "rq-secondorder03-complexification",
  "level": "2",
  "url": "secondorder03.html#rq-secondorder03-complexification",
  "type": "Reading Question",
  "number": "4.3.4.1",
  "title": "",
  "body": "  What does complexification mean?    "
},
{
  "id": "rq-secondorder03-nonautonomous",
  "level": "2",
  "url": "secondorder03.html#rq-secondorder03-nonautonomous",
  "type": "Reading Question",
  "number": "4.3.4.2",
  "title": "",
  "body": "  Is it possible for solution curves to intersect in the phase plane of a nonautonomous system? Why or why not?    "
},
{
  "id": "secondorder03-exercises-find-particular-solutions-3",
  "level": "2",
  "url": "secondorder03.html#secondorder03-exercises-find-particular-solutions-3",
  "type": "Exercise",
  "number": "4.3.5.1",
  "title": "",
  "body": "    "
},
{
  "id": "secondorder03-exercises-find-particular-solutions-4",
  "level": "2",
  "url": "secondorder03.html#secondorder03-exercises-find-particular-solutions-4",
  "type": "Exercise",
  "number": "4.3.5.2",
  "title": "",
  "body": "     Assume the complex solution has form .   "
},
{
  "id": "secondorder03-exercises-find-particular-solutions-5",
  "level": "2",
  "url": "secondorder03.html#secondorder03-exercises-find-particular-solutions-5",
  "type": "Exercise",
  "number": "4.3.5.3",
  "title": "",
  "body": "    "
},
{
  "id": "secondorder03-exercises-find-particular-solutions-6",
  "level": "2",
  "url": "secondorder03.html#secondorder03-exercises-find-particular-solutions-6",
  "type": "Exercise",
  "number": "4.3.5.4",
  "title": "",
  "body": "    "
},
{
  "id": "secondorder03-exercises-find-particular-solutions-7",
  "level": "2",
  "url": "secondorder03.html#secondorder03-exercises-find-particular-solutions-7",
  "type": "Exercise",
  "number": "4.3.5.5",
  "title": "",
  "body": "    "
},
{
  "id": "secondorder03-exercises-find-particular-solutions-8",
  "level": "2",
  "url": "secondorder03.html#secondorder03-exercises-find-particular-solutions-8",
  "type": "Exercise",
  "number": "4.3.5.6",
  "title": "",
  "body": "    "
},
{
  "id": "secondorder03-exercises-find-particular-solutions-9",
  "level": "2",
  "url": "secondorder03.html#secondorder03-exercises-find-particular-solutions-9",
  "type": "Exercise",
  "number": "4.3.5.7",
  "title": "",
  "body": "    "
},
{
  "id": "secondorder03-exercises-find-particular-solutions-10",
  "level": "2",
  "url": "secondorder03.html#secondorder03-exercises-find-particular-solutions-10",
  "type": "Exercise",
  "number": "4.3.5.8",
  "title": "",
  "body": "    "
},
{
  "id": "secondorder03-exercises-find-particular-solutions-11",
  "level": "2",
  "url": "secondorder03.html#secondorder03-exercises-find-particular-solutions-11",
  "type": "Exercise",
  "number": "4.3.5.9",
  "title": "",
  "body": "    "
},
{
  "id": "secondorder03-exercises-find-particular-solutions-12",
  "level": "2",
  "url": "secondorder03.html#secondorder03-exercises-find-particular-solutions-12",
  "type": "Exercise",
  "number": "4.3.5.10",
  "title": "",
  "body": "    "
},
{
  "id": "secondorder03-exercises-find-freq-phase-3",
  "level": "2",
  "url": "secondorder03.html#secondorder03-exercises-find-freq-phase-3",
  "type": "Exercise",
  "number": "4.3.5.11",
  "title": "",
  "body": "    "
},
{
  "id": "secondorder03-exercises-find-freq-phase-4",
  "level": "2",
  "url": "secondorder03.html#secondorder03-exercises-find-freq-phase-4",
  "type": "Exercise",
  "number": "4.3.5.12",
  "title": "",
  "body": "     Assume the complex solution has form .   "
},
{
  "id": "secondorder03-exercises-find-freq-phase-5",
  "level": "2",
  "url": "secondorder03.html#secondorder03-exercises-find-freq-phase-5",
  "type": "Exercise",
  "number": "4.3.5.13",
  "title": "",
  "body": "    "
},
{
  "id": "secondorder03-exercises-find-freq-phase-6",
  "level": "2",
  "url": "secondorder03.html#secondorder03-exercises-find-freq-phase-6",
  "type": "Exercise",
  "number": "4.3.5.14",
  "title": "",
  "body": "    "
},
{
  "id": "secondorder03-exercises-find-freq-phase-7",
  "level": "2",
  "url": "secondorder03.html#secondorder03-exercises-find-freq-phase-7",
  "type": "Exercise",
  "number": "4.3.5.15",
  "title": "",
  "body": "    "
},
{
  "id": "secondorder03-exercises-find-freq-phase-8",
  "level": "2",
  "url": "secondorder03.html#secondorder03-exercises-find-freq-phase-8",
  "type": "Exercise",
  "number": "4.3.5.16",
  "title": "",
  "body": "    "
},
{
  "id": "secondorder03-exercises-find-freq-phase-9",
  "level": "2",
  "url": "secondorder03.html#secondorder03-exercises-find-freq-phase-9",
  "type": "Exercise",
  "number": "4.3.5.17",
  "title": "",
  "body": "    "
},
{
  "id": "secondorder03-exercises-solve-ivps-3",
  "level": "2",
  "url": "secondorder03.html#secondorder03-exercises-solve-ivps-3",
  "type": "Exercise",
  "number": "4.3.5.18",
  "title": "",
  "body": "  , ,   "
},
{
  "id": "secondorder03-exercises-solve-ivps-4",
  "level": "2",
  "url": "secondorder03.html#secondorder03-exercises-solve-ivps-4",
  "type": "Exercise",
  "number": "4.3.5.19",
  "title": "",
  "body": "  , ,   "
},
{
  "id": "secondorder03-exercises-solve-ivps-5",
  "level": "2",
  "url": "secondorder03.html#secondorder03-exercises-solve-ivps-5",
  "type": "Exercise",
  "number": "4.3.5.20",
  "title": "",
  "body": "  , ,   "
},
{
  "id": "secondorder03-exercises-solve-ivps-6",
  "level": "2",
  "url": "secondorder03.html#secondorder03-exercises-solve-ivps-6",
  "type": "Exercise",
  "number": "4.3.5.21",
  "title": "",
  "body": "  , ,   "
},
{
  "id": "secondorder03-exercises-solve-ivps-7",
  "level": "2",
  "url": "secondorder03.html#secondorder03-exercises-solve-ivps-7",
  "type": "Exercise",
  "number": "4.3.5.22",
  "title": "",
  "body": "  , ,   "
},
{
  "id": "secondorder03-exercises-solve-ivps-8",
  "level": "2",
  "url": "secondorder03.html#secondorder03-exercises-solve-ivps-8",
  "type": "Exercise",
  "number": "4.3.5.23",
  "title": "",
  "body": "  , ,   "
},
{
  "id": "secondorder03-exercises-solve-ivps-9",
  "level": "2",
  "url": "secondorder03.html#secondorder03-exercises-solve-ivps-9",
  "type": "Exercise",
  "number": "4.3.5.24",
  "title": "",
  "body": "  , ,   "
},
{
  "id": "secondorder04",
  "level": "1",
  "url": "secondorder04.html",
  "type": "Section",
  "number": "4.4",
  "title": "Forcing and Resonance",
  "body": " Forcing and Resonance    To understand how the natural frequency, , interacts with the frequency of the forcing term, in an undamped harmonic oscillator If the two frequencies are the same, we can observe a phenomenon called resonance . If the two frequencies are close, we can observe a phenomenon called beats .  To understand that the gain (or frequency response) of a forced damped harmonic oscillator, is defined as the absolute value of the ratio of the output amplitude to the steady-state input amplitude and that the amplitude and phase of the steady-state solution is given by     Resonance happens when the natural frequency and the forcing frequency of an undamped harmonic oscillator are the same. There are many real world examples of resonance. For example, it is possible for a trained singer to shatter a champagne glass by simply singing the correct note (see ). Shattering a glass by singing the correct note can be modeled by an equation of an undamped harmonic oscillator with sinusoidal forcing. While a certain amount of damping occurs in all physical systems, the damping is often so small that it makes sense to use an undamped harmonic oscillator.    Resonance  Resonance was responsible for the collapse of the Broughton suspension bridge near Manchester, England in 1831. The collapse occurred when a column of soldiers marched in cadence over the bridge, setting up a periodic force of rather large amplitude. The frequency of the force was approximately equal to the natural frequency of the bridge. Thus, the bridge collapsed when large oscillations occurred. For this reason soldiers are ordered to break cadence whenever they cross a bridge.  The Millennium Bridge, the first new bridge to span the Thames River in London in over 100 years, is a modern example of how resonance can effect a bridge ( ). This pedestrian bridge, which opened to the public in June 2000, was quickly closed after the bridge experienced high amplitude horizontal oscillations during periods of high traffic. Studies by designers found that the bridge experienced high amplitude horizontal oscillations in response to horizontal forcing at a rate of one cycle per second. Typically, people walk at a rate of two steps per second, so the time between two successive steps of the left foot is about one second. Thus, if people were to walk in cadence, they could set up strong horizontal forcing that would place a destructive load on the bridge. The engineers did not envision this to be a problem since tourists do not generally march in time. However, a video of tourists crossing the bridge revealed the opposite. When the bridge began oscillating, people tended to walk in cadence in order to keep their balance ( ).   The Millennium Bridge   a photo of the Millennium Bridge in London    Consider the case of an undamped harmonic oscillator with a sinusoidal forcing function. We know that we can model this situation with the second-order linear differential equation Since the homogeneous solution to this equation is we can see that the natural frequency natural frequency of the harmonic oscillator is . This is the frequency of the oscillations if there is no forcing term. Depending on whether or not the frequency of the forcing term is equal to the natural frequency, we will have two very different situations. If the two frequencies are equal, then they will re-enforce one another and we will have resonance resonance . If the two frequencies are close but not equal, we will see the phenomenon of beats beats . We wish to investigate what happens when the driving frequency driving frequency  is equal to the natural frequency and when it is not.    natural frequency     driving frequency   Let us examine the case where the forcing frequency and the natural frequency of the oscillator are the same, Since is a solution to the homogeneous equation , we cannot assume that a particular solution to equation has the form . Equivalently, if we use the complex method, we cannot assume that our solution has the form . Therefore, we will look for a complex solution of the form for the complex equation that corresponds to , In this case, Substituting and into the left-hand side of , we have In order for to be a solution to , we must have Thus, our solution to the complex form of the differential equation is The real part of , is a particular solution to . Thus, our general solution is   Now let us consider the initial value problem where and . The solution to the homogeneous equation is To find a particular solution to , we will use the complex method and try to find a particular solution to . We must assume that the solution has the form , since is a solution to the homogeneous equation. As before, we have . If we substitute and into the left-hand side of our differential equation, we have Therefore, and our complex solution is Taking the real part of our complex solution, we have a particular solution Thus, the general solution to is Applying the initial conditions, both and . Consequently, the solution to the initial value problem is The graph of this solution is given in . Notice that our solution grows with time. This growth is due to the fact that the frequency of the forcing term is equal to the natural frequency of the oscillator. Since the force pulls and pushes at a frequency equal to the natural frequency of the oscillator, the amplitude increases with time. This type of behavior is called resonance .      f(x) =1\/6*x*sin(12*x)            The solution to , , .     Resonance   Solve each of the following initial value problems and plot the solution for . In each case, what is the natural (and forcing) frequency of the harmonic oscillator?                Beats or the Case  If the forcing frequency and natural frequency are not equal but close, then we have the phenomenon of beats. For example, a piano tuner uses this phenomenon to make certain that a particular string is correctly tuned. The tuner will strike a tuning fork which vibrates at the correct frequency. Next, the tuner hits the poorly tuned piano string. This modulation gives rise to beats in the tone that are readily audible. When the string is properly tuned, the beats will go away. To see another example of beats, watch the video .  To understand the situation where the forcing and natural frequencies differ by a small amount, , we will first consider the equation, The solution to the homogeneous equation is Since the forcing frequency is not equal to the natural frequency, we can look for a particular solution to the complex of the form of equation , If we assume that our solution has the form and substitute into the left-hand side of , we find Therefore, for to be a solution for we must have The real part of is a particular solution to , Thus, the general solution to is  Now let us examine the case where the motion starts at equilibrium. That is, we will investigate what happens when and . In this case, we can easily determine that and . Hence the solution to our initial value problem is Thus, we have a superposition to two oscillations of different frequencies.  To understand how the superposition of the two frequencies works, we will let be the mean frequency mean frequency and be the half difference half difference . Since and , we know that Thus, we have a sine function, whose amplitude varies according to , and    mean frequency     half difference    In the initial value problem we have , , and . The solution to this equation is The graph of this solution is given in and illustrate the phenomenon of beats . The two frequencies are almost equal and interfere with each other.      f(x) =4\/25*cos(13*x) + 4\/25*cos(12*x)            The solution to , , .   In our example, and . The factor in oscillates very slowly in comparison to . Thus, we can view the solution as a fast oscillation with a frequency and amplitude which oscillates much more slowly. If we superimpose the graph of onto the graph in , we obtain an envelope envelope of the faster oscillation.      f(x) =-4\/25*cos(13*x) + 4\/25*cos(12*x)  A = 4  omega = 13  omega0 = 12  delta = (omega0 - omega)\/2  omegabar = (omega0 + omega)\/2  u(x)=(A\/(2*omegabar*delta))*sin(delta*x)  l(x)=-(A\/(2*omegabar*delta))*sin(delta*x)        x(t)  |(A\/2 \\overline{\\omega} \\delta) \\sin \\delta t|        Envelope for the initial value problem     Beats   Consider the initial value problem     Solve the initial value problem and plot its solution.      Calculate the mean frequency, , and the half difference, , where is the natural frequency and is the forcing frequency and rewrite the solution to the initial value problem in the form .      Plot the envelope, , over the plot of the solution to the initial value problem.      Discuss what is going on in this activity.       Forced Damped Harmonic Motion  Since perpetual motion does not really exist, we should consider what happens when we add some damping to our harmonic oscillator,   Let us consider the differential equation The corresponding homogeneous equation is which has solution To find a particular solution for the equation , we will look for a solution of the form to the equation and then set to the real part of the solution. Substituting into the lefthand side of , we obtain where is the characteristic polynomial of . Therefore, and the solution to the complex equation is Thus, we can determine a particular solution by taking the real part of , The general solution for is It is easy to see that all solutions approach as no matter what the initial conditions may be. However, it would be much more useful if we would write the particular solution in the form for some constants and rather than a linear combination of and .   Returning to the general case, the associated homogeneous equation for is The characteristic polynomial of , has roots If our harmonic oscillator is undedamped ( ), then the solution to the homogeneous equation is where .  As in , we will look for a particular solution to by examining the equivalent complex differential equation. That is, we shall look for a solution of the form to the equation and then set equal to the real part of our solution. Substituting into the right-hand side of , we obtain where is the characteristic polynomial . Thus, equation becomes and where We say that is the transfer function transfer function .  Let us examine the transfer function more closely to see if we can use it to write our particular solution in a more useable form. First, let us write in polar form, where and is the angle defined by the equations Since , we know that . Equivalently, . Thus, Therefore, we can write the transfer function as We define the gain gain to be and we will rewrite the transfer function as Thus, the solution to is Taking the real part of , our particular solution is  It is now clear that particular solution has the same frequency as the forcing term. In addition, is out of phase with the driving force by the amount The general solution to is Since has the factor , the homogeneous part of the solution quickly decays to zero as . For this reason, is called the transient term transient term while is called the steady-state term steady-state term .    transfer function     gain    Let us examine the steady-state solution of the harmonic oscillator in . We have already determined that the second-order linear differential equation has solution The natural frequency is If we choose the initial conditions so that and , our transient term is Since , , and , the gain is , the amplitude of the steady state solution is . The phase is The solution and the steady-state solution are given in . As we can see, transient solutions can be quite large when compared to steady-state solutions.      b = 5  k = 4  f(t) = exp(-t)*sin(t) - 21\/130*cos(4*t) + 6\/65*sin(4*t)  g(t) = - 21\/130*cos(4*t) + 6\/65*sin(4*t)       x_h + x_p  x_p        A forced damped harmonic oscillator and the steady-state solution.    Large transient currents can be destructive in electrical circuits. For example, a light bulb usually burns out when a large transient flows through an already weakened bulb. This, usually occurs at the time the light bulb is turned on or turned off. Large transient currents are particularly harmful to the hard drive in a computer. For this reason, computers should be left on except in the case that they are not being used for a period of several days.    Important Lessons   A forced damped harmonic oscillator, has homogeneous solution where . A particular solution is given by where the phase angle is and the gain is given by  The amplitude and phase of the steady-state solution, are determined by where and .  In an undamped harmonic oscillators with a sinusoidal forcing term, the natural frequency of the solution interacts with the frequency of the forcing term. As the frequency of the forcing term approaches the natural frequency of the equation, we can observe a phenomenon called resonance . We can use the equation to model an undamped harmonic oscillator with sinusoidal forcing.  If the driving frequency is not equal to the natural frequency ( ), we have a particular solution If the two frequencies are close, we can see a phenomenon called beats .  If the driving frequency is equal to the natural frequency, we have a particular solution In this case, we can see the resonance phenomenon.  A forced damped harmonic oscillator, has homogeneous solution where . A particular solution is given by where the phase angle is and the gain is given by       Describe what resonance means in your own words.       Describe in words alone what the steady state solution of a damped harmonic oscillator is.       Exercises   Beats and Resonance  Solve the initial problems in . Do you find any beats or resonance?    , ,      , ,      , ,      , ,      , ,      , ,      Plotting the Envelope for Beats  For each of the functions in compute the envelope function. Then plot and the envelope function on the same set of axes.    .      .      .      .       Consider the function .  Find the mean frequency and half difference .  Use (a) to show that You will find the following trigonmetric identity very useful,  Using (b), plot the graph of and on the same axes.       For large , every solution of oscillates with angular frequency and amplitude given by That is, the amplitude of is a function of the parameters , , and .  Compute .  For fixed and , let denote the maximum value of as a function of . Compute an expression for .  Set and plot as a function of .  Explain why is proportional to as .       Let us examine the amplitude and phase of the steady-state solution, where Now let and . These new constants, and , measure the ratio of the driving frequency to the natural frequency and the effect of the damping force, respectively. Thus, or This expression shows us how the gain varies as varies. The natural frequency is fixed in and is proportional to the damping constant.     "
},
{
  "id": "secondorder04-2",
  "level": "2",
  "url": "secondorder04.html#secondorder04-2",
  "type": "Objectives",
  "number": "4.4",
  "title": "",
  "body": "  To understand how the natural frequency, , interacts with the frequency of the forcing term, in an undamped harmonic oscillator If the two frequencies are the same, we can observe a phenomenon called resonance . If the two frequencies are close, we can observe a phenomenon called beats .  To understand that the gain (or frequency response) of a forced damped harmonic oscillator, is defined as the absolute value of the ratio of the output amplitude to the steady-state input amplitude and that the amplitude and phase of the steady-state solution is given by   "
},
{
  "id": "secondorder04-figure-millennium-bridge",
  "level": "2",
  "url": "secondorder04.html#secondorder04-figure-millennium-bridge",
  "type": "Figure",
  "number": "4.4.1",
  "title": "",
  "body": " The Millennium Bridge   a photo of the Millennium Bridge in London   "
},
{
  "id": "secondorder04-subsection-resonance-5",
  "level": "2",
  "url": "secondorder04.html#secondorder04-subsection-resonance-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "natural frequency resonance beats driving frequency "
},
{
  "id": "secondorder04-subsection-resonance-9",
  "level": "2",
  "url": "secondorder04.html#secondorder04-subsection-resonance-9",
  "type": "Example",
  "number": "4.4.2",
  "title": "",
  "body": " Now let us consider the initial value problem where and . The solution to the homogeneous equation is To find a particular solution to , we will use the complex method and try to find a particular solution to . We must assume that the solution has the form , since is a solution to the homogeneous equation. As before, we have . If we substitute and into the left-hand side of our differential equation, we have Therefore, and our complex solution is Taking the real part of our complex solution, we have a particular solution Thus, the general solution to is Applying the initial conditions, both and . Consequently, the solution to the initial value problem is The graph of this solution is given in . Notice that our solution grows with time. This growth is due to the fact that the frequency of the forcing term is equal to the natural frequency of the oscillator. Since the force pulls and pushes at a frequency equal to the natural frequency of the oscillator, the amplitude increases with time. This type of behavior is called resonance .      f(x) =1\/6*x*sin(12*x)            The solution to , , .   "
},
{
  "id": "secondorder04-subsection-resonance-10",
  "level": "2",
  "url": "secondorder04.html#secondorder04-subsection-resonance-10",
  "type": "Activity",
  "number": "4.4.1",
  "title": "Resonance.",
  "body": " Resonance   Solve each of the following initial value problems and plot the solution for . In each case, what is the natural (and forcing) frequency of the harmonic oscillator?             "
},
{
  "id": "secondorder04-subsection-beats-5",
  "level": "2",
  "url": "secondorder04.html#secondorder04-subsection-beats-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "mean frequency half difference "
},
{
  "id": "secondorder04-subsection-beats-8",
  "level": "2",
  "url": "secondorder04.html#secondorder04-subsection-beats-8",
  "type": "Example",
  "number": "4.4.4",
  "title": "",
  "body": " In the initial value problem we have , , and . The solution to this equation is The graph of this solution is given in and illustrate the phenomenon of beats . The two frequencies are almost equal and interfere with each other.      f(x) =4\/25*cos(13*x) + 4\/25*cos(12*x)            The solution to , , .   In our example, and . The factor in oscillates very slowly in comparison to . Thus, we can view the solution as a fast oscillation with a frequency and amplitude which oscillates much more slowly. If we superimpose the graph of onto the graph in , we obtain an envelope envelope of the faster oscillation.      f(x) =-4\/25*cos(13*x) + 4\/25*cos(12*x)  A = 4  omega = 13  omega0 = 12  delta = (omega0 - omega)\/2  omegabar = (omega0 + omega)\/2  u(x)=(A\/(2*omegabar*delta))*sin(delta*x)  l(x)=-(A\/(2*omegabar*delta))*sin(delta*x)        x(t)  |(A\/2 \\overline{\\omega} \\delta) \\sin \\delta t|        Envelope for the initial value problem   "
},
{
  "id": "secondorder04-subsection-beats-9",
  "level": "2",
  "url": "secondorder04.html#secondorder04-subsection-beats-9",
  "type": "Activity",
  "number": "4.4.2",
  "title": "Beats.",
  "body": " Beats   Consider the initial value problem     Solve the initial value problem and plot its solution.      Calculate the mean frequency, , and the half difference, , where is the natural frequency and is the forcing frequency and rewrite the solution to the initial value problem in the form .      Plot the envelope, , over the plot of the solution to the initial value problem.      Discuss what is going on in this activity.    "
},
{
  "id": "example-secondorder04-force-damped",
  "level": "2",
  "url": "secondorder04.html#example-secondorder04-force-damped",
  "type": "Example",
  "number": "4.4.7",
  "title": "",
  "body": " Let us consider the differential equation The corresponding homogeneous equation is which has solution To find a particular solution for the equation , we will look for a solution of the form to the equation and then set to the real part of the solution. Substituting into the lefthand side of , we obtain where is the characteristic polynomial of . Therefore, and the solution to the complex equation is Thus, we can determine a particular solution by taking the real part of , The general solution for is It is easy to see that all solutions approach as no matter what the initial conditions may be. However, it would be much more useful if we would write the particular solution in the form for some constants and rather than a linear combination of and .  "
},
{
  "id": "secondorder04-subsection-forced-damped-5",
  "level": "2",
  "url": "secondorder04.html#secondorder04-subsection-forced-damped-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "transfer function "
},
{
  "id": "secondorder04-subsection-forced-damped-6",
  "level": "2",
  "url": "secondorder04.html#secondorder04-subsection-forced-damped-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "gain "
},
{
  "id": "secondorder04-subsection-forced-damped-7",
  "level": "2",
  "url": "secondorder04.html#secondorder04-subsection-forced-damped-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "transient term steady-state term "
},
{
  "id": "secondorder04-subsection-forced-damped-10",
  "level": "2",
  "url": "secondorder04.html#secondorder04-subsection-forced-damped-10",
  "type": "Example",
  "number": "4.4.8",
  "title": "",
  "body": " Let us examine the steady-state solution of the harmonic oscillator in . We have already determined that the second-order linear differential equation has solution The natural frequency is If we choose the initial conditions so that and , our transient term is Since , , and , the gain is , the amplitude of the steady state solution is . The phase is The solution and the steady-state solution are given in . As we can see, transient solutions can be quite large when compared to steady-state solutions.      b = 5  k = 4  f(t) = exp(-t)*sin(t) - 21\/130*cos(4*t) + 6\/65*sin(4*t)  g(t) = - 21\/130*cos(4*t) + 6\/65*sin(4*t)       x_h + x_p  x_p        A forced damped harmonic oscillator and the steady-state solution.   "
},
{
  "id": "secondorder04-subsection-important-lessons-2",
  "level": "2",
  "url": "secondorder04.html#secondorder04-subsection-important-lessons-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "resonance beats resonance "
},
{
  "id": "rq-secondorder04-resonance",
  "level": "2",
  "url": "secondorder04.html#rq-secondorder04-resonance",
  "type": "Reading Question",
  "number": "4.4.5.1",
  "title": "",
  "body": "  Describe what resonance means in your own words.    "
},
{
  "id": "rq-secondorder04-steady-state",
  "level": "2",
  "url": "secondorder04.html#rq-secondorder04-steady-state",
  "type": "Reading Question",
  "number": "4.4.5.2",
  "title": "",
  "body": "  Describe in words alone what the steady state solution of a damped harmonic oscillator is.    "
},
{
  "id": "secondorder04-exercises-beats-resonance-3",
  "level": "2",
  "url": "secondorder04.html#secondorder04-exercises-beats-resonance-3",
  "type": "Exercise",
  "number": "4.4.6.1",
  "title": "",
  "body": "  , ,   "
},
{
  "id": "secondorder04-exercises-beats-resonance-4",
  "level": "2",
  "url": "secondorder04.html#secondorder04-exercises-beats-resonance-4",
  "type": "Exercise",
  "number": "4.4.6.2",
  "title": "",
  "body": "  , ,   "
},
{
  "id": "secondorder04-exercises-beats-resonance-5",
  "level": "2",
  "url": "secondorder04.html#secondorder04-exercises-beats-resonance-5",
  "type": "Exercise",
  "number": "4.4.6.3",
  "title": "",
  "body": "  , ,   "
},
{
  "id": "secondorder04-exercises-beats-resonance-6",
  "level": "2",
  "url": "secondorder04.html#secondorder04-exercises-beats-resonance-6",
  "type": "Exercise",
  "number": "4.4.6.4",
  "title": "",
  "body": "  , ,   "
},
{
  "id": "secondorder04-exercises-beats-resonance-7",
  "level": "2",
  "url": "secondorder04.html#secondorder04-exercises-beats-resonance-7",
  "type": "Exercise",
  "number": "4.4.6.5",
  "title": "",
  "body": "  , ,   "
},
{
  "id": "secondorder04-exercises-beats-resonance-8",
  "level": "2",
  "url": "secondorder04.html#secondorder04-exercises-beats-resonance-8",
  "type": "Exercise",
  "number": "4.4.6.6",
  "title": "",
  "body": "  , ,   "
},
{
  "id": "secondorder04-exercises-graph-beats-3",
  "level": "2",
  "url": "secondorder04.html#secondorder04-exercises-graph-beats-3",
  "type": "Exercise",
  "number": "4.4.6.7",
  "title": "",
  "body": "  .   "
},
{
  "id": "secondorder04-exercises-graph-beats-4",
  "level": "2",
  "url": "secondorder04.html#secondorder04-exercises-graph-beats-4",
  "type": "Exercise",
  "number": "4.4.6.8",
  "title": "",
  "body": "  .   "
},
{
  "id": "secondorder04-exercises-graph-beats-5",
  "level": "2",
  "url": "secondorder04.html#secondorder04-exercises-graph-beats-5",
  "type": "Exercise",
  "number": "4.4.6.9",
  "title": "",
  "body": "  .   "
},
{
  "id": "secondorder04-exercises-graph-beats-6",
  "level": "2",
  "url": "secondorder04.html#secondorder04-exercises-graph-beats-6",
  "type": "Exercise",
  "number": "4.4.6.10",
  "title": "",
  "body": "  .   "
},
{
  "id": "secondorder04-exercises-4",
  "level": "2",
  "url": "secondorder04.html#secondorder04-exercises-4",
  "type": "Exercise",
  "number": "4.4.6.11",
  "title": "",
  "body": "  Consider the function .  Find the mean frequency and half difference .  Use (a) to show that You will find the following trigonmetric identity very useful,  Using (b), plot the graph of and on the same axes.    "
},
{
  "id": "secondorder04-exercises-5",
  "level": "2",
  "url": "secondorder04.html#secondorder04-exercises-5",
  "type": "Exercise",
  "number": "4.4.6.12",
  "title": "",
  "body": "  For large , every solution of oscillates with angular frequency and amplitude given by That is, the amplitude of is a function of the parameters , , and .  Compute .  For fixed and , let denote the maximum value of as a function of . Compute an expression for .  Set and plot as a function of .  Explain why is proportional to as .    "
},
{
  "id": "secondorder04-exercises-6",
  "level": "2",
  "url": "secondorder04.html#secondorder04-exercises-6",
  "type": "Exercise",
  "number": "4.4.6.13",
  "title": "",
  "body": "  Let us examine the amplitude and phase of the steady-state solution, where Now let and . These new constants, and , measure the ratio of the driving frequency to the natural frequency and the effect of the damping force, respectively. Thus, or This expression shows us how the gain varies as varies. The natural frequency is fixed in and is proportional to the damping constant.   "
},
{
  "id": "secondorder05",
  "level": "1",
  "url": "secondorder05.html",
  "type": "Section",
  "number": "4.5",
  "title": "Projects for Second-Order Differential Equations",
  "body": " Projects for Second-Order Differential Equations   Project Tuning a Circuit   Differential equations prove exceptional at modeling electrical circuits. In , we modeled a simple RLC circuit, which is fundamental to larger circuit building. We found that circuits with the three of the most fundamental electrical objects, resistors, capacitors, and inductors, can be modeled by constant coefficient, linear, second order differential equations. Consider the circuit in . We found that the circuit can be modeled by where is the current flowing through the circuit, is the impressed voltage, is the resistance , and is the capacitance. Of course we will also need to know and if we wish to formulate an initial value problem. Notice that is very similar to the spring-mass model developed in , where is the mass, is the damping coefficient, and is the spring constant ( ). This project is adapted from Brian Winkel (2016), 4-060-S-CircuitTuner,  .     Spring-Mass Model RLC Circuit    mass inductance    damping resistance    spring constant inverse of capacitance    forcing function derivative of induced voltage    Comparison of terms between spring-mass and RLC circuit differential equations     Simple RLC Circuit Model, Solution, and Interpretation   We now examine a circuit in which a current is present and does not have a driving , expecting things to dampen out, in this case current to run out. Let us consider an RLC circuit as depicted in in which we have an initial current, amps with a resistance of ohms, an inductance of henry, and a capacitance of farads. Since we have some current in the circuit already at the start we shall not need an inducing , so . Let us see what happens to the current in the circuit by solving the appropriate RLC circuit differential equation Of course, this initial value problem might be easier analyze in the form,     Solve the RLC circuit differential equation for . If you use Sage to solve this equation, remember that I is the reserved symbol for , the square root of .      Consider the values of to be , , , , , and then , and solve in each case, keeping all other values the same. Plot the solutions for the current in the circuit over the time interval s with a vertical plot interval in each case. Identify each plot with its associated value and describe what is happening to the current, , in each corresponding circuit over time, .       Let us consider the differential for an RLC circuit with driving voltage (current ), We can use Sage to solve this equation.   The solution is pretty long, but notice that is the transient solution that approaches zero as and then there is the steady state solution,  We would like to study gain , the ratio of the amplitude of the steady state output voltage, to the amplitude of the input voltage, , or . We measure as the amplitude of the steady state voltage across the resistance in the circuit or In our case is just 1 for .     Trigonometry Pause and Phase Angle   The initial value problem has the following solution when the discriminant , If we let , then simplifies to  We wish to combine the sine and cosine terms in into one sine function with a phase angle. We can do this because of the trigonometric identity, Letting and , we have where ( ). The angle is called the phase shift .             \\sqrt{A^2 + B^2}    B    A    \\theta         A triangle diagram that is used in obtaining a single phase shifted solution from the sum of sine and cosine terms in solution   The differential equation has solution The phase shifted form of is where and radians.      f(t) = sin(4*t)  g(t) = 3*sin(4*t) + 4*cos(4*t)          0.231824    \\sin(4t)  3\\sin(4t) + 4\\cos(4t)        A plot of the oscillating portion (not damped), , of the solution with its simple frequency curve . Notice the phase angle here of radians from bottom to bottom illustrating what we mean by out of phase by a phase angle of radians.      Solve the initial value problem      Convert the solution to phase angle format and compute the phase angle in radians.      Plot both solutions in and on the same axis over the interval to confirm your analysis. What should you see?      Back to the Circuit   In our study of phase angle representation in the previous section we saw that the and terms of can be combined into one sine term (albeit with a phase angle) with one amplitude, Thus, our gain (recall, gain is the ratio of the amplitude of the steady state output voltage, , to the amplitude of the input voltage, ) is Here, for and has amplitude , which is a function of , , , and . Gain is a measure of the response of the circuit to input voltage , which in this case is .  Let us fix at ohm and at henry and see what gain is in this case as a function of over a range of values. Let us tune this circuit by changing , the size of the capacitance in the circuit and see how gain changes as input voltage frequency, , changes.       R = 1  L = 1    input frequency  gain   C = 0.0005  g1(t) = R*sqrt((C^2*t^2)\/(C^2*L^2*t^4 + (C^2*R*2 - 2*C*L)*t^2+1))   C = 0.005  g2(t) = R*sqrt((C^2*t^2)\/(C^2*L^2*t^4 + (C^2*R*2 - 2*C*L)*t^2+1))   C = 0.05  g3(t) = R*sqrt((C^2*t^2)\/(C^2*L^2*t^4 + (C^2*R*2 - 2*C*L)*t^2+1))   C = 0.5  g4(t) = R*sqrt((C^2*t^2)\/(C^2*L^2*t^4 + (C^2*R*2 - 2*C*L)*t^2+1))    C = 0.0005  C = 0.005  C = 0.05  C = 0.5        Plot of gain as a function of input frequency, , for various values of capacitance, , , , farads in with ohm and henry.   illustrates the power of differential equation modeling. For we can alter parameters in our equation and see the results in a physical (in this case electrical) system. Indeed, we see in this plot that for a capacitance of farads if we have an input voltage with a frequency around ( to be precise) then the gain is greatest. Optimization is a calculus problem and we merely have to take the derivative of gain with respect to and find where it is . All other frequencies give smaller gain for this particular capacitance. In fact, we can say that as we decrease our capacitance the optimal frequency; i.e., frequency which gives highest gain, decreases and we might want to look into this for a more exact relationship. We shall do that in .  Put another way, we see that if our input voltage has a specific frequency, , there is a unique capacitance, , for this circuit that will maximize our gain. By changing we can tune our circuit to maximize gain for a given input frequency, . This is, in fact, how we tune a radio, for we change the capacitance of the radio's circuit so as to maximize the gain for the frequency (on our dial) that we wish to hear. So, the next time you try to find the station where Cousin Brucie is dedicating a Top Ten song from Billie Bob to Sally May know that a differential equation describes exactly what you are doing. How's that for cool?     Use your understanding of RLC circuits to show for an imposed on the RLC circuit given by the maximum gain is obtained when and thus we could tune our radio by changing the inductance as well, if that were as convenient as changing the capacitance, which it is not. So let us stick to tuning by changing the capacitance .      Tune the Radio   Tune the Radio. The Amplitude Modulated (AM) radio carrier frequencies are in the frequency range 535 1605 kHz. One Hz means cycle per second while kHz means cycles per second. The unit Hz is called a hertz. Carrier frequencies of 540 to 1600 kHz are assigned at 10 kHz intervals. The (Frequency Modulated (FM) radio band is from 88 to 108 MHz. HyperPhysics. 2009. AM and FM Radio Frequencies. Accessed 18 September 2016. Recall 1 kHz means 1,000 cycles per second. So 660 kHz is oscillation at the rate of 660,000 cycles per second. We offer up a radio , where , and ask you to tune in several stations by changing the capacitance and computing the optimal gain for these stations.  We will have to tell the circuit what initial current is present; i.e., usually until we turn the switch on and also we can presume there is no change in the current intially; i.e., . Let us build this radio with the following values: , henrys, ohms, and in farads can vary as needed to tune to various input frequencies . We note that if we wish to have, say 540 kHz, then , and in general to have x kHz we will need .     Solve the differential equation for the radio circuit.      Collect the coefficients and of the steady state and terms, respectively. Show that all other terms will dissipate, i.e. go to zero quickly, leaving only and terms.      Using the information above compute the gain as a function of capacitance and input voltage frequency .      For a given input voltage frequency determine the maximum gain for this circuit.      For several AM frequencies, say 540 kHz ( ), 880 kHz ( ), and 1520 kHz ( ), plot gain as a function of the capacitance to demonstrate that your maximum gain is what your formula in predicts and that your radio is tuned in.        "
},
{
  "id": "secondorder05-project-circuit-tuner",
  "level": "2",
  "url": "secondorder05.html#secondorder05-project-circuit-tuner",
  "type": "Project",
  "number": "4.5.1",
  "title": "Project—Tuning a Circuit.",
  "body": " Project Tuning a Circuit   Differential equations prove exceptional at modeling electrical circuits. In , we modeled a simple RLC circuit, which is fundamental to larger circuit building. We found that circuits with the three of the most fundamental electrical objects, resistors, capacitors, and inductors, can be modeled by constant coefficient, linear, second order differential equations. Consider the circuit in . We found that the circuit can be modeled by where is the current flowing through the circuit, is the impressed voltage, is the resistance , and is the capacitance. Of course we will also need to know and if we wish to formulate an initial value problem. Notice that is very similar to the spring-mass model developed in , where is the mass, is the damping coefficient, and is the spring constant ( ). This project is adapted from Brian Winkel (2016), 4-060-S-CircuitTuner,  .     Spring-Mass Model RLC Circuit    mass inductance    damping resistance    spring constant inverse of capacitance    forcing function derivative of induced voltage    Comparison of terms between spring-mass and RLC circuit differential equations     Simple RLC Circuit Model, Solution, and Interpretation   We now examine a circuit in which a current is present and does not have a driving , expecting things to dampen out, in this case current to run out. Let us consider an RLC circuit as depicted in in which we have an initial current, amps with a resistance of ohms, an inductance of henry, and a capacitance of farads. Since we have some current in the circuit already at the start we shall not need an inducing , so . Let us see what happens to the current in the circuit by solving the appropriate RLC circuit differential equation Of course, this initial value problem might be easier analyze in the form,     Solve the RLC circuit differential equation for . If you use Sage to solve this equation, remember that I is the reserved symbol for , the square root of .      Consider the values of to be , , , , , and then , and solve in each case, keeping all other values the same. Plot the solutions for the current in the circuit over the time interval s with a vertical plot interval in each case. Identify each plot with its associated value and describe what is happening to the current, , in each corresponding circuit over time, .       Let us consider the differential for an RLC circuit with driving voltage (current ), We can use Sage to solve this equation.   The solution is pretty long, but notice that is the transient solution that approaches zero as and then there is the steady state solution,  We would like to study gain , the ratio of the amplitude of the steady state output voltage, to the amplitude of the input voltage, , or . We measure as the amplitude of the steady state voltage across the resistance in the circuit or In our case is just 1 for .     Trigonometry Pause and Phase Angle   The initial value problem has the following solution when the discriminant , If we let , then simplifies to  We wish to combine the sine and cosine terms in into one sine function with a phase angle. We can do this because of the trigonometric identity, Letting and , we have where ( ). The angle is called the phase shift .             \\sqrt{A^2 + B^2}    B    A    \\theta         A triangle diagram that is used in obtaining a single phase shifted solution from the sum of sine and cosine terms in solution   The differential equation has solution The phase shifted form of is where and radians.      f(t) = sin(4*t)  g(t) = 3*sin(4*t) + 4*cos(4*t)          0.231824    \\sin(4t)  3\\sin(4t) + 4\\cos(4t)        A plot of the oscillating portion (not damped), , of the solution with its simple frequency curve . Notice the phase angle here of radians from bottom to bottom illustrating what we mean by out of phase by a phase angle of radians.      Solve the initial value problem      Convert the solution to phase angle format and compute the phase angle in radians.      Plot both solutions in and on the same axis over the interval to confirm your analysis. What should you see?      Back to the Circuit   In our study of phase angle representation in the previous section we saw that the and terms of can be combined into one sine term (albeit with a phase angle) with one amplitude, Thus, our gain (recall, gain is the ratio of the amplitude of the steady state output voltage, , to the amplitude of the input voltage, ) is Here, for and has amplitude , which is a function of , , , and . Gain is a measure of the response of the circuit to input voltage , which in this case is .  Let us fix at ohm and at henry and see what gain is in this case as a function of over a range of values. Let us tune this circuit by changing , the size of the capacitance in the circuit and see how gain changes as input voltage frequency, , changes.       R = 1  L = 1    input frequency  gain   C = 0.0005  g1(t) = R*sqrt((C^2*t^2)\/(C^2*L^2*t^4 + (C^2*R*2 - 2*C*L)*t^2+1))   C = 0.005  g2(t) = R*sqrt((C^2*t^2)\/(C^2*L^2*t^4 + (C^2*R*2 - 2*C*L)*t^2+1))   C = 0.05  g3(t) = R*sqrt((C^2*t^2)\/(C^2*L^2*t^4 + (C^2*R*2 - 2*C*L)*t^2+1))   C = 0.5  g4(t) = R*sqrt((C^2*t^2)\/(C^2*L^2*t^4 + (C^2*R*2 - 2*C*L)*t^2+1))    C = 0.0005  C = 0.005  C = 0.05  C = 0.5        Plot of gain as a function of input frequency, , for various values of capacitance, , , , farads in with ohm and henry.   illustrates the power of differential equation modeling. For we can alter parameters in our equation and see the results in a physical (in this case electrical) system. Indeed, we see in this plot that for a capacitance of farads if we have an input voltage with a frequency around ( to be precise) then the gain is greatest. Optimization is a calculus problem and we merely have to take the derivative of gain with respect to and find where it is . All other frequencies give smaller gain for this particular capacitance. In fact, we can say that as we decrease our capacitance the optimal frequency; i.e., frequency which gives highest gain, decreases and we might want to look into this for a more exact relationship. We shall do that in .  Put another way, we see that if our input voltage has a specific frequency, , there is a unique capacitance, , for this circuit that will maximize our gain. By changing we can tune our circuit to maximize gain for a given input frequency, . This is, in fact, how we tune a radio, for we change the capacitance of the radio's circuit so as to maximize the gain for the frequency (on our dial) that we wish to hear. So, the next time you try to find the station where Cousin Brucie is dedicating a Top Ten song from Billie Bob to Sally May know that a differential equation describes exactly what you are doing. How's that for cool?     Use your understanding of RLC circuits to show for an imposed on the RLC circuit given by the maximum gain is obtained when and thus we could tune our radio by changing the inductance as well, if that were as convenient as changing the capacitance, which it is not. So let us stick to tuning by changing the capacitance .      Tune the Radio   Tune the Radio. The Amplitude Modulated (AM) radio carrier frequencies are in the frequency range 535 1605 kHz. One Hz means cycle per second while kHz means cycles per second. The unit Hz is called a hertz. Carrier frequencies of 540 to 1600 kHz are assigned at 10 kHz intervals. The (Frequency Modulated (FM) radio band is from 88 to 108 MHz. HyperPhysics. 2009. AM and FM Radio Frequencies. Accessed 18 September 2016. Recall 1 kHz means 1,000 cycles per second. So 660 kHz is oscillation at the rate of 660,000 cycles per second. We offer up a radio , where , and ask you to tune in several stations by changing the capacitance and computing the optimal gain for these stations.  We will have to tell the circuit what initial current is present; i.e., usually until we turn the switch on and also we can presume there is no change in the current intially; i.e., . Let us build this radio with the following values: , henrys, ohms, and in farads can vary as needed to tune to various input frequencies . We note that if we wish to have, say 540 kHz, then , and in general to have x kHz we will need .     Solve the differential equation for the radio circuit.      Collect the coefficients and of the steady state and terms, respectively. Show that all other terms will dissipate, i.e. go to zero quickly, leaving only and terms.      Using the information above compute the gain as a function of capacitance and input voltage frequency .      For a given input voltage frequency determine the maximum gain for this circuit.      For several AM frequencies, say 540 kHz ( ), 880 kHz ( ), and 1520 kHz ( ), plot gain as a function of the capacitance to demonstrate that your maximum gain is what your formula in predicts and that your radio is tuned in.      "
},
{
  "id": "nonlinear01",
  "level": "1",
  "url": "nonlinear01.html",
  "type": "Section",
  "number": "5.1",
  "title": "Linearization",
  "body": " Linearization    To understand that a nonlinear system can be approximated near each equilibrium point by a linear system by using a Taylor series approximation for and .  To understand that the Jacobian matrix , of a nonlinear system is useful for classifying equilibrium solutions of the system as stable or unstable.  To understand that linearization can fail for some systems.     In , we explored how to solve linear systems. However, if we are asked to solve a nonlinear system such as we are faced with a much more difficult task. In general, it may not be possible to find solutions for a nonlinear system in terms of elementary functions. However, for a given modeling problem, we can ask many questions that may be answered without finding an explicit solution for the associated system of differential equations. For example, what are the equilibrium points? Are the equilibrium points stable? Do closed solution curves exist in the phase plane?    Equilibrium Solutions  An equilibrium solution for a first-order system of differential equations is a point such that Notice that neither nor is changing at this point. If we have the initial conditions, and , then the solution to the system is and . Of course the interesting question is what happens if our initial conditions are close to an equilibrium solution. Do solutions tend toward the equilibrium solution, away from the equilibrium solution, or is there a combination of the two?  One of the most useful methods of determining the nature of an equilibrium solution for a given nonlinear system is to approximate the nonlinear system with a linear system. More specifically, an equilibrium solution occurs for the linear system when an -nullcline intersects a -nullcline. That is, when a curve defined by intersects a curve defined , we have an equilibrium solution. Since the and -nullclines are simply curves in the -plane, we can approximate them locally by intersecting straight lines. Translating the pair of intersection lines to the origin, we obtain a linear system, and we can apply everything that we learned about such systems in .   Consider the system From we can quickly conclude that the only equilibrium solution to the system is . The phase portrait for this system is given in . If we have the initial conditions and , we can see that the solution tends toward the origin as . However, it is unclear from the phase portrait if the solution curves of all initial value problems with initial conditions near the origin tend towards the equilibrium solution as .      f(t,y) = (y[0] - 3*y[1] + y[0] * y[1]^2,2*y[0] - 4*y[1] - y[0]^2*y[1])                Phase Portrait for and   Since the nonlinear terms of the system do not contribute much towards and for values of and near zero, we can determine the nature of the equilibrium solution by examining the system consisting of only linear terms on the right-hand side of the equation, The matrix for this linear system, has eigenvalues and with eigenvectors and , respectively. The general solution for this linear system is This indeed suggests that solutions near the origin tend towards the origin as . In this case, we say that the equilibrium solution is stable . Of course, if we are given an initial condition such as and .    A Competing Species Model  Suppose that and are the population of two distinct species that compete for the same resources. For example, two species of fish may compete for the same food in a lake or sheep and cattle competing for the same grazing land. Recall from that we can model two competing species using the following system of first-order differential equations, The first term in each equation is the logistic growth of each species. The second term in each equation tells how each species is affected by interacting with the competing species.  More specifically, let us consider the following system, It is easy to see that the four equilibrium solutions: , , , and . We can view the direction field, the phase plane, and some solution curves for this system in .      f(t,y) = (2*y[0]*(1-y[0]\/2) - y[0]*y[1], 3*y[1]*(1 - y[1]\/3) - 2*y[0]*y[1])                       A Competing Species Model   Let us analyze what happens at the equilibrium solution . If we decide on an appropriate change of variables, we can translate the entire system so that this equilibrium solution is at the origin. If we let then Equations and now become As before we consider only the linear part of equations and are The idea is that the linear part is a good local approximation to the original equations much like a tangent line is a good local approximation to a smooth function in calculus. We can determine the local nature of the equilibrium solution by examining the eigenvalues of the matrix The eigenvalues of are and with eigenvectors and , respectively. The solution to the linear system is now or  If we have initial conditions and , one can quickly determine that and , and equations and become As notice that both and become very large and tend away from the origin.  We can conclude that the equilibrium solution is unstable . That is, tend away from the equilibrium solution as if one population begins with a slight advantage over the other. If neither popluation has an initial advantage over the other, then the solution curve will approach the equilibrium solution as .    A Nonpolynomial Example  If systems such as the following can be approximated by linear systems, Certainly, this sytems has an equilibrium solution at ( ). We can expand into a power series, Thus, this system can be approximated by the linear system See .      f(t,y) = (y[1],- y[1] - sin(y[0]))                Phase portrait of and       f(t,y) = (y[1],- y[1] - y[0])                Phase portrait of and     For example, consider the system The and -nullclines of this system are the curves and , respectively. Since the two nullclines intersect only at , we have a single equilibrium solution. From the phase plane, it appears that is a stable equilibrium solution. That is, all solution curves starting sufficiently close to will approach the equilibrium solution as ( ).      f(t,y) = (y[0]^2 - 4*y[0] - y[1] + 4,y[0]^3 - y[1])  g(t) = t^2 - 4*t + 4  h(t) = t^3               Phase portrait for the system   Making the substitution and , simply translates the entire system to the origin, and we obtain the system Our new system has and -nullclines and , respectively. Notice that we have simply moved the phase portrait of the original system so that our equilibrium solution is now at the origin. Furthermore, we can approximate the and -nullclines by their tangent lines and , respectively. From , it appears that we are approximating our original system with a linear system.      f(t,y) = (y[0]^2 - 4*y[0] - y[1] + 4,y[0]^3 - y[1])  g(t) = t^2 - 4*t + 4  h(t) = t^3          u(t) = -2*(t - 1)+1  v(t) = 3*(t - 1)+1         Phase portrait for the system    In general, our goal is to approximate a nonlinear system near each equilibrium point with a linear system. The idea is to move the equilibrium solution to the origin with a change of coordinates and then approximate the nonlinear system with a linear system. In order to move the equilibrium solution to the origin, we will introduce new variables If is close to the equilibrium solution , then will be close to the origin. Under this change of coordinates, Similarly, .  In order to approximate the nonlinear system with a linear system, we will use a Taylor series in two variables. That is, we can write If we only use the linear terms of the Taylor series, we obtain a fairly accurate approximation of provided we are near the equilibrium solution. Of course, and its linear approximation may be quite different for values far away from the equilibrium solution. The linearization of the system of equations now becomes Since is an equilibrium solution, the constant terms vanish in each equation and  If we write our linearization in matrix form, we have The matrix is the Jacobian matrix of the system. We can now classify equilibrium solutions of nonlinear systems by examining the eigenvalues of the Jacobian matrix of the system or by using the trace-determinant plane. For example, if and , we have a sink. We can determine the sink to be spiral or nodal by examining whether lies above or below the parabola in the trace-determinant plane.    Jacobian matrix   It is important to note that linearization only tells us the local story. A solution curve might behave quite differently if it is far away from the equilibrium solution.   In , we considered the system The Jacobian matrix of this system is For the equilibrium solution , Since has eigenvalues , the equilibrium solution will act as a spiral sink for initial values close to .    Classifying Equilibrium Solutions for Nonlinear Systems   Find all of the nullclines and equilbrium solutions for each of the following systems. Classify each equilibrium solution as stable or unstable. Plot the nullclines and a direction field for each system. You will probably find Sage very useful.                          When Linearization Fails  There are at least two cases when linearization does not give us the information that we seek. First, it might well be the case that the linear terms vanish in the nonlinear system. For example, the system has an equilibrium solution at the origin, but this linearization of this system vanishes.  A more subtle example is the system The origin is an equilibrium solution, and the linearization of this system is The eigenvalue of the matrix corresponding to the linear system, are . Thus, the solution curves of the linear system are simply circles about the origin. However, the nonlinear system acts quite differently. In the nonlinear system, solutions spiral out slowly from the origin ( ). This system has no periodic solutions.       f(t,y) = (y[1] - (y[0]^2 + y[1]^2)*y[0], -y[0] - (y[0]^2 + y[1]^2)*y[1])            When linearization fails     Important Lessons   We can approximate a nonlinear system near each equilibrium point with a linear system by using a Taylor series approximation for and . The matrix of our linear approximation, is the Jacobian matrix of the system. We can classify nonlinear systems by examining the Jacobian matrix of the system and using the trace-determinant plane.  Linearization only tells us how solutions behave near the equilibrium point. A solution curve might behave quite differently if it is far away from the equilibrium solution.  In some cases, linearization can fail.       What does it mean to linearize a nonlinear system?       How might the linearization of a nonlinear system fail?       Exercises   Linearization  For each of the systems in ,  Plot and label the nullclines for equation in the system.  Find all of the equilibrium solutions for the system.  Use the Jacobian to classify each equilibrium solution (spiral source, nodal sink, etc.).                                    Consider the following three systems     All three systems have an equilibrium solution at . Which two systems have phase portraits with the same local picture near ? Justify your answer.       Let us consider an epidemic model for a city. We make the following additional assumptions about our model.  The city has a constant birth rate rate of persons per day. All new born babies are susceptible to the disease.  Infected people either recover or die after a certain number of days. If an individual recovers, he or she is immune.  If we let be the number of susceptible individuals at time and be the number of infected individuals at time , our assumptions give rise to the following system of differential equations, The constant is determined by the probability of an interaction between a susceptible individual and an infected individual, and is the rate at which infected individuals are removed from the population. If then both the susceptible and infected populations do not change. This will occur at We are interested in the behavior of solutions near . If solutions approach this equilbrium point, then the disease will become endemic to the population.       Consider the predator-prey system modeled by the following equations,   Find the equilibrium solutions of this system.  What are the eigenvalues of the Jacobian for each equilibrium solution?  What, if anything, can be said about the nature of the equilibrium solutions of the system?      "
},
{
  "id": "nonlinear01-2",
  "level": "2",
  "url": "nonlinear01.html#nonlinear01-2",
  "type": "Objectives",
  "number": "5.1",
  "title": "",
  "body": "  To understand that a nonlinear system can be approximated near each equilibrium point by a linear system by using a Taylor series approximation for and .  To understand that the Jacobian matrix , of a nonlinear system is useful for classifying equilibrium solutions of the system as stable or unstable.  To understand that linearization can fail for some systems.   "
},
{
  "id": "nonlinear01-subsection-equilibrium-solutions-2",
  "level": "2",
  "url": "nonlinear01.html#nonlinear01-subsection-equilibrium-solutions-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "equilibrium solution "
},
{
  "id": "nonlinear01-subsection-equilibrium-solutions-4",
  "level": "2",
  "url": "nonlinear01.html#nonlinear01-subsection-equilibrium-solutions-4",
  "type": "Example",
  "number": "5.1.1",
  "title": "",
  "body": " Consider the system From we can quickly conclude that the only equilibrium solution to the system is . The phase portrait for this system is given in . If we have the initial conditions and , we can see that the solution tends toward the origin as . However, it is unclear from the phase portrait if the solution curves of all initial value problems with initial conditions near the origin tend towards the equilibrium solution as .      f(t,y) = (y[0] - 3*y[1] + y[0] * y[1]^2,2*y[0] - 4*y[1] - y[0]^2*y[1])                Phase Portrait for and   Since the nonlinear terms of the system do not contribute much towards and for values of and near zero, we can determine the nature of the equilibrium solution by examining the system consisting of only linear terms on the right-hand side of the equation, The matrix for this linear system, has eigenvalues and with eigenvectors and , respectively. The general solution for this linear system is This indeed suggests that solutions near the origin tend towards the origin as . In this case, we say that the equilibrium solution is stable . Of course, if we are given an initial condition such as and .  "
},
{
  "id": "nonlinear01-subsection-equilibrium-solutions-5",
  "level": "2",
  "url": "nonlinear01.html#nonlinear01-subsection-equilibrium-solutions-5",
  "type": "Example",
  "number": "5.1.3",
  "title": "A Competing Species Model.",
  "body": " A Competing Species Model  Suppose that and are the population of two distinct species that compete for the same resources. For example, two species of fish may compete for the same food in a lake or sheep and cattle competing for the same grazing land. Recall from that we can model two competing species using the following system of first-order differential equations, The first term in each equation is the logistic growth of each species. The second term in each equation tells how each species is affected by interacting with the competing species.  More specifically, let us consider the following system, It is easy to see that the four equilibrium solutions: , , , and . We can view the direction field, the phase plane, and some solution curves for this system in .      f(t,y) = (2*y[0]*(1-y[0]\/2) - y[0]*y[1], 3*y[1]*(1 - y[1]\/3) - 2*y[0]*y[1])                       A Competing Species Model   Let us analyze what happens at the equilibrium solution . If we decide on an appropriate change of variables, we can translate the entire system so that this equilibrium solution is at the origin. If we let then Equations and now become As before we consider only the linear part of equations and are The idea is that the linear part is a good local approximation to the original equations much like a tangent line is a good local approximation to a smooth function in calculus. We can determine the local nature of the equilibrium solution by examining the eigenvalues of the matrix The eigenvalues of are and with eigenvectors and , respectively. The solution to the linear system is now or  If we have initial conditions and , one can quickly determine that and , and equations and become As notice that both and become very large and tend away from the origin.  We can conclude that the equilibrium solution is unstable . That is, tend away from the equilibrium solution as if one population begins with a slight advantage over the other. If neither popluation has an initial advantage over the other, then the solution curve will approach the equilibrium solution as .  "
},
{
  "id": "nonlinear01-subsection-equilibrium-solutions-6",
  "level": "2",
  "url": "nonlinear01.html#nonlinear01-subsection-equilibrium-solutions-6",
  "type": "Example",
  "number": "5.1.5",
  "title": "A Nonpolynomial Example.",
  "body": " A Nonpolynomial Example  If systems such as the following can be approximated by linear systems, Certainly, this sytems has an equilibrium solution at ( ). We can expand into a power series, Thus, this system can be approximated by the linear system See .      f(t,y) = (y[1],- y[1] - sin(y[0]))                Phase portrait of and       f(t,y) = (y[1],- y[1] - y[0])                Phase portrait of and   "
},
{
  "id": "nonlinear01-example-poly",
  "level": "2",
  "url": "nonlinear01.html#nonlinear01-example-poly",
  "type": "Example",
  "number": "5.1.8",
  "title": "",
  "body": " For example, consider the system The and -nullclines of this system are the curves and , respectively. Since the two nullclines intersect only at , we have a single equilibrium solution. From the phase plane, it appears that is a stable equilibrium solution. That is, all solution curves starting sufficiently close to will approach the equilibrium solution as ( ).      f(t,y) = (y[0]^2 - 4*y[0] - y[1] + 4,y[0]^3 - y[1])  g(t) = t^2 - 4*t + 4  h(t) = t^3               Phase portrait for the system   Making the substitution and , simply translates the entire system to the origin, and we obtain the system Our new system has and -nullclines and , respectively. Notice that we have simply moved the phase portrait of the original system so that our equilibrium solution is now at the origin. Furthermore, we can approximate the and -nullclines by their tangent lines and , respectively. From , it appears that we are approximating our original system with a linear system.      f(t,y) = (y[0]^2 - 4*y[0] - y[1] + 4,y[0]^3 - y[1])  g(t) = t^2 - 4*t + 4  h(t) = t^3          u(t) = -2*(t - 1)+1  v(t) = 3*(t - 1)+1         Phase portrait for the system   "
},
{
  "id": "nonlinear01-subsection-equilibrium-solutions-10",
  "level": "2",
  "url": "nonlinear01.html#nonlinear01-subsection-equilibrium-solutions-10",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Jacobian matrix "
},
{
  "id": "nonlinear01-subsection-equilibrium-solutions-13",
  "level": "2",
  "url": "nonlinear01.html#nonlinear01-subsection-equilibrium-solutions-13",
  "type": "Example",
  "number": "5.1.11",
  "title": "",
  "body": " In , we considered the system The Jacobian matrix of this system is For the equilibrium solution , Since has eigenvalues , the equilibrium solution will act as a spiral sink for initial values close to .  "
},
{
  "id": "nonlinear01-subsection-equilibrium-solutions-14",
  "level": "2",
  "url": "nonlinear01.html#nonlinear01-subsection-equilibrium-solutions-14",
  "type": "Activity",
  "number": "5.1.1",
  "title": "Classifying Equilibrium Solutions for Nonlinear Systems.",
  "body": " Classifying Equilibrium Solutions for Nonlinear Systems   Find all of the nullclines and equilbrium solutions for each of the following systems. Classify each equilibrium solution as stable or unstable. Plot the nullclines and a direction field for each system. You will probably find Sage very useful.                       "
},
{
  "id": "nonlinear01-figure-linearization-fails",
  "level": "2",
  "url": "nonlinear01.html#nonlinear01-figure-linearization-fails",
  "type": "Figure",
  "number": "5.1.12",
  "title": "",
  "body": "    f(t,y) = (y[1] - (y[0]^2 + y[1]^2)*y[0], -y[0] - (y[0]^2 + y[1]^2)*y[1])            When linearization fails  "
},
{
  "id": "nonlinear01-subsection-important-lessons-2",
  "level": "2",
  "url": "nonlinear01.html#nonlinear01-subsection-important-lessons-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Jacobian matrix "
},
{
  "id": "rq-nonlinear01-linearize",
  "level": "2",
  "url": "nonlinear01.html#rq-nonlinear01-linearize",
  "type": "Reading Question",
  "number": "5.1.4.1",
  "title": "",
  "body": "  What does it mean to linearize a nonlinear system?    "
},
{
  "id": "rq-nonlinear01-linearization-failure",
  "level": "2",
  "url": "nonlinear01.html#rq-nonlinear01-linearization-failure",
  "type": "Reading Question",
  "number": "5.1.4.2",
  "title": "",
  "body": "  How might the linearization of a nonlinear system fail?    "
},
{
  "id": "nonlinear01-exercises-linearization-3",
  "level": "2",
  "url": "nonlinear01.html#nonlinear01-exercises-linearization-3",
  "type": "Exercise",
  "number": "5.1.5.1",
  "title": "",
  "body": "    "
},
{
  "id": "nonlinear01-exercises-linearization-4",
  "level": "2",
  "url": "nonlinear01.html#nonlinear01-exercises-linearization-4",
  "type": "Exercise",
  "number": "5.1.5.2",
  "title": "",
  "body": "    "
},
{
  "id": "nonlinear01-exercises-linearization-5",
  "level": "2",
  "url": "nonlinear01.html#nonlinear01-exercises-linearization-5",
  "type": "Exercise",
  "number": "5.1.5.3",
  "title": "",
  "body": "    "
},
{
  "id": "nonlinear01-exercises-linearization-6",
  "level": "2",
  "url": "nonlinear01.html#nonlinear01-exercises-linearization-6",
  "type": "Exercise",
  "number": "5.1.5.4",
  "title": "",
  "body": "    "
},
{
  "id": "nonlinear01-exercises-linearization-7",
  "level": "2",
  "url": "nonlinear01.html#nonlinear01-exercises-linearization-7",
  "type": "Exercise",
  "number": "5.1.5.5",
  "title": "",
  "body": "    "
},
{
  "id": "nonlinear01-exercises-linearization-8",
  "level": "2",
  "url": "nonlinear01.html#nonlinear01-exercises-linearization-8",
  "type": "Exercise",
  "number": "5.1.5.6",
  "title": "",
  "body": "    "
},
{
  "id": "nonlinear01-exercises-3",
  "level": "2",
  "url": "nonlinear01.html#nonlinear01-exercises-3",
  "type": "Exercise",
  "number": "5.1.5.7",
  "title": "",
  "body": "  Consider the following three systems     All three systems have an equilibrium solution at . Which two systems have phase portraits with the same local picture near ? Justify your answer.   "
},
{
  "id": "nonlinear01-exercises-4",
  "level": "2",
  "url": "nonlinear01.html#nonlinear01-exercises-4",
  "type": "Exercise",
  "number": "5.1.5.8",
  "title": "",
  "body": "  Let us consider an epidemic model for a city. We make the following additional assumptions about our model.  The city has a constant birth rate rate of persons per day. All new born babies are susceptible to the disease.  Infected people either recover or die after a certain number of days. If an individual recovers, he or she is immune.  If we let be the number of susceptible individuals at time and be the number of infected individuals at time , our assumptions give rise to the following system of differential equations, The constant is determined by the probability of an interaction between a susceptible individual and an infected individual, and is the rate at which infected individuals are removed from the population. If then both the susceptible and infected populations do not change. This will occur at We are interested in the behavior of solutions near . If solutions approach this equilbrium point, then the disease will become endemic to the population.   "
},
{
  "id": "nonlinear01-exercises-5",
  "level": "2",
  "url": "nonlinear01.html#nonlinear01-exercises-5",
  "type": "Exercise",
  "number": "5.1.5.9",
  "title": "",
  "body": "   Consider the predator-prey system modeled by the following equations,   Find the equilibrium solutions of this system.  What are the eigenvalues of the Jacobian for each equilibrium solution?  What, if anything, can be said about the nature of the equilibrium solutions of the system?    "
},
{
  "id": "nonlinear02",
  "level": "1",
  "url": "nonlinear02.html",
  "type": "Section",
  "number": "5.2",
  "title": "Hamiltonian Systems",
  "body": " Hamiltonian Systems    To understand that a Hamiltonian system is a system of the form where is a smooth function. In particular, is called a Hamiltonian function for the system.  To understand that if is a Hamiltonian system, then is constant along any solution curve. In particular, the solution curves of a Hamiltonian system are the level sets of .  To understand how to compute for a Hamiltonian system  To understand that a Hamiltonian system has no spiral sinks or sources.     An undamped harmonic oscillator, , can be written as the system Now suppose that is a solution curve in the -plane. We will calculate the slope of the solution curve, . Using the fact from calculus that the derivative of an inverse function is we have In general for the system we have  Using separation of variables to solve the equation we obtain the solution where is a constant. The first term of is the kinetic energy function of the harmonic oscillator while the second term is the potential energy function  For this reason, we call the function the total energy function of the harmonic oscillator. Equation tells us that energy is conserved. That is, the sum of the potential energy and the kinetic energy is constant.    The Nonlinear Pendulum  While pendulums have long been used in clocks to keep time, they have also been used to measure gravity as well as used in early seismometers to measure the effect of earthquakes. One of the more interesting uses of a pendulum has been to measure the rotation of the earth. In 1851, the French physicist, Léon Foucault, used a pendulum ( ) to demonstrate that the earth actually rotated on its axis. The fact that the earth rotates had been known for a long time, but Foucault's experiment gave the first simple proof of this phenomena.    a photo of the Foucault Pendulum Clock at the California Academy of Sciences   Foucault Pendulum Clock California Academy of Sciences    Let us consider a pendulum made of a light rod of length called the arm of the pendulum with a mass on the end of the rod called the bob ( ). We will ignore the mass of the arm in our system. The position of the bob is given by , which we will measure in a counterclockwise direction. We will assume that is when the bob is in the vertical position.             L    m    \\theta        The nonlinear pendulum   There are two forces acting on the pendulum gravity and friction. The position of the bob at time is and the velocity of the bob is , the length of the velocity vector ( ). The component of the acceleration that points along the direction of motion of the bob is We can take the force due to friction to be proportional to the velocity, where . Thus, Newton's second law tells us that or As a system, we can model the pendulum as             L    \\theta       mg       mg \\sin \\theta               The nonlinear pendulum   If there is no damping for our pendulum, we say that we have an ideal pendulum . In this case, Since we know that the energy function for the pendulum is Of course, is constant on the ideal pendulum.    Hamiltonian Systems  The ideal pendulum and the undamped harmonic oscillator are examples of Hamiltonian systems. More specifically, a Hamiltonian system is a system of the form where is a smooth function, sometimes referred to as a Hamiltonian function Hamiltonian function .    Hamiltonian function    The system is Hamiltonian since for     In the case of the harmonic oscillator and ideal pendulum, is just the energy function. For the harmonic oscillator, the Hamiltonian function is In this case, A change of variables ( ) tells us that this system is equivalent to the system  For the ideal pendulum where   The following theorem tells the importance of Hamiltonian systems. That is, the solution curves of the system are simply the level sets of the Hamiltonian function.    Let be a Hamiltonian system, where . Then is constant along any solution curve.     Let be a solution curve for the system. Using the chain rule   tells us how to draw the solution curves in the phase plane without solving the system. Assuming that the Hamiltonian function is not constant on any open set in , we simply need to plot the level curves, . The solutions of the system live on these level sets, and all we need to do is find the direction of the solution curve. However, this is quite easy since we know the vector field of the system. Furthermore, the equilibrium points of the Hamiltonian system occur at the critical points of (where the partials of vanish). For example, we can see the solution curves of in .      f(t,y) = (-2*y[0] - 3*y[1]^3, -3*y[0]^2 + 2*y[1])    gap = 1\/3   H(x,y) = x^3 - 2*x*y - y^3            Solution curves of and     The Ideal Pendulum Revisited  The ideal pendulum is Hamiltonian, since the total energy function is the Hamiltonian function for the system. If we set , then the solution curves of the system are just the level curves of . In , the closed ellipses correspond to the normal motion of a pendulum, while cosine curves correspond to a pendulum that always rotates in the same direction. The curves that join the equilibrium points correspond to the pendulum that rotates exactly to the top of the arc and then rotates back in the other direction.      f(t,y) = (y[1], -sin(y[0]))    gap = 1\/3   H(x,y) = y^2\/2 - cos(x)              The ideal pendulum   Hamiltonian systems are rather rare. Given a system, we need a test to see if it is indeed Hamiltonian. For the system we wish to find a function such that If such a function exists, then Thus, if our system is Hamiltonian.   We already know that the system is Hamiltonian. Indeed,   The condition that is also sufficient for to be a Hamiltonian system. That is, we can construct a Hamiltonian function if . If then Differentiating with respect to , tells us that Now we can determine by solving the first-order differential equation We summarize our results in the following theorem.    Let where and are continuously differentiable.  If the system is Hamiltonian, then  If equation is true on a rectangle , then the system is Hamiltonian on and where      As an example, we will show how we constructed the Hamiltonian function given in for the system First, Consequently, and , where is any constant. If we choose , our Hamiltonian function is    As a second example, suppose Since our system is Hamiltonian. To find a Hamiltonian, we compute Thus, and . Letting , our Hamiltonian function is Solution curves for this system are given in .      f(t,y) = (y[0]^2*sin(y[0])*cos(y[1]), 2*y[0] - sin(y[1])*(2*y[0]*sin(y[0]) + y[0]^2*cos(y[0])))    gap = 3\/4   H(x,y) = x^2*(1 - sin(x)*sin(y))                 Solution curves for     Hamiltonian Systems  For each of the systems,  Show that the system is Hamiltonian.  Find a Hamiltonian function for the system.  Plot the level sets of .  Plot the phase portrait of the system, describing any equilibrium solutions. Use technology.                Equilibrium Solutions of Hamiltonian Systems  The system that we studied in , has equilibrium solutions at and . Referring to the phase portrait for the system ( ), we might guess that is a saddle, and is either a center or a spiral sink. Since solution curves must follow contours for the Hamiltonian function , spiral sinks do not make sense.  Let us examine the possible types of equilibrium solutions for a Hamiltonian system. Suppose that is an equilibrium solution for the system In order to determine the nature of the equilibrium solution, we will compute the Jacobian matrix of the system at , If we let then becomes The characteristic polynomial of this matrix is Therefore, our matrix has eigenvalues and we have the following possibilities.  If , we have two real eigenvalues of opposite signs. Therefore, our equilibrium solution is a saddle.  If , the only eigenvalue is zero.  If , we have two purely imaginary eigenvalues.  In particular, a Hamiltonian system has no spiral sinks or sources.  Returning to , the Jacobian matrix is For the equilibrium solution , we have eigenvalues , which tells us that the origin is a nodal saddle. The Jacobian matrix corresponding to is Since has eigenvalues . Therefore, solution curves near should look like closed orbits.    Important Lessons   A pendulum can be modeled by the equation or the system  A Hamiltonian system is a system of the form where is a smooth function.  If is a Hamiltonian system, then is constant along any solution curve. In particular, the solution curves of a Hamiltonian system are the level sets of .  If the system is Hamiltonian, then  If is true on a rectangle , then the system is Hamiltonian on and where  A Hamiltonian system has no spiral sinks or spiral sources.       Explain in your own words what a Hamiltonian system is.       What types of equilibrium solutions are possible in a Hamiltonian system?       Exercises   Hamiltonian Systems  For each of the systems in ,  Show that the system is Hamiltonian.  Find a Hamiltonian function for the system.  Plot the level sets of .  Plot the phase portrait of the system, describing any equilibrium solutions.                          Consider an ideal pendulum with bob mass and arm length given by   What is the linearization of the ideal pendulum system at the equilibrium point ?  Using m\/s , how should and be chosen so that small swings of the pendulum have period 1 second?  For the linearization of the ideal pendulum at , the period of oscillation is independent of the amplitude. Does the same statement hold for the ideal pendulum itself? Is the period of oscillation the same no matter how high the pendulum swings? If not, will the period be shorter or longer for high swings?  An ideal pendulum clock a clock containing an ideal pendulum that ticks once for each swing of the pendulum arm keeps perfect time when the pendulum makes very high swings. Will the clock rum fast or slow if the amplitude of the swings is very small?  If the arm length of the ideal pendulum is doubled from to , what is the effect on the period of small amplitude swinging solutions?  What is the rate of change of the period of small amplitude swings as varies?  Will an ideal pendulum clock that keeps perfect time on earth run fast or slow on the moon?       Describe the phase portrait for when .      Consider the autonomous system   Show that this system is a Hamiltonian system.  Find a Hamiltonian function for this system.      "
},
{
  "id": "nonlinear02-2",
  "level": "2",
  "url": "nonlinear02.html#nonlinear02-2",
  "type": "Objectives",
  "number": "5.2",
  "title": "",
  "body": "  To understand that a Hamiltonian system is a system of the form where is a smooth function. In particular, is called a Hamiltonian function for the system.  To understand that if is a Hamiltonian system, then is constant along any solution curve. In particular, the solution curves of a Hamiltonian system are the level sets of .  To understand how to compute for a Hamiltonian system  To understand that a Hamiltonian system has no spiral sinks or sources.   "
},
{
  "id": "nonlinear02-3-2",
  "level": "2",
  "url": "nonlinear02.html#nonlinear02-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "kinetic energy function potential energy function total energy function "
},
{
  "id": "nonlinear02-figure-fouclault",
  "level": "2",
  "url": "nonlinear02.html#nonlinear02-figure-fouclault",
  "type": "Figure",
  "number": "5.2.1",
  "title": "",
  "body": "  a photo of the Foucault Pendulum Clock at the California Academy of Sciences   Foucault Pendulum Clock California Academy of Sciences  "
},
{
  "id": "nonlinear02-subsection-pendulum-4",
  "level": "2",
  "url": "nonlinear02.html#nonlinear02-subsection-pendulum-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "arm bob "
},
{
  "id": "nonlinear02-figure-pendulum-1",
  "level": "2",
  "url": "nonlinear02.html#nonlinear02-figure-pendulum-1",
  "type": "Figure",
  "number": "5.2.2",
  "title": "",
  "body": "           L    m    \\theta        The nonlinear pendulum  "
},
{
  "id": "nonlinear02-figure-pendulum-2",
  "level": "2",
  "url": "nonlinear02.html#nonlinear02-figure-pendulum-2",
  "type": "Figure",
  "number": "5.2.3",
  "title": "",
  "body": "           L    \\theta       mg       mg \\sin \\theta               The nonlinear pendulum  "
},
{
  "id": "nonlinear02-subsection-pendulum-8",
  "level": "2",
  "url": "nonlinear02.html#nonlinear02-subsection-pendulum-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "ideal pendulum "
},
{
  "id": "nonlinear02-subsection-hamiltonian-systems-2",
  "level": "2",
  "url": "nonlinear02.html#nonlinear02-subsection-hamiltonian-systems-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Hamiltonian system Hamiltonian function "
},
{
  "id": "nonlinear02-example-hamilitonian-1",
  "level": "2",
  "url": "nonlinear02.html#nonlinear02-example-hamilitonian-1",
  "type": "Example",
  "number": "5.2.4",
  "title": "",
  "body": " The system is Hamiltonian since for   "
},
{
  "id": "nonlinear02-subsection-hamiltonian-systems-5",
  "level": "2",
  "url": "nonlinear02.html#nonlinear02-subsection-hamiltonian-systems-5",
  "type": "Example",
  "number": "5.2.5",
  "title": "",
  "body": " In the case of the harmonic oscillator and ideal pendulum, is just the energy function. For the harmonic oscillator, the Hamiltonian function is In this case, A change of variables ( ) tells us that this system is equivalent to the system  For the ideal pendulum where  "
},
{
  "id": "nonlinear02-theorem-hamiltonian-constant",
  "level": "2",
  "url": "nonlinear02.html#nonlinear02-theorem-hamiltonian-constant",
  "type": "Theorem",
  "number": "5.2.6",
  "title": "",
  "body": "  Let be a Hamiltonian system, where . Then is constant along any solution curve.   "
},
{
  "id": "nonlinear02-subsection-hamiltonian-systems-8",
  "level": "2",
  "url": "nonlinear02.html#nonlinear02-subsection-hamiltonian-systems-8",
  "type": "Proof",
  "number": "5.2.2.1",
  "title": "",
  "body": " Let be a solution curve for the system. Using the chain rule  "
},
{
  "id": "nonlinear02-figure-hamiltonian-solutions",
  "level": "2",
  "url": "nonlinear02.html#nonlinear02-figure-hamiltonian-solutions",
  "type": "Figure",
  "number": "5.2.7",
  "title": "",
  "body": "    f(t,y) = (-2*y[0] - 3*y[1]^3, -3*y[0]^2 + 2*y[1])    gap = 1\/3   H(x,y) = x^3 - 2*x*y - y^3            Solution curves of and  "
},
{
  "id": "nonlinear02-figure-ideal-pendulum",
  "level": "2",
  "url": "nonlinear02.html#nonlinear02-figure-ideal-pendulum",
  "type": "Figure",
  "number": "5.2.8",
  "title": "",
  "body": "    f(t,y) = (y[1], -sin(y[0]))    gap = 1\/3   H(x,y) = y^2\/2 - cos(x)              The ideal pendulum  "
},
{
  "id": "nonlinear02-subsection-ideal-pendulum-5",
  "level": "2",
  "url": "nonlinear02.html#nonlinear02-subsection-ideal-pendulum-5",
  "type": "Example",
  "number": "5.2.9",
  "title": "",
  "body": " We already know that the system is Hamiltonian. Indeed,  "
},
{
  "id": "nonlinear02-theorem-finding-hamiltonians",
  "level": "2",
  "url": "nonlinear02.html#nonlinear02-theorem-finding-hamiltonians",
  "type": "Theorem",
  "number": "5.2.10",
  "title": "",
  "body": "  Let where and are continuously differentiable.  If the system is Hamiltonian, then  If equation is true on a rectangle , then the system is Hamiltonian on and where    "
},
{
  "id": "nonlinear02-subsection-ideal-pendulum-8",
  "level": "2",
  "url": "nonlinear02.html#nonlinear02-subsection-ideal-pendulum-8",
  "type": "Example",
  "number": "5.2.11",
  "title": "",
  "body": " As an example, we will show how we constructed the Hamiltonian function given in for the system First, Consequently, and , where is any constant. If we choose , our Hamiltonian function is  "
},
{
  "id": "nonlinear02-example-finding-hamiltonians",
  "level": "2",
  "url": "nonlinear02.html#nonlinear02-example-finding-hamiltonians",
  "type": "Example",
  "number": "5.2.12",
  "title": "",
  "body": " As a second example, suppose Since our system is Hamiltonian. To find a Hamiltonian, we compute Thus, and . Letting , our Hamiltonian function is Solution curves for this system are given in .      f(t,y) = (y[0]^2*sin(y[0])*cos(y[1]), 2*y[0] - sin(y[1])*(2*y[0]*sin(y[0]) + y[0]^2*cos(y[0])))    gap = 3\/4   H(x,y) = x^2*(1 - sin(x)*sin(y))                 Solution curves for   "
},
{
  "id": "nonlinear02-subsection-ideal-pendulum-10",
  "level": "2",
  "url": "nonlinear02.html#nonlinear02-subsection-ideal-pendulum-10",
  "type": "Activity",
  "number": "5.2.1",
  "title": "Hamiltonian Systems.",
  "body": " Hamiltonian Systems  For each of the systems,  Show that the system is Hamiltonian.  Find a Hamiltonian function for the system.  Plot the level sets of .  Plot the phase portrait of the system, describing any equilibrium solutions. Use technology.             "
},
{
  "id": "nonlinear02-subsection-important-lessons-2",
  "level": "2",
  "url": "nonlinear02.html#nonlinear02-subsection-important-lessons-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Hamiltonian system "
},
{
  "id": "rq-nonlinear02-hamiltonian",
  "level": "2",
  "url": "nonlinear02.html#rq-nonlinear02-hamiltonian",
  "type": "Reading Question",
  "number": "5.2.6.1",
  "title": "",
  "body": "  Explain in your own words what a Hamiltonian system is.    "
},
{
  "id": "rq-nonlinear02-equilibrium-solution-types",
  "level": "2",
  "url": "nonlinear02.html#rq-nonlinear02-equilibrium-solution-types",
  "type": "Reading Question",
  "number": "5.2.6.2",
  "title": "",
  "body": "  What types of equilibrium solutions are possible in a Hamiltonian system?    "
},
{
  "id": "nonlinear02-exercises-hamiltonian-systems-3",
  "level": "2",
  "url": "nonlinear02.html#nonlinear02-exercises-hamiltonian-systems-3",
  "type": "Exercise",
  "number": "5.2.7.1",
  "title": "",
  "body": "    "
},
{
  "id": "nonlinear02-exercises-hamiltonian-systems-4",
  "level": "2",
  "url": "nonlinear02.html#nonlinear02-exercises-hamiltonian-systems-4",
  "type": "Exercise",
  "number": "5.2.7.2",
  "title": "",
  "body": "    "
},
{
  "id": "nonlinear02-exercises-hamiltonian-systems-5",
  "level": "2",
  "url": "nonlinear02.html#nonlinear02-exercises-hamiltonian-systems-5",
  "type": "Exercise",
  "number": "5.2.7.3",
  "title": "",
  "body": "    "
},
{
  "id": "nonlinear02-exercises-hamiltonian-systems-6",
  "level": "2",
  "url": "nonlinear02.html#nonlinear02-exercises-hamiltonian-systems-6",
  "type": "Exercise",
  "number": "5.2.7.4",
  "title": "",
  "body": "    "
},
{
  "id": "nonlinear02-exercises-3",
  "level": "2",
  "url": "nonlinear02.html#nonlinear02-exercises-3",
  "type": "Exercise",
  "number": "5.2.7.5",
  "title": "",
  "body": "  Consider an ideal pendulum with bob mass and arm length given by   What is the linearization of the ideal pendulum system at the equilibrium point ?  Using m\/s , how should and be chosen so that small swings of the pendulum have period 1 second?  For the linearization of the ideal pendulum at , the period of oscillation is independent of the amplitude. Does the same statement hold for the ideal pendulum itself? Is the period of oscillation the same no matter how high the pendulum swings? If not, will the period be shorter or longer for high swings?  An ideal pendulum clock a clock containing an ideal pendulum that ticks once for each swing of the pendulum arm keeps perfect time when the pendulum makes very high swings. Will the clock rum fast or slow if the amplitude of the swings is very small?  If the arm length of the ideal pendulum is doubled from to , what is the effect on the period of small amplitude swinging solutions?  What is the rate of change of the period of small amplitude swings as varies?  Will an ideal pendulum clock that keeps perfect time on earth run fast or slow on the moon?    "
},
{
  "id": "nonlinear02-exercises-4",
  "level": "2",
  "url": "nonlinear02.html#nonlinear02-exercises-4",
  "type": "Exercise",
  "number": "5.2.7.6",
  "title": "",
  "body": "  Describe the phase portrait for when .   "
},
{
  "id": "nonlinear02-exercises-5",
  "level": "2",
  "url": "nonlinear02.html#nonlinear02-exercises-5",
  "type": "Exercise",
  "number": "5.2.7.7",
  "title": "",
  "body": "  Consider the autonomous system   Show that this system is a Hamiltonian system.  Find a Hamiltonian function for this system.    "
},
{
  "id": "nonlinear03",
  "level": "1",
  "url": "nonlinear03.html",
  "type": "Section",
  "number": "5.3",
  "title": "More Nonlinear Mechanics",
  "body": " More Nonlinear Mechanics    To understand that the equation for the nonlinear pendulum with damping can be analyzed by examining , where is the Hamiltonian function for the ideal pendulum. The function for this system is an example of a Lyapunov function .  To understand how to use Lyapunov functions to determine the stability of an equilibrium solution for a nonlinear system.  To understand gradient systems and the types of solutions for gradient systems.     The equation for the nonlinear pendulum with damping is As a system, we can model the pendulum as This system is not Hamiltonian since but We shall have to invent new techniques to analyze such systems.    The Nonlinear Pendulum and Damping  To find the nullclines of the nonlinear pendulum, let The -nullcline is , while the -nullcline is It follows that the equilibrium solutions for the nonlinear pendulum occur at This makes sense since the pendulum should not move if the bob is initially hanging downward ( ) or is at the very top or the very bottom of a swing ( ). Since our first goal is to determine the nature of each equilibrium solution, we will compute the Jacobian of the system . This is just At the equilibrium solutions , the pendulum is hanging downward, and the Jacobian matrix becomes On the other hand, if , the pendulum is at the top of its swing, and the Jacobian matrix is  We will first examine the case where the pendulum is hanging downward. The characteristic polynomial of is Thus, the eigenvalues of are We can analyze the nature of these eigenvalues by examining the sign of   If , the eigenvalues of the Jacobian are complex. Since the real part of is negative, these equilibrium solutions are spiral sinks.  If , we have two distinct real eigenvalues. Since we know that Thus, both of our eigenvalues must be negative. Therefore, we have a nodal sink.  If , we have a single real negative eigenvalue. Thus, we also have a sink.  Consequently, if we assume that is small, then and we will only have spiral sinks ( ).      b = 0.5  m = 1  g = 1  L = 1  f(t,y) = (y[1], - (b\/m)*y[1] - (g\/L)*sin(y[0]))    gap = 1\/2                  g(s)=2*sin(s - pi )    x -nullcline  y -nullcline        Nullclines of the damped pendulum   Now let us consider the type of equilibrium solutions that we will obtain when the pendulum is standing upright. These solutions will occur at . The characteristic polynomial of the Jacobian matrix at these points is hence, the eigenvalues of are Furthermore, we have distinct real eigenvalues since In fact, the eigenvalues will have opposite sign Thus, the equilibrium solutions are saddles.    Lyapunov Functions  The function is a Hamiltonian function for the ideal pendulum since . However, if , then our system has damping and Thus, is decreasing whenever . Hence, solution curves in the -plane cross the level sets of moving from larger to smaller values.  We can now devise a strategy for sketching the phase plane of the damped pendulum. If and are both small, the value of decreases slowly along the solutions ( ).  The function in the case of the damped pendulum is an example of a Lyapunov function. Specifically, a function is called a Lyapunov function Lyapunov function for the system if for every solution of the system, , that is not an equilibrium solution of the system, with strict inequality except possible for a discrete set of s.  As an example, let us return to the damped harmonic oscillator If , then is a Hamiltonian function for our system. Recall that we also call the energy function of the system. However, if and is a solution for our system, we have Consequently, decreases at a nonzero rate (except when ), and is a Lyapunov function. The level sets of are ellipses in the -plane. As decreases, the energy dissipates and the ellipses become spiral sinks.  It is easy to see that the system has an equilibrium solution at the origin no matter what the value of is. The Jacobian of this system is Since our equilibrium solution is the origin, and the linearization of our system at the origin is Since the eigenvalues of are , the linearization has a center at the origin. The phase plane consists of circles about the origin ( ). Notice that the linearization does not depend on .      f(t,y) = (y[1], -y[0])    gap = 1\/2          Solution curves for the linearization.   Now let us consider what happens to system if we consider different values of . If , the situation is quite different than the linearization of our system. A solution curve spirals out from the origin as ( ). As , the solution curve spirals back into the origin, but it seems to stop before actually reaching the origin. If on the other hand, we seem to have the opposite behavior with the solution curves spiraling into the origin as . As before, the solutions do not seem to reach the origin ( ).      alpha = -5  f(t,y) = (y[1] + alpha*y[0]*(y[0]^2 + y[1]^2), -y[0] + alpha*y[1]*(y[0]^2 + y[1]^2))    gap = 1\/2          Solution curves .       alpha = 5  f(t,y) = (y[1] + alpha*y[0]*(y[0]^2 + y[1]^2), -y[0] + alpha*y[1]*(y[0]^2 + y[1]^2))    gap = 1\/2          Solution curves .   Suppose that is a solution to the nonlinear system. The function is the distance of a point on the solution curve to the origin in the -plane. To see how changes as , we can compute the derivative of . Actually, it is easier to work with the equation . Thus, Since , we have for .  Equation is separable, and it is quite easy to determine the solution as However, we do not need to know this solution to determine the nature of the equilibrium solution at the origin. If and , equation tells us that . Thus, any solution to the system we have a spiral sink at the origin if . Even though linearization fails to tell us the nature of the equilibrium solution at the origin, we were able to determine the nature of the equilibrium solution with further analysis.  We will now try to exploit what we have learned from our last example and from Hamiltonian systems to see if it is possible to analyze more general systems. If we consider solutions, , of the system we might ask how a function varies along the solution curve. We already have an answer if our system is Hamiltonian, and is the corresponding Hamiltonian function. In this case . In general, we know that Thus, if we let we know that Thus, is increasing along a solution curve if and decreasing along a solution curve if . Our example suggests that we can determine this information without finding the solution.  Recall that the gradient of a function is If then is the directional derivative of in the direction of .  Let us use this new information about to obtain information about equilibrium solutions of our system. We do know that graphs as a surface in and gives the contour lines or level curves of the surface in the -plane. See Figures 1 and 2 in John Polking, Albert Boggess, and David Arnold. {\\it Differential Equations}. Prentice Hall, Upper Saddle River, NJ, 2001, p. 611. We also know that the gradient of points in the direction that is increasing the fastest and that the gradient is orthogonal to the level curves of . Thus, if , we know that is increasing in the direction of the vector field and the elevation of the solution curve through in is increasing. That is, the solution curve is traveling uphill. Similarly, if , we know that the solution curve at is going downhill. The argument that we have made here also works in higher dimensions.  Now suppose that is a real-valued function defined on a set in the -plane, where the point is in . We say that is positive definite positive definite function if for all in , where , and is positive semidefinite positive semidefinite function if . Similarly, we say that is negative definite negative definite function and negative semidefinite negative semidefinite function if and , respectively.  For example, if we consider the system for a harmonic oscillator then the energy function, is positive definite.    Suppose that the system has an equilibrium solution at . Let be a continuously differentiable function defined on a neighborhood of that is positive definite with minimum at .  If is negative semidefinite on , then is a stable equilibrium solution. That is, any solution that starts near the equilibrium solution will stay near the equilibrium solution.  If is negative definite on , then is an asymptotically stable equilibrium solution or a sink.     Recall our example, The function is positive definite on , with an isolated minimum at the origin. We can compute If , then is negative definite on . tells us that the origin is a stable equilibrium point.  The function in is called a Lyapunov function Lyapunov function . If we compare Theorem 1 to using linearization to determine stability of an equilibrium solution, we will find that we can apply this result where linearization fails. Also, Lyapunov functions are defined on a domain , where linearization only tells us what happens on a small neighborhood around the equilibrium solution. Unfortunately, there are no general ways of finding Lyapunov functions.    Gradient Systems  Let be a real-valued function on the -plane. The gradient of is The system is a gradient system gradient system if For example, the system is a gradient system, where Now, let us see what happens on the solution curves of this gradient system. If is a solution curve, Thus, increases at the point on the solution curve where the gradient of is nonzero. That is, increases at every point on the solution curve except at the equilibrium points.  In general, suppose that is a gradient system. Since we know that increases on every solution to the system except at the critical points of .  Let us see what this means in terms of the linearization of the system. The Jacobian matrix of is Since , the matrix must have the form where , , and . The characteristic polynomial of is Therefore, the eigenvalues are Since we have real eigenvalues, a gradient system can have no spiral sources, spiral sinks, or centers.  For example, is a Lyapunov function for the system However, the origin is a spiral sink, so this system cannot be a gradient system.    Important Lessons   The equation for the nonlinear pendulum with damping can be analyzed by examining , where is the Hamiltonian function for the ideal pendulum. The function for this system is an example of a Lyapunov function .  Let be a real-valued function defined on a set in the -plane such that the point is in and .  We say that is positive definite if for all in , where .  We say that is positive semidefinite if for all in .  We say that is negative definite if for all in , where .  We say that is negative semidefinite if for all in .   Suppose that the system has an equilibrium solution at . Let be a continuously differentiable function defined on a neighborhood of that is positive definite with minimum at .  If is negative semidefinite on , then is a stable equilibrium solution. That is, any solution that starts near the equilibrium solution will stay near the equilibrium solution.  If is negative definite on , then is an asymptotically stable equilibrium solution or a sink.  We can use these results to analyze the behavior of equilibrium solutions where linearization fails. The function is called a Lyapunov function . We have no general methods for finding Lyapunov functions.  The system is a gradient system if where is a real-valued function on the -plane. Since  increases on every solution to the system except at the critical points of . Since the eigenvalues of a gradient system are real, a gradient system has no spiral sources, spiral sinks, or centers.       Explain in your own words what a Lyapunov function is.       Explain in your own words what a gradient system is.       Exercises   Positive Definite Functions  Consider each of the functions in on a neighborhood of . Determine if the function is positive definite, positive semidefinite, negative definite, negative semidefinite, or none of the previous. Justify your conclusion.                                   Consider the system   Find the equilibrium solutions of the system. Which one of the equilibrium solutions is stable?  Verify that the function is a Lyapunov function for the system, and calculate .  Sketch the level sets of .  Sketch the phase portrait of the system.       Consider the system   Verify that the function is a Lyapunov function for the system, and calculate .  Sketch the level sets of .  Sketch the phase portrait of the system.       Consider the system   Verify that the function is a Lyapunov function for the system.  Sketch the level sets of .  Sketch the phase portrait of the system.      Gradient Systems  Which of the systems in are gradient systems. If the system is a gradient system, find a gradient function.                             Suppose that .  What is the gradient system with the vector field given by the gradient of ?  Sketch graph of and the level sets of for and .  Sketch the phase portrait of the system that you found in (a) for and .       Suppose that .  What is the gradient system with the vector field given by the gradient of ?  Sketch graph of and the level sets of for and .  Sketch the phase portrait of the system that you found in (a) for and .       Suppose that .  What is the gradient system with the vector field given by the gradient of ?  Sketch graph of and the level sets of for and .  Sketch the phase portrait of the system that you found in (a) for and .      Lobster Navigation   Lobsters are a family (Nephropidae, synonym Homaridae) of marine crustaceans. They have long bodies with muscular tails and live in crevices or burrows on rocky, sandy, or muddy bottoms from the shoreline to beyond the edge of the continental shelf. Lobsters are omnivores and typically eat live prey such as fish, mollusks, other crustaceans, worms, and some plant life. They scavange if necessary. Because lobsters live in murky environments at the bottom of the ocean, they mostly use their antennae as sensors. Lobsters can \"smell\" their food by using four small antennae on the front of their heads and tiny sensing hairs that cover their bodies.  Let us assume that a lobster moves in a plane. If the position of the lobster is at time , then the lobster will head in the direction of a velocity vector, , at time . If is the concentration of the chemicals emanating from a potential food source, say a dead fish, then the lobster will move in the direction of the greatest increase . However, this direction is just the gradient vector of , . Therefore, the motion of the lobster is described by the system  Suppose that is defined on the rectangle and by   What is the gradient system for ?  Show that Hence, we can deduce that is increasing whenever .  Sketch the level sets of for and .  Sketch the vector field given by What do you notice about the two plots?  If how many dead fish will there be? Where are the dead fish located?    You may find Sage useful.    "
},
{
  "id": "nonlinear03-2",
  "level": "2",
  "url": "nonlinear03.html#nonlinear03-2",
  "type": "Objectives",
  "number": "5.3",
  "title": "",
  "body": "  To understand that the equation for the nonlinear pendulum with damping can be analyzed by examining , where is the Hamiltonian function for the ideal pendulum. The function for this system is an example of a Lyapunov function .  To understand how to use Lyapunov functions to determine the stability of an equilibrium solution for a nonlinear system.  To understand gradient systems and the types of solutions for gradient systems.   "
},
{
  "id": "nonlinear03-figure-damped-pendulum-nullclines",
  "level": "2",
  "url": "nonlinear03.html#nonlinear03-figure-damped-pendulum-nullclines",
  "type": "Figure",
  "number": "5.3.1",
  "title": "",
  "body": "    b = 0.5  m = 1  g = 1  L = 1  f(t,y) = (y[1], - (b\/m)*y[1] - (g\/L)*sin(y[0]))    gap = 1\/2                  g(s)=2*sin(s - pi )    x -nullcline  y -nullcline        Nullclines of the damped pendulum  "
},
{
  "id": "nonlinear03-subsection-lyapunov-functions-4",
  "level": "2",
  "url": "nonlinear03.html#nonlinear03-subsection-lyapunov-functions-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Lyapunov function "
},
{
  "id": "nonlinear03-figure-linearization-solution-curves-1",
  "level": "2",
  "url": "nonlinear03.html#nonlinear03-figure-linearization-solution-curves-1",
  "type": "Figure",
  "number": "5.3.2",
  "title": "",
  "body": "    f(t,y) = (y[1], -y[0])    gap = 1\/2          Solution curves for the linearization.  "
},
{
  "id": "nonlinear03-figure-linearization-solution-curves-2",
  "level": "2",
  "url": "nonlinear03.html#nonlinear03-figure-linearization-solution-curves-2",
  "type": "Figure",
  "number": "5.3.3",
  "title": "",
  "body": "    alpha = -5  f(t,y) = (y[1] + alpha*y[0]*(y[0]^2 + y[1]^2), -y[0] + alpha*y[1]*(y[0]^2 + y[1]^2))    gap = 1\/2          Solution curves .  "
},
{
  "id": "nonlinear03-figure-linearization-solution-curves-3",
  "level": "2",
  "url": "nonlinear03.html#nonlinear03-figure-linearization-solution-curves-3",
  "type": "Figure",
  "number": "5.3.4",
  "title": "",
  "body": "    alpha = 5  f(t,y) = (y[1] + alpha*y[0]*(y[0]^2 + y[1]^2), -y[0] + alpha*y[1]*(y[0]^2 + y[1]^2))    gap = 1\/2          Solution curves .  "
},
{
  "id": "nonlinear03-subsection-lyapunov-functions-16",
  "level": "2",
  "url": "nonlinear03.html#nonlinear03-subsection-lyapunov-functions-16",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "positive definite positive semidefinite negative definite negative semidefinite "
},
{
  "id": "nonlinear03-theorem-lyapunov",
  "level": "2",
  "url": "nonlinear03.html#nonlinear03-theorem-lyapunov",
  "type": "Theorem",
  "number": "5.3.5",
  "title": "",
  "body": "  Suppose that the system has an equilibrium solution at . Let be a continuously differentiable function defined on a neighborhood of that is positive definite with minimum at .  If is negative semidefinite on , then is a stable equilibrium solution. That is, any solution that starts near the equilibrium solution will stay near the equilibrium solution.  If is negative definite on , then is an asymptotically stable equilibrium solution or a sink.    "
},
{
  "id": "nonlinear03-subsection-lyapunov-functions-20",
  "level": "2",
  "url": "nonlinear03.html#nonlinear03-subsection-lyapunov-functions-20",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Lyapunov function "
},
{
  "id": "nonlinear03-subsection-gradient-systems-2",
  "level": "2",
  "url": "nonlinear03.html#nonlinear03-subsection-gradient-systems-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "gradient system "
},
{
  "id": "nonlinear03-subsection-important-lessons-2",
  "level": "2",
  "url": "nonlinear03.html#nonlinear03-subsection-important-lessons-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Lyapunov function positive definite positive semidefinite negative definite negative semidefinite Lyapunov function gradient system "
},
{
  "id": "rq-nonlinear03-lyapunov",
  "level": "2",
  "url": "nonlinear03.html#rq-nonlinear03-lyapunov",
  "type": "Reading Question",
  "number": "5.3.5.1",
  "title": "",
  "body": "  Explain in your own words what a Lyapunov function is.    "
},
{
  "id": "rq-nonlinear03-gradient",
  "level": "2",
  "url": "nonlinear03.html#rq-nonlinear03-gradient",
  "type": "Reading Question",
  "number": "5.3.5.2",
  "title": "",
  "body": "  Explain in your own words what a gradient system is.    "
},
{
  "id": "nonlinear03-exercises-positive-definite-3",
  "level": "2",
  "url": "nonlinear03.html#nonlinear03-exercises-positive-definite-3",
  "type": "Exercise",
  "number": "5.3.6.1",
  "title": "",
  "body": "    "
},
{
  "id": "nonlinear03-exercises-positive-definite-4",
  "level": "2",
  "url": "nonlinear03.html#nonlinear03-exercises-positive-definite-4",
  "type": "Exercise",
  "number": "5.3.6.2",
  "title": "",
  "body": "    "
},
{
  "id": "nonlinear03-exercises-positive-definite-5",
  "level": "2",
  "url": "nonlinear03.html#nonlinear03-exercises-positive-definite-5",
  "type": "Exercise",
  "number": "5.3.6.3",
  "title": "",
  "body": "    "
},
{
  "id": "nonlinear03-exercises-positive-definite-6",
  "level": "2",
  "url": "nonlinear03.html#nonlinear03-exercises-positive-definite-6",
  "type": "Exercise",
  "number": "5.3.6.4",
  "title": "",
  "body": "    "
},
{
  "id": "nonlinear03-exercises-positive-definite-7",
  "level": "2",
  "url": "nonlinear03.html#nonlinear03-exercises-positive-definite-7",
  "type": "Exercise",
  "number": "5.3.6.5",
  "title": "",
  "body": "    "
},
{
  "id": "nonlinear03-exercises-positive-definite-8",
  "level": "2",
  "url": "nonlinear03.html#nonlinear03-exercises-positive-definite-8",
  "type": "Exercise",
  "number": "5.3.6.6",
  "title": "",
  "body": "    "
},
{
  "id": "nonlinear03-exercises-3",
  "level": "2",
  "url": "nonlinear03.html#nonlinear03-exercises-3",
  "type": "Exercise",
  "number": "5.3.6.7",
  "title": "",
  "body": "  Consider the system   Find the equilibrium solutions of the system. Which one of the equilibrium solutions is stable?  Verify that the function is a Lyapunov function for the system, and calculate .  Sketch the level sets of .  Sketch the phase portrait of the system.    "
},
{
  "id": "nonlinear03-exercises-4",
  "level": "2",
  "url": "nonlinear03.html#nonlinear03-exercises-4",
  "type": "Exercise",
  "number": "5.3.6.8",
  "title": "",
  "body": "  Consider the system   Verify that the function is a Lyapunov function for the system, and calculate .  Sketch the level sets of .  Sketch the phase portrait of the system.    "
},
{
  "id": "nonlinear03-exercises-5",
  "level": "2",
  "url": "nonlinear03.html#nonlinear03-exercises-5",
  "type": "Exercise",
  "number": "5.3.6.9",
  "title": "",
  "body": "  Consider the system   Verify that the function is a Lyapunov function for the system.  Sketch the level sets of .  Sketch the phase portrait of the system.    "
},
{
  "id": "nonlinear03-exercises-gradient-systems-3",
  "level": "2",
  "url": "nonlinear03.html#nonlinear03-exercises-gradient-systems-3",
  "type": "Exercise",
  "number": "5.3.6.10",
  "title": "",
  "body": "     "
},
{
  "id": "nonlinear03-exercises-gradient-systems-4",
  "level": "2",
  "url": "nonlinear03.html#nonlinear03-exercises-gradient-systems-4",
  "type": "Exercise",
  "number": "5.3.6.11",
  "title": "",
  "body": "     "
},
{
  "id": "nonlinear03-exercises-gradient-systems-5",
  "level": "2",
  "url": "nonlinear03.html#nonlinear03-exercises-gradient-systems-5",
  "type": "Exercise",
  "number": "5.3.6.12",
  "title": "",
  "body": "     "
},
{
  "id": "nonlinear03-exercises-gradient-systems-6",
  "level": "2",
  "url": "nonlinear03.html#nonlinear03-exercises-gradient-systems-6",
  "type": "Exercise",
  "number": "5.3.6.13",
  "title": "",
  "body": "     "
},
{
  "id": "nonlinear03-exercises-7",
  "level": "2",
  "url": "nonlinear03.html#nonlinear03-exercises-7",
  "type": "Exercise",
  "number": "5.3.6.14",
  "title": "",
  "body": "  Suppose that .  What is the gradient system with the vector field given by the gradient of ?  Sketch graph of and the level sets of for and .  Sketch the phase portrait of the system that you found in (a) for and .    "
},
{
  "id": "nonlinear03-exercises-8",
  "level": "2",
  "url": "nonlinear03.html#nonlinear03-exercises-8",
  "type": "Exercise",
  "number": "5.3.6.15",
  "title": "",
  "body": "  Suppose that .  What is the gradient system with the vector field given by the gradient of ?  Sketch graph of and the level sets of for and .  Sketch the phase portrait of the system that you found in (a) for and .    "
},
{
  "id": "nonlinear03-exercises-9",
  "level": "2",
  "url": "nonlinear03.html#nonlinear03-exercises-9",
  "type": "Exercise",
  "number": "5.3.6.16",
  "title": "",
  "body": "  Suppose that .  What is the gradient system with the vector field given by the gradient of ?  Sketch graph of and the level sets of for and .  Sketch the phase portrait of the system that you found in (a) for and .    "
},
{
  "id": "nonlinear03-exercises-10",
  "level": "2",
  "url": "nonlinear03.html#nonlinear03-exercises-10",
  "type": "Exercise",
  "number": "5.3.6.17",
  "title": "Lobster Navigation.",
  "body": " Lobster Navigation   Lobsters are a family (Nephropidae, synonym Homaridae) of marine crustaceans. They have long bodies with muscular tails and live in crevices or burrows on rocky, sandy, or muddy bottoms from the shoreline to beyond the edge of the continental shelf. Lobsters are omnivores and typically eat live prey such as fish, mollusks, other crustaceans, worms, and some plant life. They scavange if necessary. Because lobsters live in murky environments at the bottom of the ocean, they mostly use their antennae as sensors. Lobsters can \"smell\" their food by using four small antennae on the front of their heads and tiny sensing hairs that cover their bodies.  Let us assume that a lobster moves in a plane. If the position of the lobster is at time , then the lobster will head in the direction of a velocity vector, , at time . If is the concentration of the chemicals emanating from a potential food source, say a dead fish, then the lobster will move in the direction of the greatest increase . However, this direction is just the gradient vector of , . Therefore, the motion of the lobster is described by the system  Suppose that is defined on the rectangle and by   What is the gradient system for ?  Show that Hence, we can deduce that is increasing whenever .  Sketch the level sets of for and .  Sketch the vector field given by What do you notice about the two plots?  If how many dead fish will there be? Where are the dead fish located?    You may find Sage useful.  "
},
{
  "id": "nonlinear04",
  "level": "1",
  "url": "nonlinear04.html",
  "type": "Section",
  "number": "5.4",
  "title": "The Hopf Bifurcation",
  "body": " The Hopf Bifurcation    To understand that Hopf bifurcations ; that is, bifurcations for systems parameterized by , occur if an attracting periodic solution encircling an equilibrium solution develops as passes through the bifurcation value.     If we consider the phase portrait of a system we may see closed orbits and various types of equilibrium solutions. If we make a slight change in the system, then we might reasonably expect the phase portrait to change slightly. For example, a closed orbit might expand or contract, an equilibrium solution might shift, or a spiral source might tighten up, but we would not expect new equilibrium solutions to appear or a spiral source to turn into a spiral sink. However, this may be exactly what happens. If such a change occurs in the system through an adjustment of a parameter, we say a bifurcation bifurcation has occurred.    Bifurcations  The simplest bifurcations occur when an equilibrium solution appears, disappears, or splits into two or more equilibrium solutions. For example, the system has no equilibrium solution if ( ). However, we have a single equilibrium solution at the origin if and two equilibrium solutions, , if .      alpha = 5  f(t,y) = (alpha + y[0]^2, -y[1])    gap = 2          Solution curves .   The Jacobian of the system is If , then has eigenvalues 0 and . This is not an elementary equilibrium point such a saddle, a sink, or a spiral source. We call this type of equilibrium solution a saddle-node saddle-node . On the right half of the -plane, the equilibrium solution resembles a saddle, while on the left half it resembles a sink ( ).      alpha = -16  f(t,y) = (alpha + y[0]^2, -y[1])    gap = 2          Solutions for   If , then In the first case, we have a saddle since the eigenvalues are real and of opposite sign. In the second case, we have a nodal sink, since both eigenvalues are negative. The two equilibrium solutions move in opposite directions as decreases. We can summarize what happens for various values of with a bifurcation diagram such as the one in .      g(t)=(-t^2,t)       Bifurcation Point    x = \\sqrt{-\\alpha} , Saddle Point   x = -\\sqrt{-\\alpha} , Stable Equilibrium       Bifurcation diagram     The Hopf Bifurcation  Now let us consider an entirely different type of bifurcation by examining the system The origin is an equilibrium solution for all values of . The linearization of our system is Since the eigenvalues of this system are , we can easily determine the nature of of our linearization. If , we have a spiral sink. As moves from negative values to positive values, the origin changes to a center ( ), and then to a spiral source ( ).  In the case of the nonlinear system, the origin is still a spiral sink for ( ). If , the origin is still a spiral source ( ). However, something quite different happens at . The origin is stable equilibrium solution with solutions spiraling into the origin very slowly. As increases past zero, the equilibrium solution destabilizes and becomes a source. In addition, a closed orbit of radius develops. Solutions inside of this closed orbit spiral out towards the orbit, while solutions outside of the orbit spiral inward ( ).      alpha = -1  f(t,y) = (alpha*y[0] + 5*y[1] -y[0]*(y[0]^2 + y[1]^2), -5*y[0] + alpha*y[1] - y[1]*(y[0]^2 + y[1]^2))    gap = 1\/4          Solutions for       alpha = 0  f(t,y) = (alpha*y[0] + 5*y[1] -y[0]*(y[0]^2 + y[1]^2), -5*y[0] + alpha*y[1] - y[1]*(y[0]^2 + y[1]^2))    gap = 1\/4          Solutions for       alpha = 1  f(t,y) = (alpha*y[0] + 5*y[1] -y[0]*(y[0]^2 + y[1]^2), -5*y[0] + alpha*y[1] - y[1]*(y[0]^2 + y[1]^2))    gap = 1\/4            Solutions for   To see exactly what happens as passes zero and becomes positive, we will rewrite our system in polar coordinates. If we make the substitution and , our nonlinear system can be rewritten as If , the origin is a sink since for all . In this case all solutions tend towards the origin as . When , the origin is still an equilibrium solution. Moreover, , when . We also know that for and if . So the circle of radius is a periodic solution with the trajectory moving clockwise since . All nonzero solutions spiral towards this orbit as . This type of bifurcation is called a Hopf bifurcation Hopf bifurcation . No new equilibrium solutions arise, but a periodic solution develops as passes through the bifurcation value.   Hopf Bifurcation   Suppose that is a equilibrium solution for the family of systems parameterized by , and the Jacobian matrix for the system evaluated at this equilibrium has eigenvalues . Assume that at some , we have , , , and that the equilibrium point is asymptotically stable. Then there exists an such that the system has a periodic solution encircling the equilibrium solution for . For a proof and description of the Hopf Bifurcation Theorem see C. Chicone. Ordinary Differential Equations with Applications . Springer-Verlag, New York, 1999.    Recall that our example system has an equilibrium at with eigenvalues . If we let , then , , and . Thus, the hypothesis of the Hopf Bifurcation Theorem are satisfied and we are guaranteed a period solution surrounding our equilibrium solution.   Van der Pol's equation  Van der Pol's equation, a simple nonlinear equation having applications in electrical engineering and mathematical biology, is . This equation can be written as the system The phase portrait for Van der Pol's equation is given in . The origin is the only equilibrium solution to Van der Pol's equation, and one might guess that this solution acts like a spiral source by examining the phase portrait. If we examine the system consisting of only linear terms on the right-hand side of the equation, we might get a better sense of what is happening. The matrix for this linear system, has eigenvalues . This suggests that the origin looks like a spiral source at least locally. Indeed, the Jacobian matrix for is which agrees with for .      alpha = -1  f(t,y) = (y[1], -y[0] + y[0]*(1 - y[0]^2)*y[1])    gap = 1\/2          Van der Pol's equation    Let us examine how a bifurcation might occur in a predator-prey model. In our model, we will assume that a predator's appetite is satiated when food is abundant. If this is the case, an increase in the prey population has little effect on the interaction terms in our model. We might model this satiable predator-prey scenario by the equations where is the prey population at time and is the predator population at time . Here, and are constants. Let us choose the constants so that our system becomes The constant is know as the satiation constant satiation constant . The larger the value of , the more quickly a predator's appetite is satiated as the prey population increases.  Let us see examine the phase portrait for several values of . If , then there is no satiation effect. In this case, all trajectories inside the population quadrant spiral asymptotically towards a single stable equilibrium point ( ). If , we have a very similar phase portrait with solutions spiraling in towards a stable equilibrium solution ( ). However, if , we have a periodic trajectory. All other trajectories are pulled toward this attracting periodic orbit ( ).      alpha = 0  f(t,y) = ((1 - y[0])*y[0] - y[0]*y[1]\/(0.3 + alpha*y[0]), -0.5*y[1] + y[0]*y[1]\/(0.3 + alpha*y[0]))    gap = 1\/15          Predator-prey model with       alpha = 1.35  f(t,y) = ((1 - y[0])*y[0] - y[0]*y[1]\/(0.3 + alpha*y[0]), -0.5*y[1] + y[0]*y[1]\/(0.3 + alpha*y[0]))    gap = 1\/15          Predator-prey model with       alpha = 0.9  f(t,y) = ((1 - y[0])*y[0] - y[0]*y[1]\/(0.3 + alpha*y[0]), -0.5*y[1] + y[0]*y[1]\/(0.3 + alpha*y[0]))    gap = 1\/15          Predator-prey model with       f(x) = 0.15\/(1 - 0.5*x)          Bifurcation Point    Bifurcation Point    Sink    Source    Sink        Bifurcation diagram for the satiable predator-prey model   As continues to increase a Hopf bifurcation occurs at . At this point the equilibrium solution destabilizes and spawns an attracting periodic orbit. As continues to increase, the amplitude of this periodic orbit increases. However, at , the amplitude of the periodic solution begins to decrease. At , the equilibrium point re-stabilizes and the periodic solution is absorbed. For , we only have a stable equilibrium solution in the first quadrant. The -coordinate of our equilibrium solution is and we can summarize our findings with a bifurcation diagram ( ).    Important Lessons   If we make a slight change in the system, then we might reasonably expect the phase portrait to change slightly. For example, a closed orbit might expand or contract, an equilibrium solution might shift, or a spiral source might tighten up, but we would not expect new equilibrium solutions to appear or a spiral source to turn into a spiral sink. However, this may be exactly what happens. If such a change occurs in the system through an adjustment of a parameter, we say a bifurcation has occurred.  A Hopf bifurcation if an attracting periodic solution encircling an equilibrium solution develops as passes through the bifurcation value.  Suppose that is a equilibrium solution for the family of systems parameterized by , and the Jacobian matrix for the system evaluated at this equilibrium has eigenvalues . Assume that at some , we have , , , and that the equilibrium point is asymptotically stable. Then there exists an such that the system has a periodic solution encircling the equilibrium solution for .  A satiable predator-prey scenario can be modeled by the equations where is the prey population at time and is the predator population at time . Here, and are constants. The constant is know as the satiation constant . The larger the value of , the more quickly a predator's appetite is satiated as the prey population increases.       Explain what a Hopf bifurcation is.       What scenerio does a satiated predator-prey model describe? Explain.       Exercises    Consider the system   Verify that the function is a Lyapunov function for the system.  Sketch the level sets of .  What can you conclude about the phase portrait of the system from (1) and (2)?       Let .  What is the gradient system with vector field given by the gradient of ?  Sketch the graph of and the level sets of .  Sketch the phase portrait of the gradient system in (1).       Suppose that the smell of a bunch of dead fish in the region , is given by the function   What is the gradient system who vector field is the gradient of ?  Use Sage to graph the phase portrait of the system.  How many dead fish are there and where are they?  Using the results from part (2), sketch the level sets of .  Why is this model not realistic for large values of or ?       Consider the system of differential equations where and are parameters with . Suppose that this system is only defined for .  Use nullclines to sketch the phase portrait for this system for several values of and .  Determine the values of and at which a bifurcation occurs.       Show that the quadratic polynomial is positive definite with minimum at if and only if and .      Use the positive definite function to argue that the system has an asymptotically stable equilibrium solution at .     "
},
{
  "id": "nonlinear04-2",
  "level": "2",
  "url": "nonlinear04.html#nonlinear04-2",
  "type": "Objectives",
  "number": "5.4",
  "title": "",
  "body": "  To understand that Hopf bifurcations ; that is, bifurcations for systems parameterized by , occur if an attracting periodic solution encircling an equilibrium solution develops as passes through the bifurcation value.   "
},
{
  "id": "nonlinear04-3-1",
  "level": "2",
  "url": "nonlinear04.html#nonlinear04-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "bifurcation "
},
{
  "id": "nonlinear04-figure-hopf-1",
  "level": "2",
  "url": "nonlinear04.html#nonlinear04-figure-hopf-1",
  "type": "Figure",
  "number": "5.4.1",
  "title": "",
  "body": "    alpha = 5  f(t,y) = (alpha + y[0]^2, -y[1])    gap = 2          Solution curves .  "
},
{
  "id": "nonlinear04-subsection-bifurcations-4",
  "level": "2",
  "url": "nonlinear04.html#nonlinear04-subsection-bifurcations-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "saddle-node "
},
{
  "id": "nonlinear04-figure-hopf-2",
  "level": "2",
  "url": "nonlinear04.html#nonlinear04-figure-hopf-2",
  "type": "Figure",
  "number": "5.4.2",
  "title": "",
  "body": "    alpha = -16  f(t,y) = (alpha + y[0]^2, -y[1])    gap = 2          Solutions for  "
},
{
  "id": "nonlinear04-figure-h-bifurcation",
  "level": "2",
  "url": "nonlinear04.html#nonlinear04-figure-h-bifurcation",
  "type": "Figure",
  "number": "5.4.3",
  "title": "",
  "body": "    g(t)=(-t^2,t)       Bifurcation Point    x = \\sqrt{-\\alpha} , Saddle Point   x = -\\sqrt{-\\alpha} , Stable Equilibrium       Bifurcation diagram  "
},
{
  "id": "nonlinear04-figure-hopf-5",
  "level": "2",
  "url": "nonlinear04.html#nonlinear04-figure-hopf-5",
  "type": "Figure",
  "number": "5.4.4",
  "title": "",
  "body": "    alpha = -1  f(t,y) = (alpha*y[0] + 5*y[1] -y[0]*(y[0]^2 + y[1]^2), -5*y[0] + alpha*y[1] - y[1]*(y[0]^2 + y[1]^2))    gap = 1\/4          Solutions for  "
},
{
  "id": "nonlinear04-figure-hopf-6",
  "level": "2",
  "url": "nonlinear04.html#nonlinear04-figure-hopf-6",
  "type": "Figure",
  "number": "5.4.5",
  "title": "",
  "body": "    alpha = 0  f(t,y) = (alpha*y[0] + 5*y[1] -y[0]*(y[0]^2 + y[1]^2), -5*y[0] + alpha*y[1] - y[1]*(y[0]^2 + y[1]^2))    gap = 1\/4          Solutions for  "
},
{
  "id": "nonlinear04-figure-hopf-7",
  "level": "2",
  "url": "nonlinear04.html#nonlinear04-figure-hopf-7",
  "type": "Figure",
  "number": "5.4.6",
  "title": "",
  "body": "    alpha = 1  f(t,y) = (alpha*y[0] + 5*y[1] -y[0]*(y[0]^2 + y[1]^2), -5*y[0] + alpha*y[1] - y[1]*(y[0]^2 + y[1]^2))    gap = 1\/4            Solutions for  "
},
{
  "id": "nonlinear04-subsection-hopf-bifurcation-7",
  "level": "2",
  "url": "nonlinear04.html#nonlinear04-subsection-hopf-bifurcation-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Hopf bifurcation "
},
{
  "id": "nonlinear04-theorem-lyapunov",
  "level": "2",
  "url": "nonlinear04.html#nonlinear04-theorem-lyapunov",
  "type": "Theorem",
  "number": "5.4.7",
  "title": "Hopf Bifurcation.",
  "body": " Hopf Bifurcation   Suppose that is a equilibrium solution for the family of systems parameterized by , and the Jacobian matrix for the system evaluated at this equilibrium has eigenvalues . Assume that at some , we have , , , and that the equilibrium point is asymptotically stable. Then there exists an such that the system has a periodic solution encircling the equilibrium solution for . For a proof and description of the Hopf Bifurcation Theorem see C. Chicone. Ordinary Differential Equations with Applications . Springer-Verlag, New York, 1999.   "
},
{
  "id": "nonlinear04-subsection-hopf-bifurcation-10",
  "level": "2",
  "url": "nonlinear04.html#nonlinear04-subsection-hopf-bifurcation-10",
  "type": "Example",
  "number": "5.4.8",
  "title": "Van der Pol’s equation.",
  "body": " Van der Pol's equation  Van der Pol's equation, a simple nonlinear equation having applications in electrical engineering and mathematical biology, is . This equation can be written as the system The phase portrait for Van der Pol's equation is given in . The origin is the only equilibrium solution to Van der Pol's equation, and one might guess that this solution acts like a spiral source by examining the phase portrait. If we examine the system consisting of only linear terms on the right-hand side of the equation, we might get a better sense of what is happening. The matrix for this linear system, has eigenvalues . This suggests that the origin looks like a spiral source at least locally. Indeed, the Jacobian matrix for is which agrees with for .      alpha = -1  f(t,y) = (y[1], -y[0] + y[0]*(1 - y[0]^2)*y[1])    gap = 1\/2          Van der Pol's equation   "
},
{
  "id": "nonlinear04-subsection-hopf-bifurcation-11",
  "level": "2",
  "url": "nonlinear04.html#nonlinear04-subsection-hopf-bifurcation-11",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "satiation constant "
},
{
  "id": "nonlinear04-figure-satiated-predator-prey-1",
  "level": "2",
  "url": "nonlinear04.html#nonlinear04-figure-satiated-predator-prey-1",
  "type": "Figure",
  "number": "5.4.10",
  "title": "",
  "body": "    alpha = 0  f(t,y) = ((1 - y[0])*y[0] - y[0]*y[1]\/(0.3 + alpha*y[0]), -0.5*y[1] + y[0]*y[1]\/(0.3 + alpha*y[0]))    gap = 1\/15          Predator-prey model with  "
},
{
  "id": "nonlinear04-figure-satiated-predator-prey-2",
  "level": "2",
  "url": "nonlinear04.html#nonlinear04-figure-satiated-predator-prey-2",
  "type": "Figure",
  "number": "5.4.11",
  "title": "",
  "body": "    alpha = 1.35  f(t,y) = ((1 - y[0])*y[0] - y[0]*y[1]\/(0.3 + alpha*y[0]), -0.5*y[1] + y[0]*y[1]\/(0.3 + alpha*y[0]))    gap = 1\/15          Predator-prey model with  "
},
{
  "id": "nonlinear04-figure-satiated-predator-prey-3",
  "level": "2",
  "url": "nonlinear04.html#nonlinear04-figure-satiated-predator-prey-3",
  "type": "Figure",
  "number": "5.4.12",
  "title": "",
  "body": "    alpha = 0.9  f(t,y) = ((1 - y[0])*y[0] - y[0]*y[1]\/(0.3 + alpha*y[0]), -0.5*y[1] + y[0]*y[1]\/(0.3 + alpha*y[0]))    gap = 1\/15          Predator-prey model with  "
},
{
  "id": "nonlinear04-figure-satiated-predator-prey-4",
  "level": "2",
  "url": "nonlinear04.html#nonlinear04-figure-satiated-predator-prey-4",
  "type": "Figure",
  "number": "5.4.13",
  "title": "",
  "body": "    f(x) = 0.15\/(1 - 0.5*x)          Bifurcation Point    Bifurcation Point    Sink    Source    Sink        Bifurcation diagram for the satiable predator-prey model  "
},
{
  "id": "nonlinear04-subsection-important-lessons-2",
  "level": "2",
  "url": "nonlinear04.html#nonlinear04-subsection-important-lessons-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "bifurcation Hopf bifurcation satiation constant "
},
{
  "id": "rq-nonlinear04-hopf",
  "level": "2",
  "url": "nonlinear04.html#rq-nonlinear04-hopf",
  "type": "Reading Question",
  "number": "5.4.4.1",
  "title": "",
  "body": "  Explain what a Hopf bifurcation is.    "
},
{
  "id": "rq-nonlinear04-satiated",
  "level": "2",
  "url": "nonlinear04.html#rq-nonlinear04-satiated",
  "type": "Reading Question",
  "number": "5.4.4.2",
  "title": "",
  "body": "  What scenerio does a satiated predator-prey model describe? Explain.    "
},
{
  "id": "nonlinear04-exercises-2",
  "level": "2",
  "url": "nonlinear04.html#nonlinear04-exercises-2",
  "type": "Exercise",
  "number": "5.4.5.1",
  "title": "",
  "body": "  Consider the system   Verify that the function is a Lyapunov function for the system.  Sketch the level sets of .  What can you conclude about the phase portrait of the system from (1) and (2)?    "
},
{
  "id": "nonlinear04-exercises-3",
  "level": "2",
  "url": "nonlinear04.html#nonlinear04-exercises-3",
  "type": "Exercise",
  "number": "5.4.5.2",
  "title": "",
  "body": "  Let .  What is the gradient system with vector field given by the gradient of ?  Sketch the graph of and the level sets of .  Sketch the phase portrait of the gradient system in (1).    "
},
{
  "id": "nonlinear04-exercises-4",
  "level": "2",
  "url": "nonlinear04.html#nonlinear04-exercises-4",
  "type": "Exercise",
  "number": "5.4.5.3",
  "title": "",
  "body": "  Suppose that the smell of a bunch of dead fish in the region , is given by the function   What is the gradient system who vector field is the gradient of ?  Use Sage to graph the phase portrait of the system.  How many dead fish are there and where are they?  Using the results from part (2), sketch the level sets of .  Why is this model not realistic for large values of or ?    "
},
{
  "id": "nonlinear04-exercises-5",
  "level": "2",
  "url": "nonlinear04.html#nonlinear04-exercises-5",
  "type": "Exercise",
  "number": "5.4.5.4",
  "title": "",
  "body": "  Consider the system of differential equations where and are parameters with . Suppose that this system is only defined for .  Use nullclines to sketch the phase portrait for this system for several values of and .  Determine the values of and at which a bifurcation occurs.    "
},
{
  "id": "nonlinear04-exercises-6",
  "level": "2",
  "url": "nonlinear04.html#nonlinear04-exercises-6",
  "type": "Exercise",
  "number": "5.4.5.5",
  "title": "",
  "body": "  Show that the quadratic polynomial is positive definite with minimum at if and only if and .   "
},
{
  "id": "nonlinear04-exercises-7",
  "level": "2",
  "url": "nonlinear04.html#nonlinear04-exercises-7",
  "type": "Exercise",
  "number": "5.4.5.6",
  "title": "",
  "body": "  Use the positive definite function to argue that the system has an asymptotically stable equilibrium solution at .   "
},
{
  "id": "nonlinear05",
  "level": "1",
  "url": "nonlinear05.html",
  "type": "Section",
  "number": "5.5",
  "title": "Projects",
  "body": " Projects   Project The Lorenz Equations   In 1963, an MIT professor, Edward N. Lorenz, published a paper on his research in meteorology. Using differential equations, Lorenz had developed a simplified system to model certain weather-related phenomena. When he analyzed the system, however, he found that the trajectories of the solutions were incredibly convoluted and effectively unpredictable for certain parameters. The Lorenz equations Lorenz equations can be written as where , , and are constants. The Existence and Uniqueness Theorem for systems of differential equations guarantees a unique solution for each set of initial conditions, However, Lorenz discovered that the trajectories of the solutions were incredibly convoluted and effectively unpredictable for certain parameters. For certain values of , , and , the trajectories are extremely sensitive to initial conditions. Since real data always has some inherent uncertainty, initial values are never precisely known, and we may have little success modeling real world phenomena. In addition, solutions can stay in a bounded region of the three dimensional version of the phase plane and wind through the region along an incredibly convoluted path. There is much more freedom to move around in three dimensions than there is in two.    Lorenz noticed that the system behaved strangely, when he let , , and . Thus, our system defines a vector field in , and the equilibrium solutions occur exactly when this vector field is zero. That is, is an equilibrium solution if Find all of the equilibrium solutions for this system.     If we wish to understand the nature of the equilibrium solutions of the Lorenz system, it makes sense to linearize the system. Compute the Jacobian matrix of the system and determine the nature of each of the equilibrium solutions that you found in .       Consider the Lorenz system In this exercise, we shall show that the solutions of the system are bounded.    If Show that    It is true that . Assuming this, show that where is the smallest of the three numbers 1, , and .    Use parts and to show that    Use part to show that everywhere outside of the ellipsoid    Use part to show that the ellipsoid is invariant, and that every solution curve ends up inside of .       Project Tuned-Mass Dampers   The 60-story, 790-foot mirror-glass John Hancock Tower, New England's tallest building, was completed in 1976 and was designed by Henry N. Cobb, who founded the firm Pei Cobb Freed & Partners with famed architect I.M. Pei. ( ). The John Hancock Tower is now officially known by its street address, 200 Clarendon Street. The building suffered many problems during construction, the most notorious of which was how the original glass windows were attached. In early 1972 when construction was still underway, one of the 500-pound windows popped out of the building and committed suicide on the sidewalk below. In all, more than 100 of the building's windows suffered the same fate. Fortunately, no one was injured. Initially, the architects and engineers thought that the problem was caused by the building's tendancy to sway excessively in high winds. However, they later determined that the falling-window problem was caused by the air space between the double-paned windows and pressure differentials between the interior and exterior of the building. The problem was solved by replacing all of the windows with single sheets of fully tempered glass. During the repairs, the windows were replaced with plywood, and the building was nicknamed the Plywood Palace.   The John Hancock Tower   a photo of the John Hancock Tower in Boston    Another flaw in the design of the building resulted in an extreme amount of swaying. In fact, office workers in the upper stories of the building complained of motion sickness. The building actually twisted as it was swaying back and forth. Engineers determined that the building's natural sway period was dangerously close to the period of its torsion. To remedy the problem, the engineers installed a pair of tuned mass dampers on the 58th floor of the building to absorb the energy created by the swaying. This is the floor of concrete that you see near the top of the structure ( ). In addition, 1,500 tons of steel braces were installed to keep the building from falling over in a high wind. This project is adapted from Keith Alan Landry; Brian Winkel (2016), 5-040-S-TunedMassDampers-Part I,  .    To construct a simple model of a tuned-mass damper, we will consider a mass, , connected to a fixed wall with a spring and a dashpot. To this first mass, we attach a second mass, , by using a spring and a dashpot (see ). Here the oscillator to be damped has mass with spring or restoring constant and resistance or damping constant . This could be a large structure, where would be its stiffness while would reflect internal frictional resistance to motion proportional to the velocity of the structure. The damping oscillator would be a large mass which sits atop the structure and is permitted to slide or roll as the structure sways in response to wind or seismic forces. This damper has mass with spring or restoring constant and resistance or damping constant .                      \\text{wall}  m_1  m_2  \\rho_1 \\cos( \\omega t)    x_1   x_2    k_1  k_2  b_1  b_2       Diagram of a tuned mass damper   Using Newton’s Second Law, which says that the mass times the acceleration of that mass is equal to the sum of all external forces acting on the mass show that the governing equations for the motions of the structure and the damper are given by  In our study here we will first presume an ideal structure with no resistance or damping coefficient; i.e., , and the same for the damper; i.e., . As we can see there is a driving force applied to the structure of . Our interest will be in seeing if we can tune the added mass damper to reduce or eliminate the possibility of resonance when the initial structure is driven by a force with a frequency equal to that of the natural frequency of the initial mass system.  If we let show that the system can be written as a system of four first-order linear equations.     Determine the system of four first-order linear equations from when there is no damping; i.e., and .    Now use and with , , , and for , while and set with ; i.e., withdraw the second mass system. Explain the physical significance and impact results of the numbers , , and in the above sentence in terms of the motion of the initial oscillator. Solve this system for the motion of mass over a time interval of units and plot the displacement of that mass, , over that time interval. Explain what you see.    In the system that you found in , use the values of and with with , , , and for and and set with varying values of . Keep and . What do you observe in the maximum amplitude of the initial mass as one changes ? Defend your observation with data or plot.    From what is the best value of ? Be sure you define the word best.    For the best value of determine the maximum amplitude displacement for mass , over a range of frequencies.      We consider another, comparable configuration as for practice. Notice that mass is only 1% of mass , which is quite realistic in structural design when using tuned mass dampers.    In the system that you found in , use and with , , , and for , while and set with ; i.e., withdraw the second mass system. Explain the physical significance and impact results of the numbers , , and in the above sentence in terms of the motion of the initial oscillator. Solve this system for the motion of mass over a time interval of units and plot the displacement of that mass, , over that time interval. Explain what you see.    In use the values of and with , , , and for , and and set with varying values of . Keep and . What do you observe in the maximum amplitude of the initial mass as one changes ? Defend your observation with data or plot.    From what is the best value of ? Be sure you define the word best.    For the best value of determine the maximum amplitude displacement for mass , over a range of frequencies.     From the introductory material for this scenario offered above and the analysis in and offer a description of how to build a tuned mass damper to stop the resonance phenomena in the case of , where there is no damping; i.e., and .     Now let us consider a different approach. If we let show that the system can be written as a system of four first-order linear equations. In the case of no damping, this is Of course, you have already derived these systems in and .    If we consider the kinetic and potential energy of both masses and springs and ignore damping and the term , explain we can derive the Hamiltonian function and show that We can show that a solution to the system, , is constant on . In general, a Hamiltonian system is a system of equations of the form for , where is a real-valued differentiable function on such that is nonconstant on every open ball in . We can show that is constant on solution curves of the system.    Now suppose that we add a damping term to our system, where . Our new first-order system is Show that    Equation tells us that . Moreover, whenever the distance between the two masses is changing. Thus, energy decreases whenever the second mass is moving relative to the first. Thus, if the wind or an earthquake starts our building ( ) swaying back and forth, then the tuned mass-damper ( ) located on one of the top floors of the building will start to move relative to the building and energy will be removed from the system by the dampers.    Of course, and involve the building and are set by the architects and engineers. We, however, are free to choose , and . We want to choose fairly large so that there is a rapid loss of energy; i.e., the magnitude of is large. We should choose large enough so that this mass oscillates with respect to . If we choose two small, then the strong damper will almost serve as a rigid connection between and . Therefore, we wish to choose to be large so that we guaranteed that this mass will oscillate with respect to . We should, however, remember that is sitting on top of a very tall building. Finally, we should choose to maximize the rate at which the second mass oscillates with respect to the first and to maximize the oscillations of . If we choose so that the second spring is in resonance with the first, the oscillations of the first mass force the second at its resonance frequency. Thus, we will have relatively large oscillations of the second mass and a large loss of energy.  Let us consider example. Suppose that , , We will also choose to be 0.05 and . If the initial conditions for our system are we will choose to tune our system. To do this we will plot the time that it takes for the amplitude of the oscillations of to reach and stay below 2.5 for various values of . If we choose , then we can minimize the time to be .     "
},
{
  "id": "nonlinear05-project-lorenz-equation",
  "level": "2",
  "url": "nonlinear05.html#nonlinear05-project-lorenz-equation",
  "type": "Project",
  "number": "5.5.1",
  "title": "Project—The Lorenz Equations.",
  "body": " Project The Lorenz Equations   In 1963, an MIT professor, Edward N. Lorenz, published a paper on his research in meteorology. Using differential equations, Lorenz had developed a simplified system to model certain weather-related phenomena. When he analyzed the system, however, he found that the trajectories of the solutions were incredibly convoluted and effectively unpredictable for certain parameters. The Lorenz equations Lorenz equations can be written as where , , and are constants. The Existence and Uniqueness Theorem for systems of differential equations guarantees a unique solution for each set of initial conditions, However, Lorenz discovered that the trajectories of the solutions were incredibly convoluted and effectively unpredictable for certain parameters. For certain values of , , and , the trajectories are extremely sensitive to initial conditions. Since real data always has some inherent uncertainty, initial values are never precisely known, and we may have little success modeling real world phenomena. In addition, solutions can stay in a bounded region of the three dimensional version of the phase plane and wind through the region along an incredibly convoluted path. There is much more freedom to move around in three dimensions than there is in two.    Lorenz noticed that the system behaved strangely, when he let , , and . Thus, our system defines a vector field in , and the equilibrium solutions occur exactly when this vector field is zero. That is, is an equilibrium solution if Find all of the equilibrium solutions for this system.     If we wish to understand the nature of the equilibrium solutions of the Lorenz system, it makes sense to linearize the system. Compute the Jacobian matrix of the system and determine the nature of each of the equilibrium solutions that you found in .       Consider the Lorenz system In this exercise, we shall show that the solutions of the system are bounded.    If Show that    It is true that . Assuming this, show that where is the smallest of the three numbers 1, , and .    Use parts and to show that    Use part to show that everywhere outside of the ellipsoid    Use part to show that the ellipsoid is invariant, and that every solution curve ends up inside of .    "
},
{
  "id": "nonlinear05-project-tuned-mass-damper",
  "level": "2",
  "url": "nonlinear05.html#nonlinear05-project-tuned-mass-damper",
  "type": "Project",
  "number": "5.5.2",
  "title": "Project—Tuned-Mass Dampers.",
  "body": " Project Tuned-Mass Dampers   The 60-story, 790-foot mirror-glass John Hancock Tower, New England's tallest building, was completed in 1976 and was designed by Henry N. Cobb, who founded the firm Pei Cobb Freed & Partners with famed architect I.M. Pei. ( ). The John Hancock Tower is now officially known by its street address, 200 Clarendon Street. The building suffered many problems during construction, the most notorious of which was how the original glass windows were attached. In early 1972 when construction was still underway, one of the 500-pound windows popped out of the building and committed suicide on the sidewalk below. In all, more than 100 of the building's windows suffered the same fate. Fortunately, no one was injured. Initially, the architects and engineers thought that the problem was caused by the building's tendancy to sway excessively in high winds. However, they later determined that the falling-window problem was caused by the air space between the double-paned windows and pressure differentials between the interior and exterior of the building. The problem was solved by replacing all of the windows with single sheets of fully tempered glass. During the repairs, the windows were replaced with plywood, and the building was nicknamed the Plywood Palace.   The John Hancock Tower   a photo of the John Hancock Tower in Boston    Another flaw in the design of the building resulted in an extreme amount of swaying. In fact, office workers in the upper stories of the building complained of motion sickness. The building actually twisted as it was swaying back and forth. Engineers determined that the building's natural sway period was dangerously close to the period of its torsion. To remedy the problem, the engineers installed a pair of tuned mass dampers on the 58th floor of the building to absorb the energy created by the swaying. This is the floor of concrete that you see near the top of the structure ( ). In addition, 1,500 tons of steel braces were installed to keep the building from falling over in a high wind. This project is adapted from Keith Alan Landry; Brian Winkel (2016), 5-040-S-TunedMassDampers-Part I,  .    To construct a simple model of a tuned-mass damper, we will consider a mass, , connected to a fixed wall with a spring and a dashpot. To this first mass, we attach a second mass, , by using a spring and a dashpot (see ). Here the oscillator to be damped has mass with spring or restoring constant and resistance or damping constant . This could be a large structure, where would be its stiffness while would reflect internal frictional resistance to motion proportional to the velocity of the structure. The damping oscillator would be a large mass which sits atop the structure and is permitted to slide or roll as the structure sways in response to wind or seismic forces. This damper has mass with spring or restoring constant and resistance or damping constant .                      \\text{wall}  m_1  m_2  \\rho_1 \\cos( \\omega t)    x_1   x_2    k_1  k_2  b_1  b_2       Diagram of a tuned mass damper   Using Newton’s Second Law, which says that the mass times the acceleration of that mass is equal to the sum of all external forces acting on the mass show that the governing equations for the motions of the structure and the damper are given by  In our study here we will first presume an ideal structure with no resistance or damping coefficient; i.e., , and the same for the damper; i.e., . As we can see there is a driving force applied to the structure of . Our interest will be in seeing if we can tune the added mass damper to reduce or eliminate the possibility of resonance when the initial structure is driven by a force with a frequency equal to that of the natural frequency of the initial mass system.  If we let show that the system can be written as a system of four first-order linear equations.     Determine the system of four first-order linear equations from when there is no damping; i.e., and .    Now use and with , , , and for , while and set with ; i.e., withdraw the second mass system. Explain the physical significance and impact results of the numbers , , and in the above sentence in terms of the motion of the initial oscillator. Solve this system for the motion of mass over a time interval of units and plot the displacement of that mass, , over that time interval. Explain what you see.    In the system that you found in , use the values of and with with , , , and for and and set with varying values of . Keep and . What do you observe in the maximum amplitude of the initial mass as one changes ? Defend your observation with data or plot.    From what is the best value of ? Be sure you define the word best.    For the best value of determine the maximum amplitude displacement for mass , over a range of frequencies.      We consider another, comparable configuration as for practice. Notice that mass is only 1% of mass , which is quite realistic in structural design when using tuned mass dampers.    In the system that you found in , use and with , , , and for , while and set with ; i.e., withdraw the second mass system. Explain the physical significance and impact results of the numbers , , and in the above sentence in terms of the motion of the initial oscillator. Solve this system for the motion of mass over a time interval of units and plot the displacement of that mass, , over that time interval. Explain what you see.    In use the values of and with , , , and for , and and set with varying values of . Keep and . What do you observe in the maximum amplitude of the initial mass as one changes ? Defend your observation with data or plot.    From what is the best value of ? Be sure you define the word best.    For the best value of determine the maximum amplitude displacement for mass , over a range of frequencies.     From the introductory material for this scenario offered above and the analysis in and offer a description of how to build a tuned mass damper to stop the resonance phenomena in the case of , where there is no damping; i.e., and .     Now let us consider a different approach. If we let show that the system can be written as a system of four first-order linear equations. In the case of no damping, this is Of course, you have already derived these systems in and .    If we consider the kinetic and potential energy of both masses and springs and ignore damping and the term , explain we can derive the Hamiltonian function and show that We can show that a solution to the system, , is constant on . In general, a Hamiltonian system is a system of equations of the form for , where is a real-valued differentiable function on such that is nonconstant on every open ball in . We can show that is constant on solution curves of the system.    Now suppose that we add a damping term to our system, where . Our new first-order system is Show that    Equation tells us that . Moreover, whenever the distance between the two masses is changing. Thus, energy decreases whenever the second mass is moving relative to the first. Thus, if the wind or an earthquake starts our building ( ) swaying back and forth, then the tuned mass-damper ( ) located on one of the top floors of the building will start to move relative to the building and energy will be removed from the system by the dampers.    Of course, and involve the building and are set by the architects and engineers. We, however, are free to choose , and . We want to choose fairly large so that there is a rapid loss of energy; i.e., the magnitude of is large. We should choose large enough so that this mass oscillates with respect to . If we choose two small, then the strong damper will almost serve as a rigid connection between and . Therefore, we wish to choose to be large so that we guaranteed that this mass will oscillate with respect to . We should, however, remember that is sitting on top of a very tall building. Finally, we should choose to maximize the rate at which the second mass oscillates with respect to the first and to maximize the oscillations of . If we choose so that the second spring is in resonance with the first, the oscillations of the first mass force the second at its resonance frequency. Thus, we will have relatively large oscillations of the second mass and a large loss of energy.  Let us consider example. Suppose that , , We will also choose to be 0.05 and . If the initial conditions for our system are we will choose to tune our system. To do this we will plot the time that it takes for the amplitude of the oscillations of to reach and stay below 2.5 for various values of . If we choose , then we can minimize the time to be .    "
},
{
  "id": "laplace01",
  "level": "1",
  "url": "laplace01.html",
  "type": "Section",
  "number": "6.1",
  "title": "The Laplace Transform",
  "body": " The Laplace Transform    To understand and be able to compute the Laplace transform of a function , which can be accomplished by computing provided the integral converges.  To understand that if we know the Laplace transform of a function, we can recover the original function using the inverse Laplace transform, .  To understand that both the Laplace transform and inverse Laplace transform are linear operators.     Consider the electrical circuit governed by the differential equation The voltage function, , might have discontinuities. For example, the voltage in the circuit can be periodically turned on and off. The previous methods that we have used to solve second order linear differential equations may not apply here. However, the Laplace transform Laplace transform , an integral transform, gives a method of solving such equations.  As a second example, let us consider a population of fish that is governed by exponential growth, and suppose that we wish to determine the effects of seasonal fishing. In other words, harvesting will not be continuous. For example, we might only allow fishing at a constant rate during the first half of the year, Our initial value problem now becomes It should be clear that we need some additional tools to analyze differential equations possessing discontinuous terms.  Given an initial value problem the idea is to use the Laplace transform to change the differential equation into an equation that can be solved algebraically and then transform the algebraic solution back into a solution of the differential equation. Surprisingly, this method will even work when is a discontinuous function, provided the discontinuities are not too bad.    Definition of the Laplace Transform  We shall define the Laplace transform Laplace transform definition of a function by provided this integral converges. The Laplace transform of a function has many nice properties, especially with respect to the derivative of . However, before we investigate these properties, let us compute several Laplace transforms.    Laplace transform     Let , where is a constant. Then for .  For , the Laplace transform is for .  If with , then Noting that as for , we find that for .     The Laplace transform of a function does not always exist, even for functions that are infinitely differentiable. For example, let . Then for any real number , we know that , for with ; hence, Thus, the integral does not converge.   The Laplace transform, however, does exist in many cases. In , we will show that the Laplace transform of a function exists provided the function does not grow too quickly and does not possess bad discontinuities.    Properties of the Laplace Transform  One of the most important properties of the Laplace transform is linearity. That is, where provided the Laplace transforms of and exist. The proof of this statement follows directly from the definition of the Laplace transform and the properties of integration, We state the linearity of the Laplace transform as a theorem.   Let and be two functions whose Laplace transforms and exist for and , respectively. Then for any real constants and and    Transforms of functions having the linearity property are called linear operators linear operator .   Recall that . Provided , linearity makes it very easy to compute the Laplace transform of . By , Thus, for ,   The Laplace transform of discontinuous functions also exist, provided the discontinuities are not too bad. We say that a function is piecewise continuous on an interval if satisfies the following conditions.  There are a finite number of discontinuities of on .  If is a discontinuity, then the one-sided limits both exist. We also assume that and exist.  We say that a function is piecewise continuous function piecewise continuous on an interval , if it is piecewise continuous on the interval for all . The types of discontinuities that we are describing are sometimes called jump discontinuities discontinuity jump discontinuity . If a function is piecewise continuous, then the continuities are not too bad.   One of the simplest piecewise continuous functions is The function has a jump discontinuity at . It follows very quickly that for .  If we define the unit step function at to be then we have a jump discontinuity at ( ). If , then where and . A function of the form is called a step function step function function step function or Heaviside function Heaviside function function Heaviside function , named for the British engineer Oliver Heaviside.    Heaviside function       f(x) = 1  g(x) = 0             Unit step function for     Given a function , consider the new function To obtain the function from , we shift the graph of the to the right by units and let for (see ). Let us compute the Laplace transform of , If we make the substitution , then In other words, if , then .      f(x) = 0.5*x^2 * sin(x)+0.5  g(x) = 0  h(x) = f(x - 1)          f(t)  u_a(t)f(t-a)        , where     Finding Laplace Transforms   Find the Laplace transform for each of the functions below. Recall that and                               Existence and Uniqueness of the Laplace Transform  If we are to use Laplace transforms to study differential equations, we would like to know which functions actually have Laplace transforms. Furthermore, if two functions have the same Laplace transform, we can ask if the functions must be the same. In other words, we wish to know if the Laplace transform of a function exists and is unique. We can answer both of these questions affirmatively if the function is piecewise continuous on and does not grow too quickly as . We say a function is exponentially bounded function exponentially bounded on if there exist constants and such that for all in . In other words, the graph of must lie between the curves and . The following two theorems tell us that Laplace transforms exist and are unique for piecewise continuous, exponentially bounded functions on the interval . We leave the proofs of these theorem as exercises.    If is a piecewise continuous, exponentially bounded function defined , then the Laplace transform of , exists.      Let and be two piecewise continuous exponentially bounded functions with Laplace transforms, and , respectively. Suppose that for all , where is some positive number. Then for all .    In light of , it now makes sense to define the inverse Laplace transform Laplace transform inverse Laplace transform of a function , which we will denote by , as the function whose unique Laplace transform is . Furthermore, the inverse Laplace transform is linear,    inverse Laplace transform     Finding Laplace Transforms and Inverse Transforms  To use the method of Laplace transforms effectively, we need either tables or computer software such as Sage so that we can easily find Laplace transforms and inverse Laplace transforms.        1 ,    ,    , ,    , ,    ,    ,    ,    ,    ,    ,    , ,     ,           ,              Table of Laplace Transforms   We can also use Sage to find Laplace transforms and inverse transforms (see ).   Finding Inverse Transforms   Find the inverse Laplace transform for each of the following functions.                               Important Lessons   Many initial value problems have discontinuous forcing terms.  The Laplace transform of a function by provided the integral converges.  If is a piecewise continuous, exponentially bounded function defined , then the Laplace transform of , exists.  The Laplace transform is a linear operator; i.e., where provided the Laplace transforms of and exist.  If we know the Laplace transform of a function, we can recover the original function using the inverse Laplace transform of a function .  The inverse Laplace transform is linear,  If , then .  If , we define the Heaviside function to be The Laplace transform of is       Does the Laplace transform of a function always exist? If so, why? If not, given an example?       What is the Heaviside function? Explain.       Exercises   Finding Laplace transforms  Find the Laplace transform for each of the functions in . Recall that and .                                            Finding inverse Laplace transforms  Find the inverse Laplace transform for each of the functions in . You will find partial fraction decomposition very useful.                                             Prove : If is a piecewise continuous, exponentially bounded function defined , then the Laplace transform of , exists.      Let be a function whose Laplace transform exists for . Prove that for .      Prove : Suppose that and are piecewise continuous, exponentially bounded functions defined , with Laplace transforms of and , respectively. If , then .      If is a piecewise continuous, exponentially bounded function defined , prove that the Laplace transform of , exists.      Define the gamma function gamma function function gamma function to be for . The gamma function is very useful for expressing the Laplace transform of the function .  Show that .  Prove that and deduce that for .  Show that the Laplace transform of is If is a positive integer, then .       gamma function     Laplace Transforms with Sage  Computer algebra systems have now replaced tables of Laplace transforms just as the calculator has replaced the slide rule. It is easy to calculate Laplace transforms with Sage. For example, suppose that we wish to compute the Laplace transform of . We can use the Sage command laplace .   To recover the original function, we can use the Sage command inverse_laplace . Suppose that   We can even use Sage to find the Laplace transform of piecewise-defined functions. Suppose that The Sage command to define a piecewise-defined function is piecewise .   Sage can be used to find the Laplace transform of a piecewise-defined function.       Use Sage to find the Laplace transform of       Use Sage to find the Laplace transforms for each of the functions in .       Use Sage to find the inverse Laplace transform for each of the functions in .      "
},
{
  "id": "laplace01-2",
  "level": "2",
  "url": "laplace01.html#laplace01-2",
  "type": "Objectives",
  "number": "6.1",
  "title": "",
  "body": "  To understand and be able to compute the Laplace transform of a function , which can be accomplished by computing provided the integral converges.  To understand that if we know the Laplace transform of a function, we can recover the original function using the inverse Laplace transform, .  To understand that both the Laplace transform and inverse Laplace transform are linear operators.   "
},
{
  "id": "laplace01-3-1",
  "level": "2",
  "url": "laplace01.html#laplace01-3-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Laplace transform "
},
{
  "id": "laplace01-subsection-definitions-2",
  "level": "2",
  "url": "laplace01.html#laplace01-subsection-definitions-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Laplace transform "
},
{
  "id": "laplace01-example-basic-examples",
  "level": "2",
  "url": "laplace01.html#laplace01-example-basic-examples",
  "type": "Example",
  "number": "6.1.1",
  "title": "",
  "body": "  Let , where is a constant. Then for .  For , the Laplace transform is for .  If with , then Noting that as for , we find that for .   "
},
{
  "id": "laplace01-subsection-definitions-5",
  "level": "2",
  "url": "laplace01.html#laplace01-subsection-definitions-5",
  "type": "Example",
  "number": "6.1.2",
  "title": "",
  "body": " The Laplace transform of a function does not always exist, even for functions that are infinitely differentiable. For example, let . Then for any real number , we know that , for with ; hence, Thus, the integral does not converge.  "
},
{
  "id": "laplace01-subsection-properties-2",
  "level": "2",
  "url": "laplace01.html#laplace01-subsection-properties-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear operators "
},
{
  "id": "laplace01-subsection-properties-3",
  "level": "2",
  "url": "laplace01.html#laplace01-subsection-properties-3",
  "type": "Example",
  "number": "6.1.4",
  "title": "",
  "body": " Recall that . Provided , linearity makes it very easy to compute the Laplace transform of . By , Thus, for ,  "
},
{
  "id": "laplace01-subsection-properties-4",
  "level": "2",
  "url": "laplace01.html#laplace01-subsection-properties-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "piecewise continuous piecewise continuous jump discontinuities "
},
{
  "id": "laplace01-subsection-properties-5",
  "level": "2",
  "url": "laplace01.html#laplace01-subsection-properties-5",
  "type": "Example",
  "number": "6.1.5",
  "title": "",
  "body": " One of the simplest piecewise continuous functions is The function has a jump discontinuity at . It follows very quickly that for .  If we define the unit step function at to be then we have a jump discontinuity at ( ). If , then where and . A function of the form is called a step function step function function step function or Heaviside function Heaviside function function Heaviside function , named for the British engineer Oliver Heaviside.    Heaviside function       f(x) = 1  g(x) = 0             Unit step function for   "
},
{
  "id": "laplace01-example-shift",
  "level": "2",
  "url": "laplace01.html#laplace01-example-shift",
  "type": "Example",
  "number": "6.1.7",
  "title": "",
  "body": " Given a function , consider the new function To obtain the function from , we shift the graph of the to the right by units and let for (see ). Let us compute the Laplace transform of , If we make the substitution , then In other words, if , then .      f(x) = 0.5*x^2 * sin(x)+0.5  g(x) = 0  h(x) = f(x - 1)          f(t)  u_a(t)f(t-a)        , where   "
},
{
  "id": "laplace01-subsection-properties-7",
  "level": "2",
  "url": "laplace01.html#laplace01-subsection-properties-7",
  "type": "Activity",
  "number": "6.1.1",
  "title": "Finding Laplace Transforms.",
  "body": " Finding Laplace Transforms   Find the Laplace transform for each of the functions below. Recall that and                            "
},
{
  "id": "laplace01-subsection-existence-and-uniqueness-2",
  "level": "2",
  "url": "laplace01.html#laplace01-subsection-existence-and-uniqueness-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "exponentially bounded "
},
{
  "id": "laplace01-theorem-existence",
  "level": "2",
  "url": "laplace01.html#laplace01-theorem-existence",
  "type": "Theorem",
  "number": "6.1.9",
  "title": "",
  "body": "  If is a piecewise continuous, exponentially bounded function defined , then the Laplace transform of , exists.   "
},
{
  "id": "laplace01-theorem-uniqueness",
  "level": "2",
  "url": "laplace01.html#laplace01-theorem-uniqueness",
  "type": "Theorem",
  "number": "6.1.10",
  "title": "",
  "body": "  Let and be two piecewise continuous exponentially bounded functions with Laplace transforms, and , respectively. Suppose that for all , where is some positive number. Then for all .   "
},
{
  "id": "laplace01-subsection-existence-and-uniqueness-5",
  "level": "2",
  "url": "laplace01.html#laplace01-subsection-existence-and-uniqueness-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "inverse Laplace transform "
},
{
  "id": "laplace01-table-transforms",
  "level": "2",
  "url": "laplace01.html#laplace01-table-transforms",
  "type": "Table",
  "number": "6.1.11",
  "title": "Table of Laplace Transforms",
  "body": "      1 ,    ,    , ,    , ,    ,    ,    ,    ,    ,    ,    , ,     ,           ,              Table of Laplace Transforms  "
},
{
  "id": "laplace01-subsection-finding-laplace-transforms-5",
  "level": "2",
  "url": "laplace01.html#laplace01-subsection-finding-laplace-transforms-5",
  "type": "Activity",
  "number": "6.1.2",
  "title": "Finding Inverse Transforms.",
  "body": " Finding Inverse Transforms   Find the inverse Laplace transform for each of the following functions.                            "
},
{
  "id": "laplace01-subsection-important-lessons-2",
  "level": "2",
  "url": "laplace01.html#laplace01-subsection-important-lessons-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Laplace transform Heaviside function "
},
{
  "id": "rq-laplace01-exist",
  "level": "2",
  "url": "laplace01.html#rq-laplace01-exist",
  "type": "Reading Question",
  "number": "6.1.6.1",
  "title": "",
  "body": "  Does the Laplace transform of a function always exist? If so, why? If not, given an example?    "
},
{
  "id": "rq-laplace01-heaviside",
  "level": "2",
  "url": "laplace01.html#rq-laplace01-heaviside",
  "type": "Reading Question",
  "number": "6.1.6.2",
  "title": "",
  "body": "  What is the Heaviside function? Explain.    "
},
{
  "id": "laplace01-exercises-finding-transforms-3",
  "level": "2",
  "url": "laplace01.html#laplace01-exercises-finding-transforms-3",
  "type": "Exercise",
  "number": "6.1.7.1",
  "title": "",
  "body": "    "
},
{
  "id": "laplace01-exercises-finding-transforms-4",
  "level": "2",
  "url": "laplace01.html#laplace01-exercises-finding-transforms-4",
  "type": "Exercise",
  "number": "6.1.7.2",
  "title": "",
  "body": "    "
},
{
  "id": "laplace01-exercises-finding-transforms-5",
  "level": "2",
  "url": "laplace01.html#laplace01-exercises-finding-transforms-5",
  "type": "Exercise",
  "number": "6.1.7.3",
  "title": "",
  "body": "    "
},
{
  "id": "laplace01-exercises-finding-transforms-6",
  "level": "2",
  "url": "laplace01.html#laplace01-exercises-finding-transforms-6",
  "type": "Exercise",
  "number": "6.1.7.4",
  "title": "",
  "body": "    "
},
{
  "id": "laplace01-exercises-finding-transforms-7",
  "level": "2",
  "url": "laplace01.html#laplace01-exercises-finding-transforms-7",
  "type": "Exercise",
  "number": "6.1.7.5",
  "title": "",
  "body": "    "
},
{
  "id": "laplace01-exercises-finding-transforms-8",
  "level": "2",
  "url": "laplace01.html#laplace01-exercises-finding-transforms-8",
  "type": "Exercise",
  "number": "6.1.7.6",
  "title": "",
  "body": "    "
},
{
  "id": "laplace01-exercises-finding-transforms-9",
  "level": "2",
  "url": "laplace01.html#laplace01-exercises-finding-transforms-9",
  "type": "Exercise",
  "number": "6.1.7.7",
  "title": "",
  "body": "    "
},
{
  "id": "laplace01-exercises-finding-transforms-10",
  "level": "2",
  "url": "laplace01.html#laplace01-exercises-finding-transforms-10",
  "type": "Exercise",
  "number": "6.1.7.8",
  "title": "",
  "body": "    "
},
{
  "id": "laplace01-exercises-finding-inverse-transforms-3",
  "level": "2",
  "url": "laplace01.html#laplace01-exercises-finding-inverse-transforms-3",
  "type": "Exercise",
  "number": "6.1.7.9",
  "title": "",
  "body": "    "
},
{
  "id": "laplace01-exercises-finding-inverse-transforms-4",
  "level": "2",
  "url": "laplace01.html#laplace01-exercises-finding-inverse-transforms-4",
  "type": "Exercise",
  "number": "6.1.7.10",
  "title": "",
  "body": "    "
},
{
  "id": "laplace01-exercises-finding-inverse-transforms-5",
  "level": "2",
  "url": "laplace01.html#laplace01-exercises-finding-inverse-transforms-5",
  "type": "Exercise",
  "number": "6.1.7.11",
  "title": "",
  "body": "    "
},
{
  "id": "laplace01-exercises-finding-inverse-transforms-6",
  "level": "2",
  "url": "laplace01.html#laplace01-exercises-finding-inverse-transforms-6",
  "type": "Exercise",
  "number": "6.1.7.12",
  "title": "",
  "body": "    "
},
{
  "id": "laplace01-exercises-finding-inverse-transforms-7",
  "level": "2",
  "url": "laplace01.html#laplace01-exercises-finding-inverse-transforms-7",
  "type": "Exercise",
  "number": "6.1.7.13",
  "title": "",
  "body": "    "
},
{
  "id": "laplace01-exercises-finding-inverse-transforms-8",
  "level": "2",
  "url": "laplace01.html#laplace01-exercises-finding-inverse-transforms-8",
  "type": "Exercise",
  "number": "6.1.7.14",
  "title": "",
  "body": "    "
},
{
  "id": "laplace01-exercises-finding-inverse-transforms-9",
  "level": "2",
  "url": "laplace01.html#laplace01-exercises-finding-inverse-transforms-9",
  "type": "Exercise",
  "number": "6.1.7.15",
  "title": "",
  "body": "    "
},
{
  "id": "laplace01-exercises-finding-inverse-transforms-10",
  "level": "2",
  "url": "laplace01.html#laplace01-exercises-finding-inverse-transforms-10",
  "type": "Exercise",
  "number": "6.1.7.16",
  "title": "",
  "body": "    "
},
{
  "id": "exercises-laplace01-4",
  "level": "2",
  "url": "laplace01.html#exercises-laplace01-4",
  "type": "Exercise",
  "number": "6.1.7.17",
  "title": "",
  "body": "  Prove : If is a piecewise continuous, exponentially bounded function defined , then the Laplace transform of , exists.   "
},
{
  "id": "exercises-laplace01-5",
  "level": "2",
  "url": "laplace01.html#exercises-laplace01-5",
  "type": "Exercise",
  "number": "6.1.7.18",
  "title": "",
  "body": "  Let be a function whose Laplace transform exists for . Prove that for .   "
},
{
  "id": "exercises-laplace01-6",
  "level": "2",
  "url": "laplace01.html#exercises-laplace01-6",
  "type": "Exercise",
  "number": "6.1.7.19",
  "title": "",
  "body": "  Prove : Suppose that and are piecewise continuous, exponentially bounded functions defined , with Laplace transforms of and , respectively. If , then .   "
},
{
  "id": "exercises-laplace01-7",
  "level": "2",
  "url": "laplace01.html#exercises-laplace01-7",
  "type": "Exercise",
  "number": "6.1.7.20",
  "title": "",
  "body": "  If is a piecewise continuous, exponentially bounded function defined , prove that the Laplace transform of , exists.   "
},
{
  "id": "exercises-laplace01-8",
  "level": "2",
  "url": "laplace01.html#exercises-laplace01-8",
  "type": "Exercise",
  "number": "6.1.7.21",
  "title": "",
  "body": "  Define the gamma function gamma function function gamma function to be for . The gamma function is very useful for expressing the Laplace transform of the function .  Show that .  Prove that and deduce that for .  Show that the Laplace transform of is If is a positive integer, then .    "
},
{
  "id": "laplace01-12-1",
  "level": "2",
  "url": "laplace01.html#laplace01-12-1",
  "type": "Exercise",
  "number": "6.1.9.1",
  "title": "",
  "body": "  Use Sage to find the Laplace transform of    "
},
{
  "id": "laplace01-12-2",
  "level": "2",
  "url": "laplace01.html#laplace01-12-2",
  "type": "Exercise",
  "number": "6.1.9.2",
  "title": "",
  "body": "  Use Sage to find the Laplace transforms for each of the functions in .    "
},
{
  "id": "laplace01-12-3",
  "level": "2",
  "url": "laplace01.html#laplace01-12-3",
  "type": "Exercise",
  "number": "6.1.9.3",
  "title": "",
  "body": "  Use Sage to find the inverse Laplace transform for each of the functions in .    "
},
{
  "id": "laplace02",
  "level": "1",
  "url": "laplace02.html",
  "type": "Section",
  "number": "6.2",
  "title": "Solving Initial Value Problems",
  "body": "   To understand how the Laplace transform acts on derivatives.  To understand how the Laplace transform can be used to solve initial value problems such as even when is discontinuous.    Solving Initial Value Problems   There is no need for Laplace transforms when solving many initial value problems. If we consider the initial value problem the methods described in work quite well. The characteristic polynomial of is and the general solution of the differential equation must be Applying the initial conditions, we find that the solution to our initial value problem is However, suppose that we have a harmonic oscillator with a discontinuous forcing term, where is given by The previous techniques that we described might prove cumbersome to solve such an initial value problem. We can easily imagine such equations arising in physics or engineering.  Fortunately, Laplace transforms forms behave very nicely with respect to derivatives. We can use Laplace transforms to transform an initial value problem into an algebraic equation. Once the algebraic equation is solved, we can use the inverse transform to obtain the solution to our original initial value problem.    Laplace Transforms of the Derivative  Suppose that we have linear differential equation with constant coefficients and initial conditions and . We can take the Laplace transform of both sides to obtain Notice that we have used the fact that the Laplace transform is a linear operator ( ). To proceed further, we need to know the Laplace transform of the derivative of a function.    Let be a piecewise continuous, exponentially bounded function and assume that is also exponentially bounded. Then for large values of  where is the Laplace transform of .     We can evaluate the Laplace transform of by using integration by parts, We claim that . Since, is exponentially bounded, there exist constants and such that , for all in . Thus, The right-hand side of this inequality as for . Thus,   The Laplace transform also behave nicely with respect to higher order derivatives.    Let and be piecewise continuous, exponentially bounded functions and assume that is exponentially bounded. Then for large values of  where is the Laplace transform of . In general, if and all of its derivatives up to order are piecewise continuous, exponentially bounded functions and is piecewise continuous, then    We can use and to solve initial value problems.   Consider the initial value problem By and  where is the Laplace transform of . If we take the Laplace transform of , we have Since , we have the algebraic equation Solving for , we get where we have used partial fractions to get the last expression.  Since the Laplace transform of is , we know that We can now solve our initial value problem, and our solution agrees with the one that we found at the beginning of this section.    Solving Linear Differential Equations with Laplace Transforms   Use Laplace Transforms to solve each of the following initial value problems.     ,      , ,      , ,       Discontinuous Functions  If and we define the function recall that the Laplace transform of is given by We can use this information to solve initial value problems with discontinuous functions.   Consider the initial value problem If we take the Laplace transform of both sides of , we obtain Using the fact that and solving for , we get Therefore, The inverse Laplace transform of the first term is To compute the inverse Laplace transform of the second term, recall from that if , then Using partial fractions to obtain Hence, If , then the Laplace transform of is Thus,     Forced Harmonic Oscillators   Consider the forced harmonic oscillator Taking the Laplace transform of both sides of the equation , we obtain or where . Substituting the initial conditions and solving for , we have where the last expression was obtained using partial fractions. Taking the inverse Laplace transform, we have our solution    Now let us consider a harmonic oscillator with discontinuous forcing, where is given by That is, . We may consider this to be a mass-spring system sliding on a table, where the mass is one unit, the spring constant is 5, and the damping coefficient is 2. When the table is tilted so that gravity provides a force of 5 units when stretching the spring. At time , the table is suddenly returned to the level position.  Taking the Laplace transform of both sides of , we obtain where . Substituting the initial conditions and evaluating the Laplace transform on the right, we have Solving for , we have and Using partial fractions, we can rewrite the first term as  The inverse Laplace transform of is 1. To find the inverse Laplace transform of the second term, we complete the square of the denominator, Consequently, and  We can compute the inverse Laplace transform of using the Heaviside function and the inverse Laplace transform that we just calculated to obtain Therefore, the solution to our original initial value problem is    Solving Differential Equations with Laplace Transforms with Discontinuous Forcing Functions   Use Laplace Transforms to solve each of the following initial value problems.     ,      , , where       Important Lessons   Using the Laplace transform including how the transform behaves, we can solve initial value problems such as even when is discontinuous.  Let be a piecewise continuous, exponentially bounded function and assume that is also exponentially bounded. Then for large values of  where is the Laplace transform of .  Let and be piecewise continuous, exponentially bounded functions and assume that is exponentially bounded. Then for large values of  where is the Laplace transform of . In general, if and all of its derivatives up to order are piecewise continuous, exponentially bounded functions and is piecewise continuous, then       Describe in your own words how the Laplace transform can be used to solve an initial value problem.       Explain what an exponentially bounded function is. Give an example.       Exercises A  Solving Initial Value Problems  Solve the initial problems in using the Laplace transform.    , ,      , ,      , ,      , ,      , ,      , ,      , ,      , , ,       Find the solution of the initial value problem where is defined by      Let and be piecewise continuous, exponentially bounded functions and assume that is exponentially bounded.  Prove that for large values of , where is the Laplace transform of .  If and all of its derivatives up to order are piecewise continuous, exponentially bounded functions and is piecewise continuous, prove that       Prove .      Let be a peicewise continuous function for . In addition, suppose that satisfies the condition with .  Prove that  Show that follows from (a).      Solving Linear Systems Using Laplace Transforms   Consider the linear system If we let and and take the Laplace transform of the two differential equations, we obtain   Verify that if we solve the system for and , we obtain  Find and .  Solve the linear system using Laplace transforms.  Solve the linear system using Laplace transforms.      "
},
{
  "id": "laplace02-1",
  "level": "2",
  "url": "laplace02.html#laplace02-1",
  "type": "Objectives",
  "number": "6.2",
  "title": "",
  "body": "  To understand how the Laplace transform acts on derivatives.  To understand how the Laplace transform can be used to solve initial value problems such as even when is discontinuous.   "
},
{
  "id": "laplace02-theorem-derivative",
  "level": "2",
  "url": "laplace02.html#laplace02-theorem-derivative",
  "type": "Theorem",
  "number": "6.2.1",
  "title": "",
  "body": "  Let be a piecewise continuous, exponentially bounded function and assume that is also exponentially bounded. Then for large values of  where is the Laplace transform of .   "
},
{
  "id": "laplace02-subsection-derivatives-4",
  "level": "2",
  "url": "laplace02.html#laplace02-subsection-derivatives-4",
  "type": "Proof",
  "number": "6.2.1.1",
  "title": "",
  "body": " We can evaluate the Laplace transform of by using integration by parts, We claim that . Since, is exponentially bounded, there exist constants and such that , for all in . Thus, The right-hand side of this inequality as for . Thus,  "
},
{
  "id": "laplace02-theorem-derivative-higher",
  "level": "2",
  "url": "laplace02.html#laplace02-theorem-derivative-higher",
  "type": "Theorem",
  "number": "6.2.2",
  "title": "",
  "body": "  Let and be piecewise continuous, exponentially bounded functions and assume that is exponentially bounded. Then for large values of  where is the Laplace transform of . In general, if and all of its derivatives up to order are piecewise continuous, exponentially bounded functions and is piecewise continuous, then   "
},
{
  "id": "laplace02-subsection-derivatives-8",
  "level": "2",
  "url": "laplace02.html#laplace02-subsection-derivatives-8",
  "type": "Example",
  "number": "6.2.3",
  "title": "",
  "body": " Consider the initial value problem By and  where is the Laplace transform of . If we take the Laplace transform of , we have Since , we have the algebraic equation Solving for , we get where we have used partial fractions to get the last expression.  Since the Laplace transform of is , we know that We can now solve our initial value problem, and our solution agrees with the one that we found at the beginning of this section.  "
},
{
  "id": "laplace02-subsection-derivatives-9",
  "level": "2",
  "url": "laplace02.html#laplace02-subsection-derivatives-9",
  "type": "Activity",
  "number": "6.2.1",
  "title": "Solving Linear Differential Equations with Laplace Transforms.",
  "body": " Solving Linear Differential Equations with Laplace Transforms   Use Laplace Transforms to solve each of the following initial value problems.     ,      , ,      , ,    "
},
{
  "id": "laplace02-subsection-discontinuous-functions-3",
  "level": "2",
  "url": "laplace02.html#laplace02-subsection-discontinuous-functions-3",
  "type": "Example",
  "number": "6.2.4",
  "title": "",
  "body": " Consider the initial value problem If we take the Laplace transform of both sides of , we obtain Using the fact that and solving for , we get Therefore, The inverse Laplace transform of the first term is To compute the inverse Laplace transform of the second term, recall from that if , then Using partial fractions to obtain Hence, If , then the Laplace transform of is Thus,  "
},
{
  "id": "laplace02-subsection-harmonic-oscillators-2",
  "level": "2",
  "url": "laplace02.html#laplace02-subsection-harmonic-oscillators-2",
  "type": "Example",
  "number": "6.2.5",
  "title": "",
  "body": " Consider the forced harmonic oscillator Taking the Laplace transform of both sides of the equation , we obtain or where . Substituting the initial conditions and solving for , we have where the last expression was obtained using partial fractions. Taking the inverse Laplace transform, we have our solution  "
},
{
  "id": "laplace02-subsection-harmonic-oscillators-3",
  "level": "2",
  "url": "laplace02.html#laplace02-subsection-harmonic-oscillators-3",
  "type": "Example",
  "number": "6.2.6",
  "title": "",
  "body": " Now let us consider a harmonic oscillator with discontinuous forcing, where is given by That is, . We may consider this to be a mass-spring system sliding on a table, where the mass is one unit, the spring constant is 5, and the damping coefficient is 2. When the table is tilted so that gravity provides a force of 5 units when stretching the spring. At time , the table is suddenly returned to the level position.  Taking the Laplace transform of both sides of , we obtain where . Substituting the initial conditions and evaluating the Laplace transform on the right, we have Solving for , we have and Using partial fractions, we can rewrite the first term as  The inverse Laplace transform of is 1. To find the inverse Laplace transform of the second term, we complete the square of the denominator, Consequently, and  We can compute the inverse Laplace transform of using the Heaviside function and the inverse Laplace transform that we just calculated to obtain Therefore, the solution to our original initial value problem is  "
},
{
  "id": "laplace02-subsection-harmonic-oscillators-4",
  "level": "2",
  "url": "laplace02.html#laplace02-subsection-harmonic-oscillators-4",
  "type": "Activity",
  "number": "6.2.2",
  "title": "Solving Differential Equations with Laplace Transforms with Discontinuous Forcing Functions.",
  "body": " Solving Differential Equations with Laplace Transforms with Discontinuous Forcing Functions   Use Laplace Transforms to solve each of the following initial value problems.     ,      , , where    "
},
{
  "id": "rq-laplace02-ivp",
  "level": "2",
  "url": "laplace02.html#rq-laplace02-ivp",
  "type": "Reading Question",
  "number": "6.2.5.1",
  "title": "",
  "body": "  Describe in your own words how the Laplace transform can be used to solve an initial value problem.    "
},
{
  "id": "rq-laplace02-bounded",
  "level": "2",
  "url": "laplace02.html#rq-laplace02-bounded",
  "type": "Reading Question",
  "number": "6.2.5.2",
  "title": "",
  "body": "  Explain what an exponentially bounded function is. Give an example.    "
},
{
  "id": "laplace02-exercises-solve-ivps-3",
  "level": "2",
  "url": "laplace02.html#laplace02-exercises-solve-ivps-3",
  "type": "Exercise",
  "number": "6.2.6.1",
  "title": "",
  "body": "  , ,   "
},
{
  "id": "laplace02-exercises-solve-ivps-4",
  "level": "2",
  "url": "laplace02.html#laplace02-exercises-solve-ivps-4",
  "type": "Exercise",
  "number": "6.2.6.2",
  "title": "",
  "body": "  , ,   "
},
{
  "id": "laplace02-exercises-solve-ivps-5",
  "level": "2",
  "url": "laplace02.html#laplace02-exercises-solve-ivps-5",
  "type": "Exercise",
  "number": "6.2.6.3",
  "title": "",
  "body": "  , ,   "
},
{
  "id": "laplace02-exercises-solve-ivps-6",
  "level": "2",
  "url": "laplace02.html#laplace02-exercises-solve-ivps-6",
  "type": "Exercise",
  "number": "6.2.6.4",
  "title": "",
  "body": "  , ,   "
},
{
  "id": "laplace02-exercises-solve-ivps-7",
  "level": "2",
  "url": "laplace02.html#laplace02-exercises-solve-ivps-7",
  "type": "Exercise",
  "number": "6.2.6.5",
  "title": "",
  "body": "  , ,   "
},
{
  "id": "laplace02-exercises-solve-ivps-8",
  "level": "2",
  "url": "laplace02.html#laplace02-exercises-solve-ivps-8",
  "type": "Exercise",
  "number": "6.2.6.6",
  "title": "",
  "body": "  , ,   "
},
{
  "id": "laplace02-exercises-solve-ivps-9",
  "level": "2",
  "url": "laplace02.html#laplace02-exercises-solve-ivps-9",
  "type": "Exercise",
  "number": "6.2.6.7",
  "title": "",
  "body": "  , ,   "
},
{
  "id": "laplace02-exercises-solve-ivps-10",
  "level": "2",
  "url": "laplace02.html#laplace02-exercises-solve-ivps-10",
  "type": "Exercise",
  "number": "6.2.6.8",
  "title": "",
  "body": "  , , ,   "
},
{
  "id": "laplace02-exercises-3",
  "level": "2",
  "url": "laplace02.html#laplace02-exercises-3",
  "type": "Exercise",
  "number": "6.2.6.9",
  "title": "",
  "body": "  Find the solution of the initial value problem where is defined by   "
},
{
  "id": "laplace02-exercises-4",
  "level": "2",
  "url": "laplace02.html#laplace02-exercises-4",
  "type": "Exercise",
  "number": "6.2.6.10",
  "title": "",
  "body": "  Let and be piecewise continuous, exponentially bounded functions and assume that is exponentially bounded.  Prove that for large values of , where is the Laplace transform of .  If and all of its derivatives up to order are piecewise continuous, exponentially bounded functions and is piecewise continuous, prove that    "
},
{
  "id": "laplace02-exercises-5",
  "level": "2",
  "url": "laplace02.html#laplace02-exercises-5",
  "type": "Exercise",
  "number": "6.2.6.11",
  "title": "",
  "body": "  Prove .   "
},
{
  "id": "laplace02-exercises-6",
  "level": "2",
  "url": "laplace02.html#laplace02-exercises-6",
  "type": "Exercise",
  "number": "6.2.6.12",
  "title": "",
  "body": "  Let be a peicewise continuous function for . In addition, suppose that satisfies the condition with .  Prove that  Show that follows from (a).    "
},
{
  "id": "laplace02-exercises-7",
  "level": "2",
  "url": "laplace02.html#laplace02-exercises-7",
  "type": "Exercise",
  "number": "6.2.6.13",
  "title": "Solving Linear Systems Using Laplace Transforms.",
  "body": " Solving Linear Systems Using Laplace Transforms   Consider the linear system If we let and and take the Laplace transform of the two differential equations, we obtain   Verify that if we solve the system for and , we obtain  Find and .  Solve the linear system using Laplace transforms.  Solve the linear system using Laplace transforms.    "
},
{
  "id": "laplace03",
  "level": "1",
  "url": "laplace03.html",
  "type": "Section",
  "number": "6.3",
  "title": "Delta Functions and Forcing",
  "body": " Delta Functions and Forcing    To understand Impulse forcing , a term used to describe a very quick push or pull on a system, such as the blow of a hammer or the force of an explosion, and that an impulse function can be described by Dirac delta function , , which has the properties  To understand that we can use the Dirac delta function to solve initial value problems such as or where is a function that is very large in a very short time interval.     Impulse Forcing  Impulse forcing impulse forcing is the term used to describe a very quick push or pull on a system, such as the blow of a hammer or the force of an explosion. For example, consider the equation for a damped harmonic oscillator where is a function that is very large in a very short time interval, say and zero otherwise. The integral or since is zero outside of the interval  measures the strength or impulse impulse of the forcing function . In particular, assume that and It is easy to see that in this case.  Examining this forcing function over shorter and shorter time intervals with getting closer and closer to zero, we find that in all cases. Thus, for ; however,  We can use this information to define the unit impulse function impulse unit impulse function , , to be the ``function'' that imparts an impulse of magnitude one at , but is zero for all values of other than zero. In other words, has the properties Of course, we study no such function in calculus. The ``function'' is an example of what is known as a generalized function generalized function . We call , the Dirac delta function Dirac delta function .    Dirac delta function   We can define a unit impulse at a point by considering the function . In this case,    The Laplace Transform of the Dirac Delta Function  Even though the Dirac delta function is not a piecewise continuous, exponentially bounded function, we can define its Laplace transform as the limit of the Laplace transform of as . More specifically, assume that and Assuming that , the Laplace transform of is We can use l'Hospital's rule to evaluate as , Thus, We can extend this result to allow , by   Let us now solve the initial value problem We can think of this as a damped harmonic oscillator that is struck by a hammer at time . Let and take the Laplace transform of both sides of the differential equation to obtain or Solving for , we have The inverse Laplace transform of is         f(t,y)=(y[1],-26*y[0] - 2*y[1] + delta(t,4))        Solution to    It is important to notice that we are using the Dirac delta function like an ordinary function. This requires some rigorous mathematics to justify that we can actually do this.    Important Lessons   Impulse forcing is the term used to describe a very quick push or pull on a system, such as the blow of a hammer or the force of an explosion. For example, consider the equation for a damped harmonic oscillator where is a function that is very large in a very short time interval, say and zero otherwise. The integral or since is zero outside of the interval  measures the strength or impulse of the forcing function .  We define the unit impulse function , , to be the ``function'' that imparts an impulse of magnitude one at , but is zero for all values of other than zero. In other words, has the properties The function  is an example of what is known as a generalized function . We call , the Dirac delta function .  Similarly, we can define a unit impulse at a point by considering the function . In this case,  The Laplace transform of the Dirac delta function is We can extend this result to allow , by  We can use the Dirac delta function to solve initial value problems such as or where is a function that is very large in a very short time interval.       What is impulse forcing? Give an example of a physical system where impulse forcing might be useful.       Is the Dirac delta function an actual function? Why or why not.       Exercises   Solving Initial Value Problems  Solve the initial problems in using the Laplace transform, is the unit impulse function.    , ,      , ,      , ,      , ,      , ,      , ,      "
},
{
  "id": "laplace03-2",
  "level": "2",
  "url": "laplace03.html#laplace03-2",
  "type": "Objectives",
  "number": "6.3",
  "title": "",
  "body": "  To understand Impulse forcing , a term used to describe a very quick push or pull on a system, such as the blow of a hammer or the force of an explosion, and that an impulse function can be described by Dirac delta function , , which has the properties  To understand that we can use the Dirac delta function to solve initial value problems such as or where is a function that is very large in a very short time interval.   "
},
{
  "id": "laplace03-subsection-impulse-forcing-2",
  "level": "2",
  "url": "laplace03.html#laplace03-subsection-impulse-forcing-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Impulse forcing impulse "
},
{
  "id": "laplace03-subsection-impulse-forcing-4",
  "level": "2",
  "url": "laplace03.html#laplace03-subsection-impulse-forcing-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "unit impulse function generalized function Dirac delta function "
},
{
  "id": "laplace03-subsection-dirac-delta-3",
  "level": "2",
  "url": "laplace03.html#laplace03-subsection-dirac-delta-3",
  "type": "Example",
  "number": "6.3.1",
  "title": "",
  "body": " Let us now solve the initial value problem We can think of this as a damped harmonic oscillator that is struck by a hammer at time . Let and take the Laplace transform of both sides of the differential equation to obtain or Solving for , we have The inverse Laplace transform of is         f(t,y)=(y[1],-26*y[0] - 2*y[1] + delta(t,4))        Solution to   "
},
{
  "id": "laplace03-subsection-important-lessons-2",
  "level": "2",
  "url": "laplace03.html#laplace03-subsection-important-lessons-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Impulse forcing impulse unit impulse function generalized function Dirac delta function "
},
{
  "id": "rq-laplace03-impulse",
  "level": "2",
  "url": "laplace03.html#rq-laplace03-impulse",
  "type": "Reading Question",
  "number": "6.3.4.1",
  "title": "",
  "body": "  What is impulse forcing? Give an example of a physical system where impulse forcing might be useful.    "
},
{
  "id": "rq-laplace03-dirac",
  "level": "2",
  "url": "laplace03.html#rq-laplace03-dirac",
  "type": "Reading Question",
  "number": "6.3.4.2",
  "title": "",
  "body": "  Is the Dirac delta function an actual function? Why or why not.    "
},
{
  "id": "laplace03-exercises-solve-ivps-3",
  "level": "2",
  "url": "laplace03.html#laplace03-exercises-solve-ivps-3",
  "type": "Exercise",
  "number": "6.3.5.1",
  "title": "",
  "body": "  , ,   "
},
{
  "id": "laplace03-exercises-solve-ivps-4",
  "level": "2",
  "url": "laplace03.html#laplace03-exercises-solve-ivps-4",
  "type": "Exercise",
  "number": "6.3.5.2",
  "title": "",
  "body": "  , ,   "
},
{
  "id": "laplace03-exercises-solve-ivps-5",
  "level": "2",
  "url": "laplace03.html#laplace03-exercises-solve-ivps-5",
  "type": "Exercise",
  "number": "6.3.5.3",
  "title": "",
  "body": "  , ,   "
},
{
  "id": "laplace03-exercises-solve-ivps-6",
  "level": "2",
  "url": "laplace03.html#laplace03-exercises-solve-ivps-6",
  "type": "Exercise",
  "number": "6.3.5.4",
  "title": "",
  "body": "  , ,   "
},
{
  "id": "laplace03-exercises-solve-ivps-7",
  "level": "2",
  "url": "laplace03.html#laplace03-exercises-solve-ivps-7",
  "type": "Exercise",
  "number": "6.3.5.5",
  "title": "",
  "body": "  , ,   "
},
{
  "id": "laplace03-exercises-solve-ivps-8",
  "level": "2",
  "url": "laplace03.html#laplace03-exercises-solve-ivps-8",
  "type": "Exercise",
  "number": "6.3.5.6",
  "title": "",
  "body": "  , ,   "
},
{
  "id": "laplace04",
  "level": "1",
  "url": "laplace04.html",
  "type": "Section",
  "number": "6.4",
  "title": "Convolution",
  "body": " Convolution    To understand that if and are two piecewise continuous exponentially bounded functions, then we can define the convolution product of and to be  To understand that the convolution product has many properties similar to those of ordinary multiplication.  To understand that if and be two piecewise continuous exponentially bounded functions and and for , then for .  To understand that it is possible to write a solution for the initial value problem using the Convolution Theorem .     When solving an initial value problem using Laplace transforms, we employed the strategy of converting the differential equation to an algebraic equation. Once the the algebraic equation is solved, we can recover the solution to the initial value problem using the inverse Laplace transform. While our strategy is straight forward, finding an inverse Laplace tranform can be a hindrance. Often finding the inverse transform involves decomposing a complicated product into the sum for partial fractions. Fortunately, there is a product rule for inverse Laplace transforms. This product rule will allow us to quickly compute solutions of a harmonic oscillator with different forcing functions.    Convolution  If and are two piecewise continuous exponentially bounded functions, then we define the convolution product of and to be The convolution product has many properties similar to those of ordinary multiplication.  Commutivity: .  Distribution: .  Associativity: .  .  All of these properties can be proven using the definition of convolution and the properties of integration.    convolution product   There is, however, no multiplicative identity. In other words, . For example, suppose that . Then Also, it may not be the case that is a nonnegative function.  A key property of the Laplace transform is how convolution products behave.   Convolution Theorem Convolution Theorem   Let and be two piecewise continuous exponentially bounded functions, and suppose that and for . Then for .     If then where is the change of variable. Reversing the order of integration, we have However, this last expression is just the Laplace transform of .     Applying the Convolution Theorem  The Convolution Theorem ( ) can be very useful for finding the inverse transforms of products, since For example, suppose that we wish to find the inverse transform of Since and , we know that Of course, we could have used partial fractions to decompose .   Instead of using partial fractions, let us use the Convolution Theorem ( ) to calculate the inverse Laplace transform of The inverse Laplace transform of is , and the inverse Laplace transform of . is . Using the Convolution Theorem, the inverse Laplace transform of is   We can also use the Convolution Theorem to solve initial value problems.   Consider the initial value problem Taking the Laplace transform of both sides of the differential equation and applying the initial conditions, we obtain where is the Laplace transform of . Solving for , we have The last term corresponds to the forcing term of our differential equation. Taking the inverse Laplace transform of both sides and applying the Convolution Theorem, we get   Notice that we did not specify a particular forcing function in . In fact, it is possible to write a solution for the initial value problem using the Convolution Theorem without knowing what the actual forcing function . Taking the Laplace transform of both sides of the differential equation and using the initial conditions, we have or where Therefore, where and . Observe that is the solution to the initial value problem Once we have values for , , and , the function is easy to find. To find , we first write where . If is the inverse Laplace transform of , then  If we consider the case where , then and . This means that is a solution to the initial value problem For this reason, is sometimes called the impulse response impulse response of the system.    Important Lessons   If and are two piecewise continuous exponentially bounded functions, then we define the convolution product of and to be  The convolution product has many properties similar to those of ordinary multiplication.  Commutivity:  Distribution:  Associativity:   There is, however, no multiplicative identity. In other words, . Also, it may not be the case that is a nonnegative function.  Let and be two piecewise continuous exponentially bounded functions, and suppose that and for . Then for .  It is possible to write a solution for the initial value problem using the Convolution Theorem.       Explain how the convolution product of two functions is useful when solving an initial value problem.       Exercises   Convolution of Two Functions  Calculate the convolution product of and in using the definition of the convolution of two functions.    and      and      and      and      and      and      Convolution and the Inverse Transform  Calculate the inverse Laplace transform of in using the convolution product.                                  Solving Initial Value Problems  Solve the initial problems in using the method described in .    , ,      , ,      , ,      , ,      , ,      , ,       Prove that the distributive property holds for the convolution product. That is, show that .      Prove that the convolution product of two functions and distributes multiplication over addition. That is, show that for functions , , and .      Prove that the convolution product is associative. In other words, show that for functions , , and .      Prove that .     "
},
{
  "id": "laplace04-2",
  "level": "2",
  "url": "laplace04.html#laplace04-2",
  "type": "Objectives",
  "number": "6.4",
  "title": "",
  "body": "  To understand that if and are two piecewise continuous exponentially bounded functions, then we can define the convolution product of and to be  To understand that the convolution product has many properties similar to those of ordinary multiplication.  To understand that if and be two piecewise continuous exponentially bounded functions and and for , then for .  To understand that it is possible to write a solution for the initial value problem using the Convolution Theorem .   "
},
{
  "id": "laplace04-subsection-convolution-2",
  "level": "2",
  "url": "laplace04.html#laplace04-subsection-convolution-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "convolution product "
},
{
  "id": "laplace04-theorem-convolution",
  "level": "2",
  "url": "laplace04.html#laplace04-theorem-convolution",
  "type": "Theorem",
  "number": "6.4.1",
  "title": "Convolution Theorem.",
  "body": " Convolution Theorem Convolution Theorem   Let and be two piecewise continuous exponentially bounded functions, and suppose that and for . Then for .   "
},
{
  "id": "laplace04-subsection-convolution-7",
  "level": "2",
  "url": "laplace04.html#laplace04-subsection-convolution-7",
  "type": "Proof",
  "number": "6.4.1.1",
  "title": "",
  "body": " If then where is the change of variable. Reversing the order of integration, we have However, this last expression is just the Laplace transform of .  "
},
{
  "id": "laplace04-subsection-applying-convolution-3",
  "level": "2",
  "url": "laplace04.html#laplace04-subsection-applying-convolution-3",
  "type": "Example",
  "number": "6.4.2",
  "title": "",
  "body": " Instead of using partial fractions, let us use the Convolution Theorem ( ) to calculate the inverse Laplace transform of The inverse Laplace transform of is , and the inverse Laplace transform of . is . Using the Convolution Theorem, the inverse Laplace transform of is  "
},
{
  "id": "laplace04-example-convolution",
  "level": "2",
  "url": "laplace04.html#laplace04-example-convolution",
  "type": "Example",
  "number": "6.4.3",
  "title": "",
  "body": " Consider the initial value problem Taking the Laplace transform of both sides of the differential equation and applying the initial conditions, we obtain where is the Laplace transform of . Solving for , we have The last term corresponds to the forcing term of our differential equation. Taking the inverse Laplace transform of both sides and applying the Convolution Theorem, we get  "
},
{
  "id": "laplace04-subsection-applying-convolution-7",
  "level": "2",
  "url": "laplace04.html#laplace04-subsection-applying-convolution-7",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "impulse response "
},
{
  "id": "laplace04-subsection-important-lessons-2",
  "level": "2",
  "url": "laplace04.html#laplace04-subsection-important-lessons-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "convolution product "
},
{
  "id": "rq-laplace04-convolution",
  "level": "2",
  "url": "laplace04.html#rq-laplace04-convolution",
  "type": "Reading Question",
  "number": "6.4.4.1",
  "title": "",
  "body": "  Explain how the convolution product of two functions is useful when solving an initial value problem.    "
},
{
  "id": "laplace04-exercises-convolution-3",
  "level": "2",
  "url": "laplace04.html#laplace04-exercises-convolution-3",
  "type": "Exercise",
  "number": "6.4.5.1",
  "title": "",
  "body": "  and   "
},
{
  "id": "laplace04-exercises-convolution-4",
  "level": "2",
  "url": "laplace04.html#laplace04-exercises-convolution-4",
  "type": "Exercise",
  "number": "6.4.5.2",
  "title": "",
  "body": "  and   "
},
{
  "id": "laplace04-exercises-convolution-5",
  "level": "2",
  "url": "laplace04.html#laplace04-exercises-convolution-5",
  "type": "Exercise",
  "number": "6.4.5.3",
  "title": "",
  "body": "  and   "
},
{
  "id": "laplace04-exercises-convolution-6",
  "level": "2",
  "url": "laplace04.html#laplace04-exercises-convolution-6",
  "type": "Exercise",
  "number": "6.4.5.4",
  "title": "",
  "body": "  and   "
},
{
  "id": "laplace04-exercises-convolution-7",
  "level": "2",
  "url": "laplace04.html#laplace04-exercises-convolution-7",
  "type": "Exercise",
  "number": "6.4.5.5",
  "title": "",
  "body": "  and   "
},
{
  "id": "laplace04-exercises-convolution-8",
  "level": "2",
  "url": "laplace04.html#laplace04-exercises-convolution-8",
  "type": "Exercise",
  "number": "6.4.5.6",
  "title": "",
  "body": "  and   "
},
{
  "id": "laplace04-exercises-inverse-3",
  "level": "2",
  "url": "laplace04.html#laplace04-exercises-inverse-3",
  "type": "Exercise",
  "number": "6.4.5.7",
  "title": "",
  "body": "    "
},
{
  "id": "laplace04-exercises-inverse-4",
  "level": "2",
  "url": "laplace04.html#laplace04-exercises-inverse-4",
  "type": "Exercise",
  "number": "6.4.5.8",
  "title": "",
  "body": "    "
},
{
  "id": "laplace04-exercises-inverse-5",
  "level": "2",
  "url": "laplace04.html#laplace04-exercises-inverse-5",
  "type": "Exercise",
  "number": "6.4.5.9",
  "title": "",
  "body": "    "
},
{
  "id": "laplace04-exercises-inverse-6",
  "level": "2",
  "url": "laplace04.html#laplace04-exercises-inverse-6",
  "type": "Exercise",
  "number": "6.4.5.10",
  "title": "",
  "body": "    "
},
{
  "id": "laplace04-exercises-inverse-7",
  "level": "2",
  "url": "laplace04.html#laplace04-exercises-inverse-7",
  "type": "Exercise",
  "number": "6.4.5.11",
  "title": "",
  "body": "    "
},
{
  "id": "laplace04-exercises-inverse-8",
  "level": "2",
  "url": "laplace04.html#laplace04-exercises-inverse-8",
  "type": "Exercise",
  "number": "6.4.5.12",
  "title": "",
  "body": "    "
},
{
  "id": "laplace04-exercises-solve-ivps-3",
  "level": "2",
  "url": "laplace04.html#laplace04-exercises-solve-ivps-3",
  "type": "Exercise",
  "number": "6.4.5.13",
  "title": "",
  "body": "  , ,   "
},
{
  "id": "laplace04-exercises-solve-ivps-4",
  "level": "2",
  "url": "laplace04.html#laplace04-exercises-solve-ivps-4",
  "type": "Exercise",
  "number": "6.4.5.14",
  "title": "",
  "body": "  , ,   "
},
{
  "id": "laplace04-exercises-solve-ivps-5",
  "level": "2",
  "url": "laplace04.html#laplace04-exercises-solve-ivps-5",
  "type": "Exercise",
  "number": "6.4.5.15",
  "title": "",
  "body": "  , ,   "
},
{
  "id": "laplace04-exercises-solve-ivps-6",
  "level": "2",
  "url": "laplace04.html#laplace04-exercises-solve-ivps-6",
  "type": "Exercise",
  "number": "6.4.5.16",
  "title": "",
  "body": "  , ,   "
},
{
  "id": "laplace04-exercises-solve-ivps-7",
  "level": "2",
  "url": "laplace04.html#laplace04-exercises-solve-ivps-7",
  "type": "Exercise",
  "number": "6.4.5.17",
  "title": "",
  "body": "  , ,   "
},
{
  "id": "laplace04-exercises-solve-ivps-8",
  "level": "2",
  "url": "laplace04.html#laplace04-exercises-solve-ivps-8",
  "type": "Exercise",
  "number": "6.4.5.18",
  "title": "",
  "body": "  , ,   "
},
{
  "id": "laplace04-exercises-5",
  "level": "2",
  "url": "laplace04.html#laplace04-exercises-5",
  "type": "Exercise",
  "number": "6.4.5.19",
  "title": "",
  "body": "  Prove that the distributive property holds for the convolution product. That is, show that .   "
},
{
  "id": "laplace04-exercises-6",
  "level": "2",
  "url": "laplace04.html#laplace04-exercises-6",
  "type": "Exercise",
  "number": "6.4.5.20",
  "title": "",
  "body": "  Prove that the convolution product of two functions and distributes multiplication over addition. That is, show that for functions , , and .   "
},
{
  "id": "laplace04-exercises-7",
  "level": "2",
  "url": "laplace04.html#laplace04-exercises-7",
  "type": "Exercise",
  "number": "6.4.5.21",
  "title": "",
  "body": "  Prove that the convolution product is associative. In other words, show that for functions , , and .   "
},
{
  "id": "laplace04-exercises-8",
  "level": "2",
  "url": "laplace04.html#laplace04-exercises-8",
  "type": "Exercise",
  "number": "6.4.5.22",
  "title": "",
  "body": "  Prove that .   "
},
{
  "id": "laplace05",
  "level": "1",
  "url": "laplace05.html",
  "type": "Section",
  "number": "6.5",
  "title": "Projects for Laplace Transforms",
  "body": " Projects for Laplace Transforms   Project Tank Interrupt Mixing   Water containing 2 kg of salt per liter (L) is poured into a tank at a rate of 1 L\/min, and the well-stirred mixture leaves at the same rate. After 10 min, the process is stopped and fresh water is poured into the tank at a rate of 1 L\/min, with the new mixture leaving at 1 L\/min. We seek to model this situation in order to determine the amount (kg) of salt in the tank at the end of 20 minutes if there were 100 L of pure water initially in the tank. This project is adapted from Norman Loney (2018), 7-040-S-TankInterruptMixing,  .    Build a mathematical model for the amount of salt in kg in the tank at time in min with two parts, first over the time interval minutes and then over the time interval minutes. You can assume instantaneous mixing of the two different solutions.    Build a mathematical model for the amount of salt in kg in the tank at time in min using the Heaviside or Unit Step functions to represent the sudden change in input water types and apply Laplace Transforms and Inverse Laplace Transforms to determine the amount of salt in the tank over the entire interval minutes. Then compare your results with Activity 1.    "
},
{
  "id": "laplace05-project-tank-interrupt-mixing",
  "level": "2",
  "url": "laplace05.html#laplace05-project-tank-interrupt-mixing",
  "type": "Project",
  "number": "6.5.1",
  "title": "Project—Tank Interrupt Mixing.",
  "body": " Project Tank Interrupt Mixing   Water containing 2 kg of salt per liter (L) is poured into a tank at a rate of 1 L\/min, and the well-stirred mixture leaves at the same rate. After 10 min, the process is stopped and fresh water is poured into the tank at a rate of 1 L\/min, with the new mixture leaving at 1 L\/min. We seek to model this situation in order to determine the amount (kg) of salt in the tank at the end of 20 minutes if there were 100 L of pure water initially in the tank. This project is adapted from Norman Loney (2018), 7-040-S-TankInterruptMixing,  .    Build a mathematical model for the amount of salt in kg in the tank at time in min with two parts, first over the time interval minutes and then over the time interval minutes. You can assume instantaneous mixing of the two different solutions.    Build a mathematical model for the amount of salt in kg in the tank at time in min using the Heaviside or Unit Step functions to represent the sudden change in input water types and apply Laplace Transforms and Inverse Laplace Transforms to determine the amount of salt in the tank over the entire interval minutes. Then compare your results with Activity 1.   "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Appendix",
  "number": "A",
  "title": "Hints and Answers to Selected Exercises",
  "body": " Hints and Answers to Selected Exercises  "
},
{
  "id": "backmatter-3",
  "level": "1",
  "url": "backmatter-3.html",
  "type": "References",
  "number": "",
  "title": "Readings and References",
  "body": " Readings and References  Gregory V. Bard. Sage for Undergraduates . American Mathematical Society, Providence, 2015.  Paul Blanchard, Robert L. Devaney, & Glen R. Hall. Differential Equations , third edition. Brooks\/Cole, Pacific Grove, CA, 2006.  Robert L. Borrelli & Courtney S. Coleman. Differential Equations: A Modeling Perspective , Second edition. John Wiley & Sons, New York, 2004.  William E. Boyce & Richard C. Diprima. Elementary Differential Equations and Boundary Value Problems , Eighth edition. John Wiley & Sons, New York, 2005.  Brauer, F. & C. Castillo-Chávez. Mathematical Models in Population Biology and Epidemiology , Texts in Applied Mathematics 40. Springer, New York, 2001.  Martin Braun. Differential Equations and Their Applications: An Introduction to Applied Mathematics , Fourth edition. Springer-Verlag, New York, 1992.  Nicholas Britton. Essential Mathematical Biology . Springer Undergraduate Series. Springer, New York, 2003.  Richard L. Burden & Douglas Faires. Numerical Analysis , Eighth edition Brooks\/Cole, Pacific Grove, CA, 2005.  Ward Cheney & David Kincaid. Numerical Mathematics and Computing . Fifth edition. Brooks\/Cole, Pacific Grove, CA, 2004.  C. Henry Edwards & David E. Penney. Elementary Differential Equations with Boundary Value Problems . Fifth edition. Prentice Hall, Upper Saddle River, NJ, 2004.  Elton, C. S. & M. Nicholson. The ten year cycle in the numbers of lynx in Canada,  Journal of Animal Ecology . 11 (1942), pp.215 244.  Morris W. Hirsch, Stephen Smale, & Robert L. Devaney. Differential Equations, Dynamical Systems, & an Introduction to Chaos , Second edition. Academic Press, San Diego, 2004.  L. D. Humphreys and R. Shammas. Finding unpredictable behavior in a simple ordinary differential equation, College Mathematics Journal 31(2000) 338 346.  A. C. Lazer and P. J. McKenna. Large amplitude periodic oscillations in suspension bridges: some new connections with nonlinear analysis, SIAM Review 32(1990) 537 578.  Edward N. Lorenz. Deterministic nonperiodic flow,  Journal of Atomospheric Science 20(1963), pp. 130 141.  Donald Ludwig, Dixon D. Jones, & Crawford S. Holling. Qualitative analysis of insect outbreak systems: the spruce budworm and forest,  The Journal of Animal Ecology (1978), pp. 315 332.  K. W. Malcolm, N. B. Sze, & J. Prather. Better protection of the ozone layer,  Nature 367(1994), pp. 505 508.  P. J. McKenna. Large torsional oscillations in suspension bridges revisited: fixing an old approximation, American Mathematical Monthly 106(1999) 1 18.  P. J. McKenna and Cillian Ò Tuama. Large torsional oscillations in suspension bridges visited again: vertical forcing creates torsional response, American Mathematical Monthly 108(2001) 738 745.  Perelson, A. S. & P. W. Nelson. Modeling Viral Infections in An Introduction to Mathematical Modeling in Physiology, Cell Biology, and Immunology . American Mathematical Society, Providence, 2002.  John Polking, Albert Boggess, & David Arnold. Differential Equations with Boundary Value Problems , second edition. Prentice Hall, Upper Saddle River, NJ, 2006.  Clifford Henry Taubes. Modeling Differential Equations in Biology , second edition. Cambridge University Press, Cambridge, U.K., 2008.  "
},
{
  "id": "backmatter-4",
  "level": "1",
  "url": "backmatter-4.html",
  "type": "Appendix",
  "number": "B",
  "title": "Notation",
  "body": " Notation   The following table defines the notation used in this book. Page numbers or references refer to the first appearance of each symbol.    "
},
{
  "id": "backmatter-5",
  "level": "1",
  "url": "backmatter-5.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": "   "
},
{
  "id": "backmatter-6",
  "level": "1",
  "url": "backmatter-6.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored and produced with PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
