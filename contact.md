---
layout: default
title: Contact Us
---




<div class="contactmain_section">
    <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6 col-md-6 col-12">
                <div class="main_title_sec">
                    <h2 class="main_title">We're Here to Help You, Connect with LogicStar AI</h2>
                    <p>Have questions, need support, or just want to learn more?</p>
                </div>
                <form action="https://formcarry.com/s/iy9helLGmjq" method="POST">
                    <!-- <div class="">
                        <label for="userTypeDescription" class="form-label">We're Here to Help You, Connect with LogicStar AI</label>
                        <div class="btn-group-toggle mt-2" data-toggle="buttons">
                            <input type="radio" class="btn-check" id="customer" autocomplete="off" value="customer" name="updateType" checked>
                            <label class="btn btn-outline-secondary" for="customer"><i class="fas fa-user"></i> Customer</label>
                            <input type="radio" class="btn-check" id="employee" autocomplete="off" value="employee" name="updateType">
                            <label class="btn btn-outline-secondary" for="employee"><i class="fas fa-user-tie"></i> Employee</label>
                            <input type="radio" class="btn-check" id="investor" autocomplete="off" value="investor" name="updateType">
                            <label class="btn btn-outline-secondary" for="investor"><i class="fas fa-hand-holding-usd"></i> Investor</label>
                            <input type="radio" class="btn-check" id="general" autocomplete="off" value="general" name="updateType">
                            <label class="btn btn-outline-secondary" for="general"><i class="fas fa-cog"></i> General</label>
                        </div>
                    </div> -->
                    <div class="row">
                        <div class="col-lg-6"> 
                            <div class="form-group">
                                <label for="firstName" class="form-label">First Name *</label>
                                <input type="text" class="form-control" id="firstName" name="firstName" placeholder="Enter first name" required>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="form-group">
                                <label for="lastName" class="form-label">Last Name *</label>
                                <input type="text" class="form-control" id="lastName" name="lastName" placeholder="Enter last name" required>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="form-group">
                                <label for="email" class="form-label">Email Address *</label>
                                <input type="email" class="form-control" id="email" name="email" placeholder="Enter your email address" required>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <div class="form-group">
                                <label for="comments" class="form-label">Message    </label>
                                <textarea class="form-control" id="comments" name="comments" rows="4" placeholder="Describe your query here"></textarea>
                             </div>
                        </div>
                        <div class="col-lg-12">
                             <div class="form-check">
                                <label class="form-check-label" for="privacyPolicy"> By submitting the form, I agree that an e-mail with the form details will be transmitted to a LogicStar team member
                                <input type="checkbox" class="form-check-input" id="privacyPolicy" name="privacyPolicy" required>
                                <span class="checkmark"></span>
                                <!-- <a href="{{ site.baseurl }}/company/privacy">privacy policy</a>. -->
                                </label>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <button type="submit" class="btn btn-styled w-100">Submit <i class="icon icon-icon-2"></i></button>
                        </div>
                    </div>
                    <!-- <div class="">
                        <label for="company" class="form-label">Company (optional)</label>
                        <input type="text" class="form-control" id="company" name="company">
                    </div> -->
                </form>
            </div>
            <div class="col-lg-6 col-md-6 col-12">
                <div class="contact_right_sec">
                    <img src="{{ site.baseurl }}/assets/images/website/contact-right.svg">
                </div>
            </div>
        </div>
    </div>
<div>


<div class="address_section">
    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-md-6 col-12">
                <div class="address_box">
                    <div class="address_icon">
                        <i class="icon icon-icon-11"></i>
                    </div>
                    <div class="address_content">
                        <p class="box_link">LogicStar AG, Konradstrasse 20, 8005 Zürich, Switzerland</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-12">
                <div class="address_box">
                    <a class="address_icon" href="https://www.linkedin.com/in/bpaskalev/">
                        <i class="icon icon-icon-12"></i>
                    </a>
                    <div class="address_content">
                        <a class="box_link" href="https://www.linkedin.com/in/bpaskalev/">@borispaskalev</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 col-12">
                <div class="address_box">
                    <a class="address_icon" href="mailto:info@logicstar.ai">
                        <i class="icon icon-icon-13"></i>
                    </a>
                    <div class="address_content">
                        <a class="box_link" href="mailto:info@logicstar.ai">info@logicstar.ai </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<!-- <p>
You can always contact us through one of the following email addresses:
</p> -->

<!-- <table class="table table-hover">
    <thead class="table-dark">
        <tr>
            <th>Email</th>
            <th>Purpose</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><mail to="customers" addBody="true"></mail></td>
            <td>Customer inquiries and support</td>
        </tr>
        <tr>
            <td><mail to="investors" addBody="true"></mail></td>
            <td>Investor relations and inquiries</td>
        </tr>
        <tr>
            <td><mail to="careers" addBody="true"></mail></td>
            <td>Job applications and career inquiries</td>
        </tr>
        <tr>
            <td><mail to="info" addBody="true"></mail></td>
            <td>General information and inquiries</td>
        </tr>
    </tbody>
</table> -->

<script>
    // Function to get query parameter by name
    function getQueryParam(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    // Function to set the radio button based on the query parameter
    function setRadioButton() {
        const updateType = getQueryParam('updateType');
        if (updateType) {
            document.getElementById(updateType).checked = true;
        }
    }

    // Call the function when the page loads
    window.onload = setRadioButton;
</script>