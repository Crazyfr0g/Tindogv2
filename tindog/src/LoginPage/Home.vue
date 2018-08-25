<template> 
    <div>
        <div class="box">
        <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item" id="Image">
                    
                 </a>

                    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>     
            </div>
                
            <div class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item" id="navbarstyle">
                        Tindog
                    </a>
                </div>
                          
                <div class="navbar-end"> 
                    <a class="navbar-item">
                     <a class="button is-primary is-medium is-rounded">Sign In</a>
                    </a>
                    <a class="navbar-item">
                    <a class="button is-primary is-medium is-rounded">Sign Up</a>
                    </a>
                </div>
            </div>               
        </nav>
        </div>

        <div class="Sample" id="Image">
            <h1>{{ Image }}</h1>
        </div>
    </div>
</template>

