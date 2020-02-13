<div>
<Wrapper>
  <Container>
<div>
  <Row>
    <SortBtn
      onClick={this.handleOnClick}
    >
    </SortBtn>
  </Row>
</div>
<div>
  <Row>
    <Filter
      onChange={this.handleInputChange}  
      onSubmit={this.handleFormSubmit}
    />
  </Row>
</div>
    <Row>
      <h1 className="title">Peoples List</h1>
      {this.state.peoples.map((peoples, index) => (
        <PeopleCard
          key={peoples.login.uuid}
          name={peoples.name.first + " " + peoples.name.last}

          email={peoples.email}
          picture={peoples.picture.medium}
          location={peoples.location.city}
        />
      ))}
    </Row>
  </Container>
</Wrapper>

</div>